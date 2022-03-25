import { AminoSignResponse, BroadcastMode, StdSignDoc } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { Keplr, Window } from '@keplr-wallet/types';
import { cosmos } from 'constants/cosmos-v0.44.5';
import keplrChainInfo from 'constants/keplr-chain-info';
import _ from 'lodash';
import Long from 'long';
import loggerFactory from 'services/util/logger-factory';
import { AccountChangeEventHandler, DirectSignDoc, ICosmosSdkAccount, ICosmosWallet, NoKeplrWalletError, CosmosChainInfo } from 'types';

enum KeplrEvent {
  AccountChange = 'keplr_keystorechange'
}

const logger = loggerFactory.getLogger('[KelprWallet]');

const keplr = new Promise<Keplr>((resolve, reject) => {
  window.onload = () : void => {
    const _window = window as Window;
    if (_window.keplr) {
      _window.keplr.defaultOptions = {
        sign: {
          preferNoSetFee: true
        }
      };
    }
    _window.keplr
      ? resolve(_window.keplr)
      : reject(new NoKeplrWalletError("Can't find Keplr wallet."));
  };
});

async function detectKeplrProvider (): Promise<Keplr> {
  return keplr;
}

async function connect (chainInfo: CosmosChainInfo): Promise<void> {
  const keplr = await detectKeplrProvider();
  keplr.enable(chainInfo.chainId);
}

async function getAccount (chainInfo: CosmosChainInfo): Promise<ICosmosSdkAccount> {
  const keplr = await detectKeplrProvider();
  const key = await keplr.getKey(chainInfo.chainId);
  return {
    address: key.bech32Address,
    balance: '0',
    pubKey: key.pubKey
  };
}

async function addChain (chainId: string): Promise<void> {
  logger.info(`[addChain] Adding ${chainId}...`);
  const chainInfo = _.find(keplrChainInfo, { chainId });
  const keplr = await detectKeplrProvider();
  if (chainInfo) {
    await keplr.experimentalSuggestChain(chainInfo);
  }
}

async function signDirect (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  logger.info('[sign] Direct signing...');
  const keplr = await detectKeplrProvider();
  const _signDoc: DirectSignDoc = {
    chainId,
    bodyBytes: signDoc.body_bytes,
    authInfoBytes: signDoc.auth_info_bytes,
    accountNumber: signDoc.account_number as Long
  };
  return keplr.signDirect(chainId, signer, _signDoc);
}

async function signAmino (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<AminoSignResponse> {
  logger.info('[sign] Direct signing...');
  throw new Error('Not supported!');
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: BroadcastMode): Promise<Uint8Array> {
  logger.info('[sendTx] Sending TX...');
  const keplr = await detectKeplrProvider();
  return keplr.sendTx(chainId, txBytes, mode);
}

async function onAccountChange (handler: AccountChangeEventHandler): Promise<void> {
  (window as any).addEventListener(KeplrEvent.AccountChange, handler);
}

const keplrWallet: ICosmosWallet = {
  keepConnection: true,
  isSupportDirectSign: true,
  isSupportAminoSign: false,
  connect,
  getAccount,
  addChain,
  signDirect,
  sendTx,
  onAccountChange,
  signAmino
};

export default keplrWallet;
