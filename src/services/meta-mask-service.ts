import detectEthereumProvider from '@metamask/detect-provider';
import _ from 'lodash';

interface IRequestArguments {
  method: string;
  params?: unknown[] | object;
}

export type MetaMaskProvider = {
  isMetaMask?: boolean;
  request: (params: IRequestArguments) => Promise<unknown>;
}

export interface IMetaMaskService {
  readonly getMetaMaskProvider: () => Promise<MetaMaskProvider>;
  readonly connect: (chainId: string) => Promise<void>;
  readonly changeChainId: (chainId: string) => Promise<void>;
  readonly getAccountInfo: () => Promise<string>;
  readonly getEthBalance: (address: string) => Promise<number>;
}

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

async function connect (chainId: string): Promise<void> {
  const provider: MetaMaskProvider = await getMetaMaskProvider();
  const _chainId = await provider.request({ method: 'eth_chainId' });
  if (_chainId !== chainId) {
    await changeChainId(chainId);
  }
}

export async function changeChainId (chainId: string): Promise<void> {
  const provider : MetaMaskProvider = await getMetaMaskProvider();
  await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
}

export async function getAccountInfo (): Promise<string> {
  const provider = await getMetaMaskProvider();
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  return _.isArray(accounts)
    ? _.first(accounts) as string
    : '';
}

export async function getEthBalance (address: string): Promise<number> {
  const provider = await getMetaMaskProvider();
  const params = [address, 'latest'];
  const balance = await provider.request({ method: 'eth_getBalance', params });
  return _.toNumber(balance);
}

const metaMaskService: IMetaMaskService = {
  getMetaMaskProvider: getMetaMaskProvider,
  connect: connect,
  changeChainId: changeChainId,
  getAccountInfo: getAccountInfo,
  getEthBalance: getEthBalance
};

export default metaMaskService;
