import { AminoSignResponse, BroadcastMode, StdSignDoc } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { cosmos } from 'constants/cosmos-v0.44.5';
import _ from 'lodash';
import Long from 'long';
import loggerFactory from 'services/util/logger-factory';
import { Cosmos, cosmos as cosmosProvider } from '@cosmostation/extension-client';
import {
  AccountChangeEventHandler,
  CosmosChainInfo,
  ICosmosSdkAccount,
  ICosmosWallet,
  NoCosmostationWalletError,
  CosmosWalletType
} from 'types';
import { Fee, Msg } from '@cosmostation/extension-client/types/message';
import { findChainInfoByChainId } from 'constants/cosmos-chains';
import keplrChainInfo from 'constants/keplr-chain-info';

const logger = loggerFactory.getLogger('[KelprWallet]');

let accountChangeEventHandler: AccountChangeEventHandler;

async function detectCosmostationProvider ():Promise<Cosmos> {
  try {
    return await cosmosProvider();
  } catch (e) {
    throw new NoCosmostationWalletError("Can't find Cosmostation wallet.");
  }
}

async function connect (chainInfo: CosmosChainInfo): Promise<void> {
  const cosmostation = await detectCosmostationProvider();
  await addChain(chainInfo.chainId);
  await cosmostation.requestAccount(chainInfo.chainName);
}

async function getAccount (chainInfo: CosmosChainInfo): Promise<ICosmosSdkAccount | undefined> {
  const cosmostation = await detectCosmostationProvider();
  try {
    const key = await cosmostation.requestAccount(chainInfo.chainName);
    return {
      address: key.address,
      balance: '0',
      pubKey: key.publicKey
    };
  } catch {
    return undefined;
  }
}

async function addChain (chainId: string): Promise<void> {
  logger.info(`[addChain] Adding ${chainId}...`);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const chainInfo = _.find(keplrChainInfo, { chainId })!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const chainInfo2 = findChainInfoByChainId(chainId)!;

  const cosmostation = await detectCosmostationProvider();
  const supportedChainNames = await cosmostation.getSupportedChains();

  if (![...supportedChainNames.official, ...supportedChainNames.unofficial].includes(chainInfo2.chainName.toLowerCase())) {
    await cosmostation.addChain({
      chainId: chainInfo.chainId,
      addressPrefix: chainInfo.bech32Config.bech32PrefixAccAddr,
      baseDenom: chainInfo.currencies[0].coinMinimalDenom,
      chainName: chainInfo.chainName,
      displayDenom: chainInfo.currencies[0].coinDenom,
      decimals: chainInfo.currencies[0].coinDecimals,
      restURL: chainInfo.rest,
      coinType: String(chainInfo.bip44.coinType),
      gasRate: chainInfo.gasPriceStep
        ? {
            tiny: String(chainInfo.gasPriceStep.low),
            low: String(chainInfo.gasPriceStep.average),
            average: String(chainInfo.gasPriceStep.high)
          }
        : undefined
    });
  }
}

async function signDirect (chainInfo: CosmosChainInfo, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  logger.info('[signDirect] Direct signing...');
  const cosmostation = await detectCosmostationProvider();
  const chainId = chainInfo.chainId;

  const options = chainInfo && chainInfo.supportZeroFee
    ? { fee: false }
    : { fee: true };

  const result = await cosmostation.signDirect(chainInfo.chainName, {
    account_number: String(signDoc.account_number),
    auth_info_bytes: signDoc.auth_info_bytes,
    body_bytes: signDoc.body_bytes,
    chain_id: chainId
  }, options);
  return {
    signature: {
      pub_key: result.pub_key,
      signature: result.signature
    },
    signed: {
      accountNumber: new Long(Number(result.signed_doc.account_number)),
      authInfoBytes: result.signed_doc.auth_info_bytes,
      bodyBytes: result.signed_doc.body_bytes,
      chainId: result.signed_doc.chain_id
    }
  };
}

async function signAmino (chainInfo: CosmosChainInfo, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
  logger.info('[signAmino] Amino signing...');
  const cosmostation = await detectCosmostationProvider();
  const chainId = chainInfo.chainId;
  const options = chainInfo && chainInfo.supportZeroFee
    ? { fee: false }
    : { fee: true };

  const result = await cosmostation.signAmino(chainId, {
    account_number: signDoc.account_number,
    chain_id: signDoc.chain_id,
    fee: signDoc.fee as Fee,
    memo: signDoc.memo,
    msgs: signDoc.msgs as Msg<unknown>[],
    sequence: signDoc.sequence
  }, options);
  return {
    signature: {
      pub_key: result.pub_key,
      signature: result.signature
    },
    signed: result.signed_doc
  };
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: cosmos.tx.v1beta1.BroadcastMode): Promise<Uint8Array> {
  logger.info('[sendTx] Sending TX...');
  const cosmostation = await detectCosmostationProvider();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const chainInfo = findChainInfoByChainId(chainId)!;

  const result = await cosmostation.sendTransaction(chainInfo.chainName, txBytes, mode);

  return Buffer.from(result.tx_response.txhash, 'hex');
}

async function registerAccountChangeHandler (handler: AccountChangeEventHandler): Promise<void> {
  const cosmostation = await detectCosmostationProvider();
  unregisterAccountChangeHandler();

  accountChangeEventHandler = cosmostation.onAccountChanged(handler as any) as any;
}

function registerNetworkChangeHandler (handler: AccountChangeEventHandler): void {
  logger.info('[registerNetworkChangeHandler] Cosmostation does not support network change event. Do nothing...');
}

async function unregisterAccountChangeHandler (): Promise<void> {
  if (accountChangeEventHandler) {
    const cosmostation = await detectCosmostationProvider();
    cosmostation.offAccountChanged(accountChangeEventHandler);
  }
}

function unregisterNetworkChangeHandler (): void {
  logger.info('[unregisterNetworkChangeHandler] Cosmostation does not support network change event. Do nothing...');
}

function convertBroadcastMode (mode: cosmos.tx.v1beta1.BroadcastMode): BroadcastMode {
  switch (mode) {
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_BLOCK: return BroadcastMode.Block;
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_ASYNC: return BroadcastMode.Async;
    case cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC: return BroadcastMode.Sync;
    default: return BroadcastMode.Sync;
  }
}

async function isSupportDirectSign (chainInfo: CosmosChainInfo): Promise<boolean> {
  return true;
}

async function isSupportAminoSign (chainInfo: CosmosChainInfo): Promise<boolean> {
  return Promise.resolve(true);
}

async function isSupportBroadcast (chainInfo: CosmosChainInfo): Promise<boolean> {
  try {
    const account = await getAccount(chainInfo);
    return !_.isEmpty(account);
  } catch (error) {
    return false;
  }
}

const cosmostationWallet: ICosmosWallet = {
  type: CosmosWalletType.Cosmostation,
  keepConnection: true,
  isSupportDirectSign,
  isSupportAminoSign,
  isSupportBroadcast,
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

export default cosmostationWallet;
