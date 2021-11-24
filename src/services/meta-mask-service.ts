import detectEthereumProvider from '@metamask/detect-provider';
import _ from 'lodash';

interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

type MetaMaskProvider = {
  isMetaMask?: boolean;
  request: (params: RequestArguments) => Promise<unknown>;
}

export type MetaMaskService = {
  connect: (chainId: string) => Promise<boolean>;
  changeChainId: (chainId: string) => Promise<boolean>;
  getAccountInfo: () => Promise<string | boolean>;
  getEthBalance: (address: string) => Promise<number | boolean>;
}

function isRcpError (error: unknown): error is ProviderRpcError {
  const rpcError = (error as ProviderRpcError);
  return rpcError.message !== undefined && rpcError.code !== undefined;
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

async function connect (chainId: string): Promise<boolean> {
  try {
    const provider: MetaMaskProvider = await getMetaMaskProvider();
    const _chainId = await provider.request({ method: 'eth_chainId' });
    if (_chainId !== chainId) {
      await changeChainId(chainId);
    }
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
}

export async function changeChainId (chainId: string): Promise<boolean> {
  let provider : MetaMaskProvider;
  try {
    provider = await getMetaMaskProvider();
  } catch (error) {
    console.error(error);
    return false;
  }

  let noWallet = false;
  try {
    await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
    return true;
  } catch (error) {
    noWallet = isRcpError(error) && (error as ProviderRpcError).code === 4902;
    if (noWallet === false) {
      return false;
    }
  }

  try {
    await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getAccountInfo (): Promise<string | boolean> {
  try {
    const provider = await getMetaMaskProvider();
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    if (_.isArray(accounts)) {
      return _.first(accounts) as string;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
}

export async function getEthBalance (address: string): Promise<number | boolean> {
  try {
    const provider = await getMetaMaskProvider();
    const params = [address, 'latest'];
    const balance = await provider.request({ method: 'eth_getBalance', params });
    return _.toNumber(balance);
  } catch (error) {
    console.error(error);
  }
  return false;
}

const metaMaskService: MetaMaskService = {
  connect: connect,
  changeChainId: changeChainId,
  getAccountInfo: getAccountInfo,
  getEthBalance: getEthBalance
};

export default metaMaskService;
