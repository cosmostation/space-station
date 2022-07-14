import detectEthereumProvider from '@metamask/detect-provider';
import ethChains from 'constants/eth-chains';
import _ from 'lodash';
import Web3Manager from 'services/eth-wallet/web3-manager';
import loggerFactory from 'services/util/logger-factory';
import {
  AccountChangeEventHandler,
  EthWalletType,
  IEthAccount,
  IEthWallet,
  MetaMaskPendingRequestError,
  MetaMaskProvider,
  NetworkChangeEventHandler,
  NoMetaMaskWalletError,
  SupportedEthChain,
} from 'types';

const logger = loggerFactory.getLogger('[MetaMaskWallet]');

enum MetaMaskEventType {
  accountsChanged = 'accountsChanged',
  chainChanged = 'chainChanged'
}

class MetaMaskWallet implements IEthWallet {
  type: EthWalletType = EthWalletType.MetaMask;
  web3: Promise<Web3Manager | null>;
  accountChangeEventHandler: AccountChangeEventHandler | undefined;
  networkChangeEventHandler: NetworkChangeEventHandler | undefined;

  constructor () {
    this.web3 = getMetaMaskProvider()
      .then((provider) => {
        return new Web3Manager(provider);
      }).catch((error) => {
        logger.error(error);
        return null;
      });
  }

  async connect (chain: SupportedEthChain): Promise<void> {
    try {
      const chainInfo = ethChains[chain];
      const allowed = await hasPermission();
      if (!allowed) {
        logger.info('[connect] No permission. Requesting permissions...');
        await requestPermission();
      }

      const currentChainId = await getChainId();
      if (currentChainId !== chainInfo.chainId) {
        logger.info('[connect] Not matched chain ID. Requesting update...');
        await changeChainId(chainInfo.chainId);
      }
    } catch (error) {
      if (isPendingError(error)) {
        throw new MetaMaskPendingRequestError();
      }
      throw error;
    }
  }

  async checkConnection (chain: SupportedEthChain): Promise<boolean> {
    try {
      const chainInfo = ethChains[chain];
      const allowed = await hasPermission();
      if (!allowed) {
        logger.info('[checkConnection] No permission');
        return false;
      }

      const currentChainId = await getChainId();
      if (currentChainId !== chainInfo.chainId) {
        logger.info('[checkConnection] Not matched chain ID');
        return false;
      }

      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  }

  async getAccount (): Promise<IEthAccount> {
    try {
      const address = await getAccountInfo();
      const web3 = await this.getWeb3();
      const balance = web3 !== null ? await web3.getBalance(address) : '0';
      return { address, balance };
    } catch (error) {
      if (isPendingError(error)) {
        throw new MetaMaskPendingRequestError();
      }
      throw error;
    }
  }

  async updateNetwork (chain: SupportedEthChain): Promise<boolean> {
    try {
      const chainInfo = ethChains[chain];
      await changeChainId(chainInfo.chainId);
      return true;
    } catch (error) {
      return false;
    }
  }

  registerAccountChangeHandler (handler: AccountChangeEventHandler): void {
    if (this.accountChangeEventHandler) {
      this.unregisterAccountChangeHandler();
    }
    this.accountChangeEventHandler = handler;
    onAccountChange(handler);
  }

  registerNetworkChangeHandler (handler: NetworkChangeEventHandler): void {
    if (this.networkChangeEventHandler) {
      this.unregisterNetworkChangeHandler();
    }
    this.networkChangeEventHandler = handler;
    onNetworkChange(handler);
  }

  unregisterAccountChangeHandler (): void {
    if (this.accountChangeEventHandler) {
      removeAccountChangeHandler(this.accountChangeEventHandler);
    }
  }

  unregisterNetworkChangeHandler (): void {
    if (this.networkChangeEventHandler) {
      removeNetworkChangeHandler(this.networkChangeEventHandler);
    }
  }

  getWeb3 (): Promise<Web3Manager | null> {
    return this.web3;
  }

  isSupportMultiConnection (): boolean {
    return false;
  }
}

function isMetaMaskProvider (provider: unknown): provider is MetaMaskProvider {
  return _.get(provider, 'isMetaMask', false);
}

async function getMetaMaskProvider (): Promise<MetaMaskProvider> {
  const provider: any = await detectEthereumProvider();
  if (!isMetaMaskProvider(provider)) {
    throw new NoMetaMaskWalletError();
  }
  return provider;
}

async function getChainId (): Promise<string> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  return provider.request({ method: 'eth_chainId' });
}

async function hasPermission (): Promise<boolean> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  const permissions = await provider.request({ method: 'wallet_getPermissions' });
  return !_.isEmpty(permissions);
}

async function requestPermission (): Promise<boolean> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  const permissions = await provider.request({
    method: 'wallet_requestPermissions',
    params: [{ eth_accounts: {} }]
  });
  return !_.isEmpty(permissions);
}

async function changeChainId (chainId: string): Promise<void> {
  const provider : MetaMaskProvider = await getMetaMaskProvider();
  await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
}

async function getAccountInfo (): Promise<string> {
  const provider = await getMetaMaskProvider();
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  return _.isArray(accounts)
    ? _.first(accounts) as string
    : '';
}

async function getEthBalance (address: string): Promise<number> {
  const provider = await getMetaMaskProvider();
  const params = [address, 'latest'];
  const balance = await provider.request({ method: 'eth_getBalance', params });
  return _.toNumber(balance);
}

async function onAccountChange (handler: AccountChangeEventHandler): Promise<void> {
  const metaMaskProvider = await getMetaMaskProvider();
  metaMaskProvider.on(MetaMaskEventType.accountsChanged, handler);
}

async function onNetworkChange (handler: NetworkChangeEventHandler): Promise<void> {
  const metaMaskProvider = await getMetaMaskProvider();
  metaMaskProvider.on(MetaMaskEventType.chainChanged, handler);
}

async function removeAccountChangeHandler (handler: AccountChangeEventHandler): Promise<void> {
  logger.info('[removeAccountChangeHandler] Removing account change handler');
  const metaMaskProvider = await getMetaMaskProvider();
  metaMaskProvider.removeListener(MetaMaskEventType.accountsChanged, handler);
}

async function removeNetworkChangeHandler (handler: NetworkChangeEventHandler): Promise<void> {
  logger.info('[removeNetworkChangeHandler] Removing network change handler');
  const metaMaskProvider = await getMetaMaskProvider();
  metaMaskProvider.removeListener(MetaMaskEventType.chainChanged, handler);
}

function isPendingError (error: any): boolean {
  const code = _.get(error, 'code');
  if (code === -32002) {
    return true;
  }
  return false;
}

export default MetaMaskWallet;
