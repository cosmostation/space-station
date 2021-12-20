import dotenv from 'dotenv';
import _ from 'lodash';
import metaMaskWallet from 'services/meta-mask-wallet';
import toastService from 'services/toast-service';
import web3Service from 'services/web3-service';
import ethAccountStore from 'stores/eth-account-store';
import { IEthWallet } from 'types';

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID;
let currentWallet: IEthWallet = metaMaskWallet;
let currentChainId: string;

async function connect (): Promise<void> {
  try {
    const networkUpdated = await updateNetwork();
    if (networkUpdated === true && ETH_CHAIN_ID) {
      await currentWallet.connect(ETH_CHAIN_ID);
    }
  } catch (error) {
    if ((error as any).code !== undefined && (error as any).code === -32002) {
      toastService.showPendingMetaMaskRequestToast();
    }
  }
}

async function updateNetwork (): Promise<boolean> {
  try {
    if (ETH_CHAIN_ID) {
      await currentWallet.connect(ETH_CHAIN_ID);
      ethAccountStore.updateNetwork(ETH_CHAIN_ID);
    } else {
      throw new Error('[EthWalletConnector][checkNetwork] No ETH_CHAIN_ID');
    }
    return true;
  } catch (error) {
    console.error((error as any).message);
    return false;
  }
}

async function init () {
  try {
    registerEventHandler();
    currentChainId = await currentWallet.getChainId();
    if (currentChainId === ETH_CHAIN_ID) {
      const isConnected = await currentWallet.isConnected();
      if (isConnected) {
        getEthAccount();
      }
    }
  } catch (error) {
    console.error((error as any).message);
  }
}

async function getEthAccount (): Promise<void> {
  const address = await currentWallet.getAccountInfo();
  const balance = await web3Service.getBalance(address);
  const account = { address, balance };
  ethAccountStore.updateAccount(account);
}

async function registerEventHandler (): Promise<void> {
  if (currentWallet && currentWallet.onConnect) {
    currentWallet.onConnect(() => {
      if (currentChainId !== ETH_CHAIN_ID) {
        ethAccountStore.updateAccount(undefined);
      } else {
        getEthAccount();
      }
    })
  }

  if (currentWallet && currentWallet.onAccountChange) {
    currentWallet.onAccountChange(async (data) => {
      const connected = await currentWallet.isConnected();
      if (connected === true && currentChainId === ETH_CHAIN_ID && !_.isEmpty(data)) {
        getEthAccount();
      } else {
        ethAccountStore.updateAccount(undefined);
      }
    });
  }

  if (currentWallet && currentWallet.onNetworkChange) {
    currentWallet.onNetworkChange((chainId) => {
      currentChainId = chainId;
      if (currentChainId !== ETH_CHAIN_ID) {
        ethAccountStore.updateAccount(undefined);
      } else {
        getEthAccount();
      }
    })
  }

  if (currentWallet && currentWallet.onDisconnect) {
    currentWallet.onDisconnect(() => {
      ethAccountStore.updateAccount(undefined);
    })
  }
}

init();

export default {
  connect,
}
