import chainInfo from 'constants/keplr-chain-info';
import dotenv from 'dotenv';
import _ from 'lodash';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import keplrWallet from 'services/keplr-wallet';
import loggerFactory from 'services/logger-factory';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { IKeplrWallet } from 'types';

dotenv.config();

const currentWallet: IKeplrWallet = keplrWallet;

const logger = loggerFactory.getLogger('[GravityBridgeWalletManager]');

async function init (): Promise<void> {
  try {
    logger.info('[init] Init...');
    await getAccount();
    registerEventHandler();
  } catch (error) {
    logger.error((error as any).message);
  }
}

async function connect (): Promise<void> {
  logger.info('[connect] Connecting...');
  const hasNetwork = await checkNetwork();
  if (hasNetwork === true) {
    getAccount();
    registerEventHandler();
  }
}

async function checkNetwork (): Promise<boolean> {
  try {
    logger.info('[checkNetwork] Suggesting experiment chain...');
    await currentWallet.suggestExperimentalChain(chainInfo.gravityBridge);
    gravityBridgeAccountStore.updateNetwork(true);
    return true;
  } catch (error) {
    logger.error((error as any).message);
    gravityBridgeAccountStore.updateNetwork(false);
    return false;
  }
}

async function getAccount (): Promise<void> {
  try {
    logger.info('[getAccount] Getting account...');
    const account = await currentWallet.getAccount(chainInfo.gravityBridge.chainId);
    try {
      logger.info('[getAccount] Getting balance...');
      const _balance = await gravityBridgeLcdService.getBalance(account.address);
      const balance = _.find(_balance, ({ denom }) => denom === 'ugraviton');
      account.balance = _.get(balance, 'amount', '0');
      gravityBridgeAccountStore.updateAccount(account);
    } catch (error) {
      account.balance = '0';
      gravityBridgeAccountStore.updateAccount(account);
    }
  } catch (error) {
    logger.error((error as any).message);
    gravityBridgeAccountStore.updateAccount(undefined);
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
