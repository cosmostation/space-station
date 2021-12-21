import chainInfo from 'constants/keplr-chain-info';
import dotenv from 'dotenv';
import _ from 'lodash';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import keplrWallet from 'services/keplr-wallet';
import loggerFactory from 'services/logger-factory';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { GravityBridgeAccount, IKeplrWallet } from 'types';

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

init();

export default {
  connect
};
