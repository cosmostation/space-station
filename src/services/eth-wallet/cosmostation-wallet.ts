import { ethereum } from '@cosmostation/extension-client';
import ethChains from 'constants/eth-chains';
import _ from 'lodash';
import Web3Manager from 'services/eth-wallet/web3-manager';
import loggerFactory from 'services/util/logger-factory';
import {
  AccountChangeEventHandler,
  EthWalletType,
  IEthAccount,
  IEthWallet,
  CosmostationProvider,
  NetworkChangeEventHandler,
  NoCosmostationWalletError,
  CosmostationPendingRequestError,
  SupportedEthChain,
} from 'types';

const logger = loggerFactory.getLogger('[CosmostationWallet]');

enum CosmostationEventType {
  accountsChanged = 'accountsChanged',
  chainChanged = 'chainChanged'
}

class CosmostationWallet implements IEthWallet {
  type: EthWalletType = EthWalletType.Cosmostation;
  web3: Promise<Web3Manager | null>;
  accountChangeEventHandler: AccountChangeEventHandler | undefined;
  networkChangeEventHandler: NetworkChangeEventHandler | undefined;

  constructor () {
    this.web3 = getCosmostationProvider()
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
        throw new CosmostationPendingRequestError();
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

  async getAccount (): Promise<IEthAccount | undefined> {
    try {
      const address = await getAccountInfo();

      if (!address) {
        return undefined;
      }
      const web3 = await this.getWeb3();
      const balance = web3 !== null ? await web3.getBalance(address) : '0';
      return { address, balance };
    } catch (error) {
      if (isPendingError(error)) {
        throw new CosmostationPendingRequestError();
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

  async registerAccountChangeHandler (handler: AccountChangeEventHandler): Promise<void> {
    if (this.accountChangeEventHandler) {
      this.unregisterAccountChangeHandler();
    }
    this.accountChangeEventHandler = await onAccountChange(handler);
  }

  async registerNetworkChangeHandler (handler: NetworkChangeEventHandler): Promise<void> {
    if (this.networkChangeEventHandler) {
      this.unregisterNetworkChangeHandler();
    }
    this.networkChangeEventHandler = await onNetworkChange(handler);
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

async function getCosmostationProvider (): Promise<CosmostationProvider> {
  try {
    const provider: any = await ethereum();
    return provider;
  } catch {
    throw new NoCosmostationWalletError();
  }
}

async function getChainId (): Promise<string> {
  const provider: CosmostationProvider = await getCosmostationProvider();
  return provider.request({ method: 'eth_chainId' });
}

async function hasPermission (): Promise<boolean> {
  const provider: CosmostationProvider = await getCosmostationProvider();
  const permissions = await provider.request({ method: 'eth_accounts' });
  return !_.isEmpty(permissions);
}

async function requestPermission (): Promise<boolean> {
  const provider: CosmostationProvider = await getCosmostationProvider();
  const permissions = await provider.request({
    method: 'eth_requestAccounts',
    params: []
  });
  return !_.isEmpty(permissions);
}

async function changeChainId (chainId: string): Promise<void> {
  const provider : CosmostationProvider = await getCosmostationProvider();
  await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
}

async function getAccountInfo (): Promise<string> {
  const provider = await getCosmostationProvider();
  try {
    const accounts = await provider.request({ method: 'eth_requestAccounts' });

    return _.isArray(accounts)
      ? _.first(accounts) as string
      : '';
  } catch {
    return '';
  }
}

async function onAccountChange (handler: AccountChangeEventHandler): Promise<any> {
  const cosmostationProvider = await getCosmostationProvider();
  return cosmostationProvider.on(CosmostationEventType.accountsChanged, handler);
}

async function onNetworkChange (handler: NetworkChangeEventHandler): Promise<any> {
  const cosmostationProvider = await getCosmostationProvider();
  return cosmostationProvider.on(CosmostationEventType.chainChanged, handler);
}

async function removeAccountChangeHandler (handler: AccountChangeEventHandler): Promise<void> {
  logger.info('[removeAccountChangeHandler] Removing account change handler');
  const cosmostationProvider = await getCosmostationProvider();
  cosmostationProvider.off(handler);
}

async function removeNetworkChangeHandler (handler: NetworkChangeEventHandler): Promise<void> {
  logger.info('[removeNetworkChangeHandler] Removing network change handler');
  const cosmostationProvider = await getCosmostationProvider();
  cosmostationProvider.off(handler);
}

function isPendingError (error: any): boolean {
  const code = _.get(error, 'code');
  if (code === -32002) {
    return true;
  }
  return false;
}

export default CosmostationWallet;
