import { BroadcastMode } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ChainInfo, Keplr, Key, Window } from '@keplr-wallet/types';
import { cosmos } from 'constants/gravity-main';
import Long from 'long';

export type DirectSignDoc = {
  chainId: string;
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  accountNumber: Long;
}

export interface IKeplrService {
  readonly connect: (chainId: string) => Promise<void>;
  readonly getPublicKey: (chainId: string) => Promise<Key>;
  readonly suggestExperimentalChain: (chainInfo: ChainInfo) => Promise<void>;
  readonly sign: (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc) => Promise<DirectSignResponse>;
  readonly sendTx: (chainId: string, txBytes: Uint8Array, mode: BroadcastMode) => Promise<Uint8Array>;
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

async function sign (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  const keplr = await detectKeplrProvider();
  const _signDoc: DirectSignDoc = {
    chainId,
    bodyBytes: signDoc.body_bytes,
    authInfoBytes: signDoc.auth_info_bytes,
    accountNumber: signDoc.account_number as Long
  }
  return keplr.signDirect(chainId, signer, _signDoc);
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: BroadcastMode): Promise<Uint8Array> {
  const keplr = await detectKeplrProvider();
  return keplr.sendTx(chainId, txBytes, mode);
}

const keplrService: IKeplrService = {
  connect,
  getPublicKey,
  suggestExperimentalChain,
  sign,
  sendTx
};

export default keplrService;
