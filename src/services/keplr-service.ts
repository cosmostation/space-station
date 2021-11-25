import { BroadcastMode, StdTx } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ChainInfo, Keplr, Key, Window } from '@keplr-wallet/types';

export type DirectSignDoc = {
  chainId: string;
  /** SignDoc bodyBytes */
  bodyBytes?: Uint8Array | null;
  /** SignDoc authInfoBytes */
  authInfoBytes?: Uint8Array | null;
  /** SignDoc accountNumber */
  accountNumber?: Long | null;
}

export interface IKeplrService {
  readonly connect: (chainId: string) => Promise<void>;
  readonly getPublicKey: (chainId: string) => Promise<Key>;
  readonly suggestExperimentalChain: (chainInfo: ChainInfo) => Promise<void>;
  readonly sign: (chainId: string, signer: string, signDoc: DirectSignDoc) => Promise<DirectSignResponse>;
  readonly sendTx: (chainId: string, tx: StdTx, mode: BroadcastMode) => Promise<Uint8Array>;
}

const keplr = new Promise<Keplr>((resolve, reject) => {
  window.onload = () => {
    const _window = window as Window;
    _window.keplr ? resolve(_window.keplr) : reject(new Error('Not found Keplr'));
  };
});

async function detectKeplrProvider (): Promise<Keplr> {
  return keplr;
}

async function connect (chainId: string): Promise<void> {
  const keplr = await detectKeplrProvider();
  return keplr.enable(chainId);
}

async function getPublicKey (chainId: string): Promise<Key> {
  const keplr = await detectKeplrProvider();
  return keplr.getKey(chainId);
}

async function suggestExperimentalChain (chainInfo: ChainInfo): Promise<void> {
  const keplr = await detectKeplrProvider();
  return keplr.experimentalSuggestChain(chainInfo);
}

async function sign (chainId: string, signer: string, signDoc: DirectSignDoc): Promise<DirectSignResponse> {
  const keplr = await detectKeplrProvider();
  return keplr.signDirect(chainId, signer, signDoc);
}

async function sendTx (chainId: string, tx: StdTx, mode: BroadcastMode = BroadcastMode.Sync): Promise<Uint8Array> {
  const keplr = await detectKeplrProvider();
  return keplr.sendTx(chainId, tx, mode);
}

const keplrService: IKeplrService = {
  connect,
  getPublicKey,
  suggestExperimentalChain,
  sign,
  sendTx
};

export default keplrService;
