import { AminoSignResponse, BroadcastMode, StdSignDoc } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { Keplr, Window } from '@keplr-wallet/types';
import { cosmos } from 'constants/cosmos-v0.44.5';
import keplrChainInfo from 'constants/keplr-chain-info';
import _ from 'lodash';
import Long from 'long';
import loggerFactory from 'services/util/logger-factory';
import {
  AccountChangeEventHandler,
  CosmosChainInfo,
  DirectSignDoc,
  ICosmosSdkAccount,
  ICosmosWallet,
  NoKeplrWalletError,
  CosmosWalletType
} from 'types';

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

let accountChangeEventHandler: AccountChangeEventHandler;

async function detectKeplrProvider (): Promise<Keplr> {
  return keplr;
}

async function connect (chainInfo: CosmosChainInfo): Promise<void> {
  const keplr = await detectKeplrProvider();
  await addChain(chainInfo.chainId);
  await keplr.enable(chainInfo.chainId);
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

async function signDirect (chainInfo: CosmosChainInfo, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  logger.info('[signDirect] Direct signing...');
  const keplr = await detectKeplrProvider();
  const chainId = chainInfo.chainId;
  const _signDoc: DirectSignDoc = {
    chainId,
    bodyBytes: signDoc.body_bytes,
    authInfoBytes: signDoc.auth_info_bytes,
    accountNumber: signDoc.account_number as Long
  };
  const options = chainInfo && chainInfo.supportZeroFee
    ? { preferNoSetFee: true }
    : { preferNoSetFee: false };
  return keplr.signDirect(chainId, signer, _signDoc, options);
}

async function signAmino (chainInfo: CosmosChainInfo, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
  logger.info('[signAmino] Amino signing...');
  const keplr = await detectKeplrProvider();
  const chainId = chainInfo.chainId;
  const options = chainInfo && chainInfo.supportZeroFee
    ? { preferNoSetFee: true }
    : { preferNoSetFee: false };
  return keplr.signAmino(chainId, signer, signDoc, options);
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: cosmos.tx.v1beta1.BroadcastMode): Promise<Uint8Array> {
  logger.info('[sendTx] Sending TX...');
  const keplr = await detectKeplrProvider();
  return keplr.sendTx(chainId, txBytes, convertBroadcastMode(mode));
}

function registerAccountChangeHandler (handler: AccountChangeEventHandler): void {
  unregisterAccountChangeHandler();
  accountChangeEventHandler = handler;
  (window as any).addEventListener(KeplrEvent.AccountChange, handler);
}

function registerNetworkChangeHandler (handler: AccountChangeEventHandler): void {
  logger.info('[registerNetworkChangeHandler] Keplr does not support network change event. Do nothing...');
}

function unregisterAccountChangeHandler (): void {
  if (accountChangeEventHandler) {
    (window as any).removeEventListener(KeplrEvent.AccountChange, accountChangeEventHandler);
  }
}

function unregisterNetworkChangeHandler (): void {
  logger.info('[unregisterNetworkChangeHandler] Keplr does not support network change event. Do nothing...');
}

function convertBroadcastMode (mode: cosmos.tx.v1beta1.BroadcastMode): BroadcastMode {
  switch (mode) {
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_BLOCK: return BroadcastMode.Block;
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_ASYNC: return BroadcastMode.Async;
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC: return BroadcastMode.Sync;
    default: return BroadcastMode.Sync;
  }
}

const keplrWallet: ICosmosWallet = {
  type: CosmosWalletType.Keplr,
  keepConnection: true,
  isSupportDirectSign: false,
  isSupportAminoSign: true,
  connect,
  getAccount,
  addChain,
  signDirect,
  signAmino,
  sendTx,
  registerAccountChangeHandler,
  registerNetworkChangeHandler,
  unregisterAccountChangeHandler,
  unregisterNetworkChangeHandler
};

export default keplrWallet;
