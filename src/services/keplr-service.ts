import { Keplr, Window, Key, ChainInfo } from '@keplr-wallet/types';

export type KeplrService = {
  connect: (chainId: string) => Promise<boolean>;
  getPublicKey: (chainId: string) => Promise<Key | false>;
  suggestExperimentalChain: (chainInfo: ChainInfo) => Promise<boolean>;
}

const keplr = new Promise<Keplr | null>((resolve) => {
  window.onload = () => {
    const _window = window as Window;
    if (_window.keplr) {
      resolve(_window.keplr);
    } else {
      resolve(null);
    }
  };
});

async function detectKeplrProvider (): Promise<Keplr | null> {
  return await keplr;
}

async function connect (chainId: string): Promise<boolean> {
  try {
    const keplr = await detectKeplrProvider();
    if (keplr) {
      await keplr.enable(chainId);
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
}

async function getPublicKey (chainId: string): Promise<Key | false> {
  try {
    const keplr = await detectKeplrProvider();
    if (keplr) {
      return await keplr.getKey(chainId);
    }
  } catch (error) {
    console.error(error);
  }
  return false;
}

async function suggestExperimentalChain (chainInfo: ChainInfo): Promise<boolean> {
  try {
    const keplr = await detectKeplrProvider();
    if (keplr) {
      await keplr.experimentalSuggestChain(chainInfo);
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
}

const keplrService: KeplrService = {
  connect: connect,
  getPublicKey: getPublicKey,
  suggestExperimentalChain: suggestExperimentalChain
};

export default keplrService;
