import { BroadcastMode } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ChainInfo, Keplr, Window } from '@keplr-wallet/types';
import { cosmos } from 'constants/gravity-main';
import Long from 'long';
import loggerFactory from 'services/logger-factory';
import { AccountChangeEventHandler, DirectSignDoc, GravityBridgeAccount, IKeplrWallet, NoKeplrWalletError } from 'types';

enum KeplrEvent {
  AccountChange = 'keplr_keystorechange'
}

const logger = loggerFactory.getLogger('[KelprWallet]');

const keplr = new Promise<Keplr>((resolve, reject) => {
  window.onload = () : void => {
    const _window = window as Window;
    _window.keplr ? resolve(_window.keplr) : reject(new NoKeplrWalletError("Can't find Keplr wallet."));
  };
});

async function detectKeplrProvider (): Promise<Keplr> {
  return keplr;
}

async function connect (chainId: string): Promise<void> {
  const keplr = await detectKeplrProvider();
  return keplr.enable(chainId);
}

async function getAccount (chainId: string): Promise<GravityBridgeAccount> {
  const keplr = await detectKeplrProvider();
  const key = await keplr.getKey(chainId);
  return {
    address: key.bech32Address,
    balance: '0',
    pubKey: key.pubKey
  };
}

async function suggestExperimentalChain (chainInfo: ChainInfo): Promise<void> {
  const keplr = await detectKeplrProvider();
  return keplr.experimentalSuggestChain(chainInfo);
}

async function sign (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  logger.info('[sign] Signing...');
  const keplr = await detectKeplrProvider();
  const _signDoc: DirectSignDoc = {
    chainId,
    bodyBytes: signDoc.body_bytes,
    authInfoBytes: signDoc.auth_info_bytes,
    accountNumber: signDoc.account_number as Long
  };
  return keplr.signDirect(chainId, signer, _signDoc);
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: BroadcastMode): Promise<Uint8Array> {
  logger.info('[sendTx] Sending TX...');
  const keplr = await detectKeplrProvider();
  return keplr.sendTx(chainId, txBytes, mode);
}

async function onAccountChange (handler: AccountChangeEventHandler): Promise<void> {
  (window as any).addEventListener(KeplrEvent.AccountChange, handler);
}

const keplrWallet: IKeplrWallet = {
  connect,
  getAccount,
  suggestExperimentalChain,
  sign,
  sendTx,
  onAccountChange
};

export default keplrWallet;
