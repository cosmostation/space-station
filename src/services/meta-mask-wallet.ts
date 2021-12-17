import detectEthereumProvider from '@metamask/detect-provider';
import _ from 'lodash';
import { AccountChangeEventHandler, MetaMaskProvider, MetaMaskWallet, NetworkChangeEventHandler } from 'types';

function isMetaMaskProvider (provider: unknown): provider is MetaMaskProvider {
  return (provider as MetaMaskProvider).isMetaMask === true;
}

async function getMetaMaskProvider (): Promise<MetaMaskProvider> {
  const provider: any = await detectEthereumProvider();
  if (!isMetaMaskProvider(provider)) {
    throw new Error('Not found Meta mask');
  }
  return provider;
}

async function getChainId (): Promise<string> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  return provider.request({ method: 'eth_chainId' });
}

async function isConnected (): Promise<boolean> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  const permissions = await provider.request({ method: 'wallet_getPermissions' });
  return !_.isEmpty(permissions);
}

async function connect (chainId: string): Promise<void> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  const _chainId = await provider.request({ method: 'eth_chainId' });
  if (_chainId !== chainId) {
    await changeChainId(chainId);
  }
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
  metaMaskProvider.on('accountsChanged', handler);
}

async function onNetworkChange (handler: NetworkChangeEventHandler): Promise<void> {
  const metaMaskProvider = await getMetaMaskProvider();
  metaMaskProvider.on('chainChanged', handler);
}

const metaMaskWallet: MetaMaskWallet = {
  getMetaMaskProvider,
  getChainId,
  connect,
  isConnected,
  changeChainId,
  getAccountInfo,
  getEthBalance,
  onAccountChange,
  onNetworkChange
};

export default metaMaskWallet;
