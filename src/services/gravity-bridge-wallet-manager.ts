import { TokenInfo } from '@uniswap/token-lists';
import { cosmos } from 'constants/gravity-bridge-v1.2.1';
import chainInfo from 'constants/keplr-chain-info';
import dotenv from 'dotenv';
import _ from 'lodash';
import Long from 'long';
import cosmosTxService from 'services/cosmos-tx-service';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import gravityBridgeMessageService from 'services/gravity-bridge-message-service';
import keplrWallet from 'services/keplr-wallet';
import loggerFactory from 'services/logger-factory';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { GravityBridgeAccount, IKeplrWallet } from 'types';
import Big from 'big.js';

dotenv.config();

const currentWallet: IKeplrWallet = keplrWallet;

const logger = loggerFactory.getLogger('[GravityBridgeWalletManager]');

async function init (): Promise<void> {
  try {
    logger.info('[init] Init...');
    await getAccount();
    registerEventHandler();
  } catch (error) {
    logger.error(error);
  }
}

async function connect (): Promise<void> {
  logger.info('[connect] Connecting...');
  await checkNetwork();
  getAccount();
  registerEventHandler();
}

async function checkNetwork (): Promise<void> {
  logger.info('[checkNetwork] Suggesting experiment chain...');
  await currentWallet.suggestExperimentalChain(chainInfo.gravityBridge);
  gravityBridgeAccountStore.updateNetwork(true);
}

async function getAccount (): Promise<void> {
  try {
    logger.info('[getAccount] Getting account...');
    const account = await currentWallet.getAccount(chainInfo.gravityBridge.chainId);
    account.balance = await getBalance(account);
    gravityBridgeAccountStore.updateAccount(account);
  } catch (error) {
    logger.error('[getAccount]', error);
    gravityBridgeAccountStore.updateAccount(undefined);
  }
}

async function getBalance (account: GravityBridgeAccount): Promise<string> {
  try {
    logger.info('[getBalance] Getting balance...');
    const _balance = await gravityBridgeLcdService.getBalance(account.address);
    const balance = _.find(_balance, ({ denom }) => denom === 'ugraviton');
    return _.get(balance, 'amount', '0');
  } catch (error) {
    logger.error('[getBalance]', error);
    return '0';
  }
}

async function registerEventHandler (): Promise<void> {
  logger.info('[getAccount] Registering event handler...');
  if (currentWallet && currentWallet.onAccountChange) {
    currentWallet.onAccountChange(getAccount);
  }

  if (currentWallet && currentWallet.onNetworkChange) {
    currentWallet.onNetworkChange(getAccount);
  }
}

async function sendToEth (
  gravityBridgeAccount: GravityBridgeAccount,
  ethAddress: string,
  tokenInfo: TokenInfo,
  amount: string
): Promise<string> {
  logger.info('[sendToEth] Sending to Ethereum...', 'eth address:', ethAddress, 'token:', tokenInfo, 'amount:', amount);
  if (!currentWallet) {
    throw new Error('No connected wallet');
  }

  const accountInfo = await gravityBridgeLcdService.getAccountInfo(gravityBridgeAccount.address);
  logger.info('[sendToEth] Account Number:', accountInfo.account_number, 'Sequence:', accountInfo.sequence);

  const decimal = new Big(10).pow(_.toNumber(tokenInfo.decimals));
  const _amount = new Big(amount).times(decimal).toString();
  const message = gravityBridgeMessageService.createSendToEthereumMessage(
    gravityBridgeAccount.address,
    ethAddress,
    tokenInfo,
    _amount,
    tokenInfo,
    '0'
  );
  const txBody = cosmosTxService.createTxBody([message]);
  const chainId = chainInfo.gravityBridge.chainId;
  logger.info(accountInfo);
  const accountNumber = _.get(accountInfo, 'base_vesting_account.base_account.account_number') ||
    _.get(accountInfo, 'account_number');
  const sequence = new Long(_.get(accountInfo, 'base_vesting_account.base_account.sequence')) ||
  _.get(accountInfo, 'sequence');
  const fee = '0';
  const gasLimit = new Long(200000);
  const mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;

  const authInfo = cosmosTxService.getAuthInfo(
    gravityBridgeAccount.pubKey,
    sequence,
    fee,
    gasLimit,
    mode
  );
  logger.info('[sendToEth] Auth Info:', authInfo);

  const signDoc = cosmosTxService.getSignDoc(
    chainId,
    txBody,
    authInfo,
    new Long(_.toNumber(accountNumber))
  );
  logger.info('[sendToEth] Sign Doc:', signDoc);

  const signature = await currentWallet.sign(chainId, gravityBridgeAccount.address, signDoc);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  const result = await gravityBridgeLcdService.broadcastProtoTx(txBytes, cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC);

  logger.info('[sendToEth]', result);
  const code = _.get(result, 'tx_response.code');
  const txhash = _.get(result, 'tx_response.txhash');

  if (code !== 0) {
    const rawLog = _.get(result, 'tx_response.raw_log');
    logger.error(rawLog);
    throw new Error(rawLog);
  }

  return txhash;
}

init();

export default {
  connect,
  sendToEth
};
