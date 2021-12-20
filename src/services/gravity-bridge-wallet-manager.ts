import chainInfo from 'constants/keplr-chain-info';
import dotenv from 'dotenv';
import _ from 'lodash';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import keplrWallet from 'services/keplr-wallet';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { IGravityBridgeWallet } from 'types';

dotenv.config();

let currentWallet: IGravityBridgeWallet = keplrWallet;

async function connect (): Promise<void> {
  const hasNetwork = await checkNetwork();
  if (hasNetwork === true) {
    getAccount();
    registerEventHandler();
  }
}

async function checkNetwork (): Promise<boolean> {
  try {
    await currentWallet.suggestExperimentalChain(chainInfo.gravityBridge);
    gravityBridgeAccountStore.updateNetwork(true);
    return true;
  } catch (error) {
    console.error((error as any).message);
    gravityBridgeAccountStore.updateNetwork(false);
    return false;
  }
}

async function getAccount (): Promise<void> {
  try {
    const account = await currentWallet.getAccount(chainInfo.gravityBridge.chainId);
    try {
      const _balance = await gravityBridgeLcdService.getBalance(account.address);
      let balance = _.find(_balance, ({ denom }) => denom === 'ugraviton');
      account.balance = _.get(balance, 'amount', '0');
      gravityBridgeAccountStore.updateAccount(account);
    } catch (error) {
      account.balance = '0';
      gravityBridgeAccountStore.updateAccount(account);
    }
  } catch (error) {
    console.error((error as any).message);
    gravityBridgeAccountStore.updateAccount(undefined);
  }
}

async function registerEventHandler (): Promise<void> {
  if (currentWallet && currentWallet.onAccountChange) {
    currentWallet.onAccountChange(getAccount);
  }

  if (currentWallet && currentWallet.onNetworkChange) {
    currentWallet.onNetworkChange(getAccount)
  }
}

async function init () {
  try {
    await getAccount();
    registerEventHandler();
  } catch (error) {
    console.error((error as any).message);
  }
}

init();

export default {
  connect,
}
