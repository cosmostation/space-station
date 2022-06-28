import { AminoMsg, AminoSignResponse } from '@cosmjs/amino';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import cosmosChains from 'constants/cosmos-chains';
import { cosmos, google } from 'constants/cosmos-v0.44.5';
import dotenv from 'dotenv';
import _ from 'lodash';
import Long from 'long';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import keplrWallet from 'services/cosmos-wallet/keplr-wallet';
import ledgerCosmosWallet from 'services/cosmos-wallet/ledger-cosmos-wallet';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import accountStore from 'stores/account-store';
import {
  AccountChangeEventHandler,
  BroadcastSource,
  CosmosWalletType,
  ICosmosWallet,
  ICosmosWalletManager,
  NetworkChangeEventHandler,
  SupportedCosmosChain,
} from 'types';

dotenv.config();
const logger = loggerFactory.getLogger('[CosmosWalletManager]');

const walletMap: Record<CosmosWalletType, ICosmosWallet> = {
  [CosmosWalletType.Keplr]: keplrWallet,
  [CosmosWalletType.Ledger]: ledgerCosmosWallet
};

const chainWalletTypeMap: Record<SupportedCosmosChain, CosmosWalletType | undefined> = {
  [SupportedCosmosChain.GravityBridge]: undefined,
  [SupportedCosmosChain.Osmosis]: undefined,
  [SupportedCosmosChain.Stargaze]: undefined,
  [SupportedCosmosChain.Cosmos]: undefined,
  [SupportedCosmosChain.Cheqd]: undefined,
  [SupportedCosmosChain.Iris]: undefined,
  [SupportedCosmosChain.Chihuahua]: undefined,
  [SupportedCosmosChain.Nyx]: undefined,
  [SupportedCosmosChain.Crescent]: undefined,
  [SupportedCosmosChain.Secret]: undefined
};

const chainWalletMap: Record<SupportedCosmosChain, ICosmosWallet | undefined> = {
  [SupportedCosmosChain.GravityBridge]: undefined,
  [SupportedCosmosChain.Osmosis]: undefined,
  [SupportedCosmosChain.Stargaze]: undefined,
  [SupportedCosmosChain.Cosmos]: undefined,
  [SupportedCosmosChain.Cheqd]: undefined,
  [SupportedCosmosChain.Iris]: undefined,
  [SupportedCosmosChain.Chihuahua]: undefined,
  [SupportedCosmosChain.Nyx]: undefined,
  [SupportedCosmosChain.Crescent]: undefined,
  [SupportedCosmosChain.Secret]: undefined
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
  try {
    const chainInfo = cosmosChains[chain];

    logger.info(`[connect] Connecting ${walletType} for ${chain}...`);
    const wallet = getWallet(walletType);
    if (!wallet) {
      logger.error(`[connect] ${walletType} is not supported!`);
      throw new Error(`${walletType} is not supported!`);
    }

    await wallet.connect(chainInfo);
    const account = await wallet.getAccount(chainInfo);
    if (account) {
      setWallet(chain, walletType);
      account.balance = await getBalance(chain, account.address);
      accountStore.updateAccount(chain, account, walletType);
      registerEventHandlers(chain);
    }
  } catch (error) {
    logger.error('[connect]', error);
    unsetWallet(chain);
    throw error;
  }
}

async function disconnect (chain: SupportedCosmosChain): Promise<void> {
  try {
    logger.info(`[disconnect] Disconnecting for ${chain}...`);
    unsetWallet(chain);
    accountStore.updateAccount(chain, undefined, undefined);
  } catch (error) {
    logger.error('[disconnect]', error);
  }
}

async function canSignDirect (chain: SupportedCosmosChain): Promise<boolean> {
  const wallet = getWalletByChain(chain);
  if (!wallet) {
    return false;
  }
  const chainInfo = cosmosChains[chain];
  return wallet.isSupportDirectSign(chainInfo);
}

async function canSignAmino (chain: SupportedCosmosChain): Promise<boolean> {
  const wallet = getWalletByChain(chain);
  if (!wallet) {
    return false;
  }
  const chainInfo = cosmosChains[chain];
  return wallet.isSupportAminoSign(chainInfo);
}

async function signDirect (
  chain: SupportedCosmosChain,
  messages: google.protobuf.IAny[],
  feeAmount: string,
  gasLimit: number,
  memo: string
): Promise<DirectSignResponse> {
  const wallet = getWalletByChain(chain);
  if (!wallet) {
    logger.error(`[signDirect] No wallet for ${chain}!`);
    throw new Error(`No wallet for ${chain}!`);
  }

  const chainInfo = cosmosChains[chain];
  const chainId = chainInfo.chainId;

  const account = await wallet.getAccount(chainInfo);
  logger.info('[signDirect] Account from wallet:', account);
  if (!account) {
    const errorMessage = `Can't get account for ${chain}!`;
    logger.error('[signDirect]', errorMessage);
    throw new Error(errorMessage);
  }

  const txBody = cosmosTxService.createTxBody(messages, memo);
  logger.info('[signDirect] txBody:', txBody);

  const [accountNumber, sequence] = await getAccountInfo(chain, account.address);
  const mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
  const authInfo = cosmosTxService.getAuthInfo(
    account.pubKey,
    sequence,
    chainInfo.denom,
    feeAmount,
    new Long(gasLimit),
    mode
  );
  logger.info('[signDirect] Auth Info:', authInfo);

  const signDoc = cosmosTxService.getSignDoc(
    chainId,
    txBody,
    authInfo,
    new Long(_.toNumber(accountNumber))
  );
  logger.info('[signDirect] Sign Doc:', signDoc);

  return wallet.signDirect(chainInfo, account.address, signDoc);
}

