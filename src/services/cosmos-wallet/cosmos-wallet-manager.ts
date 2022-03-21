import { DirectSignResponse } from '@cosmjs/proto-signing';
import cosmosChains from 'constants/cosmos-chains';
import { cosmos, google } from 'constants/cosmos-v0.44.5';
import dotenv from 'dotenv';
import _ from 'lodash';
import Long from 'long';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import keplrWallet from 'services/cosmos-wallet/keplr-wallet';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import accountStore from 'stores/account-store';
import { CosmosWalletType, ICosmosWallet, ICosmosWalletManager, SupportedCosmosChain, CosmosBroadcastSource } from 'types';

dotenv.config();
const logger = loggerFactory.getLogger('[CosmosWalletManager]');

const walletMap: Record<CosmosWalletType, ICosmosWallet> = {
  [CosmosWalletType.Keplr]: keplrWallet
};

const chainWalletTypeMap: Record<SupportedCosmosChain, CosmosWalletType | undefined> = {
  [SupportedCosmosChain.GravityBridge]: undefined,
  [SupportedCosmosChain.Osmosis]: undefined,
  [SupportedCosmosChain.Stargaze]: undefined,
  [SupportedCosmosChain.Cosmos]: undefined,
  [SupportedCosmosChain.Cheqd]: undefined
};

const chainWalletMap: Record<SupportedCosmosChain, ICosmosWallet | undefined> = {
  [SupportedCosmosChain.GravityBridge]: undefined,
  [SupportedCosmosChain.Osmosis]: undefined,
  [SupportedCosmosChain.Stargaze]: undefined,
  [SupportedCosmosChain.Cosmos]: undefined,
  [SupportedCosmosChain.Cheqd]: undefined
};

async function init (): Promise<void> {
  for (const chain of _.values(SupportedCosmosChain)) {
    const walletType = window.localStorage.getItem(chain.toString());
    if (walletType && typeHelper.isCosmosWalletType(walletType)) {
      try {
        await connect(chain as SupportedCosmosChain, walletType);
      } catch (error) {
        logger.error(`[init] Error on chain: ${chain} and wallet type: ${walletType}`, error);
      }
    }
  }
}

async function connect (chain: SupportedCosmosChain, walletType: CosmosWalletType): Promise<void> {
  logger.info(`[connect] Connecting ${walletType} for ${chain}...`);
  const wallet = getWallet(walletType);
  if (!wallet) {
    logger.error(`[connect] ${walletType} is not supported!`);
    throw new Error(`${walletType} is not supported!`);
  }

  setWallet(chain, walletType);
  const chainInfo = cosmosChains[chain];
  await wallet.addChain(chainInfo.chainId);
  const account = await wallet.getAccount(chainInfo.chainId);
  account.balance = await getBalance(chain, account.address);
  accountStore.updateAccount(chain, account, walletType);
}

async function sign (chain: SupportedCosmosChain, messages: google.protobuf.IAny[]): Promise<DirectSignResponse> {
  const wallet = getWalletByChain(chain);
  if (!wallet) {
    logger.error(`[sign] No wallet for ${chain}!`);
    throw new Error(`No wallet for ${chain}!`);
  }

  const chainInfo = cosmosChains[chain];
  const chainId = chainInfo.chainId;

  const account = await wallet.getAccount(chainId);
  logger.info('[sign] Account from wallet:', account);
  if (!account) {
    const errorMessage = `Can't get account for ${chain}!`;
    logger.error('[sign]', errorMessage);
    throw new Error(errorMessage);
  }

  const txBody = cosmosTxService.createTxBody(messages);
  logger.info('[sign] txBody:', txBody);

  const [accountNumber, sequence] = await getAccountInfo(chain, account.address);
  const fee = '0';
  const gasLimit = new Long(200000);
  const mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;

  const authInfo = cosmosTxService.getAuthInfo(
    account.pubKey,
    sequence,
    fee,
    gasLimit,
    mode
  );
  logger.info('[sign] Auth Info:', authInfo);

  const signDoc = cosmosTxService.getSignDoc(
    chainId,
    txBody,
    authInfo,
    new Long(_.toNumber(accountNumber))
  );
  logger.info('[sign] Sign Doc:', signDoc);

  return wallet.sign(chainId, account.address, signDoc);
}

async function broadcast (
  chain: SupportedCosmosChain,
  txBytes: Uint8Array,
  broadCastMode: cosmos.tx.v1beta1.BroadcastMode,
  broadCastSource: CosmosBroadcastSource
): Promise<string> {
  let result;
  if (broadCastSource === CosmosBroadcastSource.Lcd) {
    result = await lcdService.broadcastProtoTx(chain, txBytes, broadCastMode);
  } else if (broadCastSource === CosmosBroadcastSource.Wallet) {
    const chainInfo = cosmosChains[chain];
    const chainId = chainInfo.chainId;
    const wallet = getWalletByChain(chain);
    if (wallet) {
      result = await wallet.sendTx(chainId, txBytes, broadCastMode);
    }
  }

  logger.info('[broadcast] Result:', result);
  const code = _.get(result, 'tx_response.code');
  const txhash = _.get(result, 'tx_response.txhash');

  if (code !== 0) {
    const rawLog = _.get(result, 'tx_response.raw_log');
    logger.error('[broadcast]', rawLog);
    throw new Error(rawLog);
  }

  return txhash;
}

function getWallet (walletType: CosmosWalletType): ICosmosWallet {
  return walletMap[walletType];
}

function getWalletByChain (chain: SupportedCosmosChain): ICosmosWallet | undefined {
  const type = chainWalletTypeMap[chain];
  if (type) {
    return getWallet(type);
  } else {
    return undefined;
  }
}

function setWallet (chain: SupportedCosmosChain, walletType: CosmosWalletType): void {
  const wallet = getWallet(walletType);
  chainWalletTypeMap[chain] = walletType;
  chainWalletMap[chain] = wallet;
  logger.info(chain, walletType);
  window.localStorage.setItem(chain, walletType);
}

async function getBalance (chain: SupportedCosmosChain, address: string): Promise<string> {
  try {
    logger.info(`[getBalance] Getting balance of ${address}...`);
    const chainInfo = cosmosChains[chain];
    const _balance = await lcdService.getBalance(chain, address);
    const balance = _.find(_balance, { denom: chainInfo.denom });
    return _.get(balance, 'amount', '0');
  } catch (error) {
    logger.error('[getBalance]', error);
    return '0';
  }
}

async function getAccountInfo (chain: SupportedCosmosChain, address: string): Promise<[string, Long]> {
  try {
    logger.info(`[getAccountInfo] Getting balance of ${address}...`);
    const accountInfo = await lcdService.getAccountInfo(chain, address);
    logger.info('[getAccountInfo] Account Info:', accountInfo);
    const accountNumber = _.get(accountInfo, 'base_vesting_account.base_account.account_number') ||
      _.get(accountInfo, 'account_number');
    const sequence = _.get(accountInfo, 'base_vesting_account.base_account.sequence') ||
      _.get(accountInfo, 'sequence');

    return [accountNumber, sequence];
  } catch (error) {
    logger.error('[getAccountInfo]', error);
    return ['', new Long(0)];
  }
}

const walletManager: ICosmosWalletManager = {
  init,
  connect,
  sign,
  broadcast
};

export default walletManager;
