import dotenv from 'dotenv';
import metaMaskWallet from 'services/meta-mask-wallet';
import web3Service from 'services/web3-service';
import ethAccountStore from 'stores/eth-account-store';
import { IEthWallet } from 'types';

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID;
let currentWallet: IEthWallet = metaMaskWallet;
let currentChainId: string;

async function connect (): Promise<void> {
  const networkUpdated = await updateNetwork();
  if (networkUpdated === true && ETH_CHAIN_ID) {
    await currentWallet.connect(ETH_CHAIN_ID);
    afterConnected();
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
    currentChainId = await currentWallet.getChainId();
    if (currentChainId === ETH_CHAIN_ID) {
      const isConnected = await currentWallet.isConnected();
      if (isConnected) {
        afterConnected();
      }
    }
  } catch (error) {
    console.error((error as any).message);
  }
}

function afterConnected () {
  getEthAccount();
  registerEventHandler();
}

async function getEthAccount (): Promise<void> {
  try {
    const address = await currentWallet.getAccountInfo();
    const balance = await web3Service.getBalance(address);
    const account = { address, balance };
    ethAccountStore.updateAccount(account);
  } catch (error) {
    console.error((error as any).message);
    ethAccountStore.updateAccount(undefined);
  }
}

async function registerEventHandler (): Promise<void> {
  if (currentWallet && currentWallet.onAccountChange) {
    currentWallet.onAccountChange(() => {
      if (currentChainId !== ETH_CHAIN_ID) {
        ethAccountStore.updateAccount(undefined);
      } else {
        getEthAccount();
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
}

init();

export default {
  connect,
}
