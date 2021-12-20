import _ from 'lodash';
import metaMaskWallet from 'services/meta-mask-wallet';
import Web3Helper from 'services/web3-manager';
import {
  AccountChangeEventHandler,
  EthAccount,
  EthWalletManager,
  MetaMaskPendingRequestError,
  NetworkChangeEventHandler,
} from 'types';

export default class MetaMaskManager implements EthWalletManager {
  static async checkInstall (): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      metaMaskWallet.getMetaMaskProvider()
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  }

  installed: Promise<boolean> = MetaMaskManager.checkInstall();
  web3: Web3Helper | null = null;

  constructor () {
    this.init();
  }

  async init (): Promise<void> {
    const _installed = await this.installed;
    if (_installed) {
      const provider = await metaMaskWallet.getMetaMaskProvider();
      this.web3 = new Web3Helper(provider);
    }
  }

  async checkConnection (chainId: string): Promise<EthAccount | null> {
    try {
      const hasPermission = await metaMaskWallet.hasPermission();
      if (!hasPermission) {
        return null;
      }

      const currentChainId = await metaMaskWallet.getChainId();
      if (currentChainId !== chainId) {
        return null;
      }

      return this.getAccount();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async connect (chainId: string): Promise<EthAccount | null> {
    try {
      const _installed = await this.installed;
      if (!_installed) {
        return null;
      }

      const hasPermission = await metaMaskWallet.hasPermission();
      if (!hasPermission) {
        await metaMaskWallet.requestPermission();
      }

      const currentChainId = await metaMaskWallet.getChainId();
      if (currentChainId !== chainId) {
        await metaMaskWallet.changeChainId(chainId);
      }

      return this.getAccount();
    } catch (error) {
      console.error(error);
      if (isPendingError(error)) {
        throw new MetaMaskPendingRequestError();
      }
      throw error;
    }
  }

  async updateNetwork (chainId: string): Promise<boolean> {
    try {
      await metaMaskWallet.changeChainId(chainId);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAccount (): Promise<EthAccount> {
    const address = await metaMaskWallet.getAccountInfo();
    const balance = this.web3 ? await this.web3.getBalance(address) : '0';
    return { address, balance };
  }

  async getCurrentChainId (): Promise<string> {
    return metaMaskWallet.getChainId();
  }

  registerAccountChangeHandler (handler: AccountChangeEventHandler): void {
    metaMaskWallet.onAccountChange(handler);
  }

  registerNetworkChangeHandler (handler: NetworkChangeEventHandler): void {
    metaMaskWallet.onNetworkChange(handler)
  }
}

function isPendingError (error: any): boolean {
  const code = _.get(error, 'code');
  if (code === -32002) {
    return true;
  }
  return false;
}
