import { TokenInfo } from '@uniswap/token-lists';
import dotenv from 'dotenv';
import _ from 'lodash';
import MetaMaskManager from 'services/meta-mask-manager';
import ethAccountStore from 'stores/eth-account-store';
import {
  AccountChangeEventHandler,
  EthWallet,
  EthWalletManager,
  EthWalletType,
  NetworkChangeEventHandler,
  NoEthWalletError,
} from 'types';

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID ? process.env.REACT_APP_ETH_CHAIN_ID : '';
const GRAVITY_BRIDGE_CONTRACT_ADDRESS = process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  ? process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  : '';
let currentWalletType = EthWalletType.MetaMask;
let currentChainId: string;

const walletManagers: Record<EthWalletType, EthWallet> = {
  [EthWalletType.MetaMask]: new MetaMaskManager()
}

function getCurrentWallet (): EthWallet {
  return walletManagers[currentWalletType];
}

async function init (): Promise<void> {
  try {
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      currentChainId = await currentWallet.getCurrentChainId();
      const account = await currentWallet.checkConnection(ETH_CHAIN_ID);
      if (account) {
        ethAccountStore.updateAccount(account);
        registerEventHandler();
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function connect (): Promise<void> {
  const currentWallet = walletManagers[currentWalletType];
  if (!currentWallet) {
    throw new NoEthWalletError();
  }

  const _installed = await currentWallet.installed;
  if (!_installed) {
    throw new NoEthWalletError();
  }

  const account = await currentWallet.connect(ETH_CHAIN_ID);
  if (account) {
    ethAccountStore.updateAccount(account);
    registerEventHandler();
  }
}

function accountChangeEventHandler (wallet: EthWalletManager): AccountChangeEventHandler {
  return async (accounts: string[]) => {
    if (!_.isEmpty(accounts)) {
      const account = await wallet.getAccount();
      ethAccountStore.updateAccount(account);
    } else {
      ethAccountStore.updateAccount(undefined);
    }
  }
}

function networkChangeEventHandler (wallet: EthWalletManager): NetworkChangeEventHandler {
  return async (chainId: string) => {
    currentChainId = chainId;
    if (currentChainId !== ETH_CHAIN_ID) {
      ethAccountStore.updateAccount(undefined);
    } else {
      const account = await wallet.getAccount();
      ethAccountStore.updateAccount(account);
    }
  }
}

function registerEventHandler (): void {
  try {
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      currentWallet.registerAccountChangeHandler(accountChangeEventHandler(currentWallet));
      currentWallet.registerNetworkChangeHandler(networkChangeEventHandler(currentWallet));
    }
  } catch (error) {
    console.error(error);
  }
}

async function getERC20Info (contractAddress: string): Promise<TokenInfo | null> {
  try {
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet && currentWallet.web3) {
      return currentWallet.web3.getERC20Info(contractAddress);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null
  }
}

async function updateAccount (): Promise<void> {
  try {
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      const account = await currentWallet.getAccount();
      ethAccountStore.updateAccount(account);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getERC20Balance (contractAddress: string, ownerAddress: string): Promise<string> {
  try {
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet && currentWallet.web3) {
      return currentWallet.web3.getERC20Balance(contractAddress, ownerAddress);
    }
    return '0';
  } catch (error) {
    console.error(error);
    return '0';
  }
}

async function sendToCosmos (fromAddress: string, tokenInfo: TokenInfo, amount: string): Promise<string> {
  const currentWallet = walletManagers[currentWalletType];
  if (!currentWallet || !currentWallet.web3) {
    throw new Error('No connected wallet');
  }

  await currentWallet.web3.approve(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  const response = await currentWallet.web3.sendToCosmos(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  if (!isSendCosmosResponse(response)) {
    throw new Error('No Tx hash');
  }
  return response.transactionHash;
}

type sendToCosmosResponse = {
  transactionHash: string
};

function isSendCosmosResponse(response: unknown): response is sendToCosmosResponse {
  return (response as sendToCosmosResponse).transactionHash !== undefined;
}

init();

export default {
  getCurrentWallet,
  connect,
  updateAccount,
  getERC20Info,
  getERC20Balance,
  sendToCosmos,
}