async function signAmino (
  chain: SupportedCosmosChain,
  messages: AminoMsg[],
  feeAmount: string,
  gasLimit: number,
  memo: string
): Promise<AminoSignResponse> {
  const wallet = getWalletByChain(chain);
  if (!wallet) {
    logger.error(`[signAmino] No wallet for ${chain}!`);
    throw new Error(`No wallet for ${chain}!`);
  }

  const chainInfo = cosmosChains[chain];
  const chainId = chainInfo.chainId;

  const account = await wallet.getAccount(chainInfo);
  logger.info('[signAmino] Account from wallet:', account);
  if (!account) {
    const errorMessage = `Can't get account for ${chain}!`;
    logger.error('[signAmino]', errorMessage);
    throw new Error(errorMessage);
  }

  const [accountNumber, sequence] = await getAccountInfo(chain, account.address);
  const aminoSignDoc = cosmosTxService.getAminoSignDoc(
    chainId,
    accountNumber,
    String(sequence),
    chainInfo.denom,
    feeAmount,
    String(gasLimit),
    messages,
    memo
  );
  logger.info('[signAmino] SignDoc:', aminoSignDoc);
  return wallet.signAmino(chainInfo, account.address, aminoSignDoc);
}

async function broadcast (
  chain: SupportedCosmosChain,
  txBytes: Uint8Array,
  broadCastMode: cosmos.tx.v1beta1.BroadcastMode,
  broadCastSource: BroadcastSource
): Promise<string> {
  if (broadCastSource === BroadcastSource.Lcd) {
    const result = await lcdService.broadcastProtoTx(chain, txBytes, broadCastMode);
    logger.info('[broadcast] Result:', result);
    const code = _.get(result, 'tx_response.code');
    const txhash = _.get(result, 'tx_response.txhash');

    if (code !== 0) {
      const rawLog = _.get(result, 'tx_response.raw_log');
      logger.error('[broadcast]', rawLog);
      throw new Error(rawLog);
    }
    return txhash;
  } else if (broadCastSource === BroadcastSource.Wallet) {
    const chainInfo = cosmosChains[chain];
    const chainId = chainInfo.chainId;
    const wallet = getWalletByChain(chain);
    if (!wallet) {
      throw new Error('No wallet to broadcast!');
    }

    if (!wallet.isSupportBroadcast) {
      throw new Error('Wallet does not support broadcast!');
    }

    const result = await wallet.sendTx(chainId, txBytes, broadCastMode);
    const txHash = _.toUpper(Buffer.from(result).toString('hex'));
    logger.info('[broadcast] Result:', txHash);
    return txHash;
  } else {
    throw new Error('No method to broadcast!');
  }
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
  window.localStorage.setItem(chain, walletType);
}

function unsetWallet (chain: SupportedCosmosChain): void {
  chainWalletTypeMap[chain] = undefined;
  chainWalletMap[chain] = undefined;
  window.localStorage.setItem(chain, '');
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

function registerEventHandlers (chain: SupportedCosmosChain): void {
  try {
    logger.info(`[registerEventHandler] Registering event handlers for ${chain}...`);
    const wallet = getWalletByChain(chain);
    if (wallet) {
      logger.info(`[registerEventHandler] Registering event handlers for ${wallet.type}...`);
      const accountChangeEventHandler = getAccountChangeEventHandler(chain, wallet);
      wallet.registerAccountChangeHandler(accountChangeEventHandler);

      const networkChangeEventHandler = getNetworkChangeEventHandler(chain, wallet);
      wallet.registerNetworkChangeHandler(networkChangeEventHandler);
    }
  } catch (error) {
    logger.error(error);
  }
}

function getAccountChangeEventHandler (chain: SupportedCosmosChain, wallet: ICosmosWallet): AccountChangeEventHandler {
  const chainInfo = cosmosChains[chain];
  return async (accounts: string[]): Promise<void> => {
    logger.info('[accountChangeEventHandler] Chain:', chain);
    logger.info('[accountChangeEventHandler] Updated accounts:', accounts);
    if (!_.isEmpty(accounts)) {
      const account = await wallet.getAccount(chainInfo);
      accountStore.updateAccount(chain, account, undefined);
    } else {
      accountStore.updateAccount(chain, undefined, undefined);
    }
  };
}

function getNetworkChangeEventHandler (chain: SupportedCosmosChain, wallet: ICosmosWallet): NetworkChangeEventHandler {
  const chainInfo = cosmosChains[chain];
  return async (chainId: string): Promise<void> => {
    logger.info('[networkChangeEventHandler] Chain:', chain);
    logger.info('[networkChangeEventHandler] Updated chain ID:', chainId);
    if (chainId !== chainInfo.chainId) {
      accountStore.updateAccount(chain, undefined, undefined);
    } else {
      const account = await wallet.getAccount(chainInfo);
      accountStore.updateAccount(chain, account, undefined);
    }
  };
}

const walletManager: ICosmosWalletManager = {
  init,
  connect,
  disconnect,
  canSignDirect,
  canSignAmino,
  signDirect,
  signAmino,
  broadcast
};

export default walletManager;
