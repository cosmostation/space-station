import { TokenInfo } from '@uniswap/token-lists';
import dotenv from 'dotenv';
import _ from 'lodash';
import loggerFactory from 'services/logger-factory';
import MetaMaskManager from 'services/meta-mask-manager';
import ethAccountStore from 'stores/eth-account-store';
import {
  AccountChangeEventHandler,
  EthWallet,
  EthWalletManager,
  EthWalletType,
  NetworkChangeEventHandler,
  NoMetaMaskWalletError,
} from 'types';

const logger = loggerFactory.getLogger('[EthWalletManager]');

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID ? process.env.REACT_APP_ETH_CHAIN_ID : '';
const GRAVITY_BRIDGE_CONTRACT_ADDRESS = process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  ? process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  : '';
const currentWalletType = EthWalletType.MetaMask;
let currentChainId: string;

const walletManagers: Record<EthWalletType, EthWallet> = {
  [EthWalletType.MetaMask]: new MetaMaskManager()
};

function getCurrentWallet (): EthWallet {
  return walletManagers[currentWalletType];
}

async function init (): Promise<void> {
  try {
    logger.info('[init] Current wallet type: ', currentWalletType);
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      currentChainId = await currentWallet.getCurrentChainId();
      const account = await currentWallet.checkConnection(ETH_CHAIN_ID);
      logger.info('[init] Current chain ID: ', currentChainId, 'Account:', account);
      if (account) {
        ethAccountStore.updateAccount(account);
        registerEventHandler();
      }
    }
  } catch (error) {
    logger.error(error);
  }
}

async function connect (): Promise<void> {
  const currentWallet = walletManagers[currentWalletType];
  if (!currentWallet) {
    logger.info('[connect] No wallet. Current wallet type: ', currentWalletType);
    throw new NoMetaMaskWalletError();
  }

  const _installed = await currentWallet.installed;
  if (!_installed) {
    logger.info('[connect] No installed wallet. Current wallet type: ', currentWalletType);
    throw new NoMetaMaskWalletError();
  }

  logger.info('[connect] Connecting...');
  const account = await currentWallet.connect(ETH_CHAIN_ID);
  if (account) {
    logger.info('[connect] Account:', account);
    ethAccountStore.updateAccount(account);
    registerEventHandler();
  }
}

function accountChangeEventHandler (wallet: EthWalletManager): AccountChangeEventHandler {
  return async (accounts: string[]): Promise<void> => {
    logger.info('[accountChangeEventHandler] Updated accounts:', accounts);
    if (!_.isEmpty(accounts)) {
      const account = await wallet.getAccount();
      ethAccountStore.updateAccount(account);
    } else {
      ethAccountStore.updateAccount(undefined);
    }
  };
}

function networkChangeEventHandler (wallet: EthWalletManager): NetworkChangeEventHandler {
  return async (chainId: string): Promise<void> => {
    logger.info('[accountChangeEventHandler] Updated chain ID:', chainId);
    currentChainId = chainId;
    if (currentChainId !== ETH_CHAIN_ID) {
      ethAccountStore.updateAccount(undefined);
    } else {
      const account = await wallet.getAccount();
      ethAccountStore.updateAccount(account);
    }
  };
}

function registerEventHandler (): void {
  try {
    logger.info('[registerEventHandler] Registering event handler...');
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      currentWallet.registerAccountChangeHandler(accountChangeEventHandler(currentWallet));
      currentWallet.registerNetworkChangeHandler(networkChangeEventHandler(currentWallet));
    }
  } catch (error) {
    logger.error(error);
  }
}

async function getERC20Info (contractAddress: string): Promise<TokenInfo | null> {
  try {
    logger.info('[getERC20Info] Getting ERC20 token info...', contractAddress);
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet && currentWallet.web3) {
      return currentWallet.web3.getERC20Info(contractAddress);
    }
    return null;
  } catch (error) {
    logger.error(error);
    return null;
  }
}

async function updateAccount (): Promise<void> {
  try {
    logger.info('[updateAccount] Updating account...');
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet) {
      const account = await currentWallet.getAccount();
      ethAccountStore.updateAccount(account);
    }
  } catch (error) {
    logger.error(error);
  }
}

async function getERC20Balance (contractAddress: string, ownerAddress: string): Promise<string> {
  try {
    logger.info('[getERC20Balance] Getting ERC20 token balance...', 'contract address:', contractAddress, 'owner address:', ownerAddress);
    const currentWallet = walletManagers[currentWalletType];
    if (currentWallet && currentWallet.web3) {
      return currentWallet.web3.getERC20Balance(contractAddress, ownerAddress);
    }
    return '0';
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

async function sendToCosmos (ethAddress: string, gravityBridgeAddress: string, tokenInfo: TokenInfo, amount: string): Promise<string> {
  logger.info('[sendToCosmos] sending ERC20 token to Cosmos', 'eth address:', ethAddress, 'gravity bridge address:', gravityBridgeAddress, 'token:', tokenInfo, 'amount:', amount);
  const currentWallet = walletManagers[currentWalletType];
  if (!currentWallet || !currentWallet.web3) {
    throw new Error('No connected wallet');
  }

  await currentWallet.web3.approve(ethAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  const response = await currentWallet.web3.sendToCosmos(ethAddress, tokenInfo.address, gravityBridgeAddress, amount);
  if (!isSendCosmosResponse(response)) {
    throw new Error('No TX hash');
  }
  logger.info('[sendToCosmos] Sending succeed!', 'TX hash:', response.transactionHash);
  return response.transactionHash;
}

type sendToCosmosResponse = {
  transactionHash: string
};

function isSendCosmosResponse (response: unknown): response is sendToCosmosResponse {
  return (response as sendToCosmosResponse).transactionHash !== undefined;
}

init();

export default {
  getCurrentWallet,
  connect,
  updateAccount,
  getERC20Info,
  getERC20Balance,
  sendToCosmos
};
