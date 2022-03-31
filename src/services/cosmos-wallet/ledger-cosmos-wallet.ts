import { AminoSignResponse, StdSignDoc } from '@cosmjs/amino';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { cosmos } from 'constants/cosmos-v0.44.5';
import _ from 'lodash';
import ledgerConnector from 'services/ledger-connector';
import loggerFactory from 'services/util/logger-factory';
import {
  AccountChangeEventHandler,
  CosmosChainInfo,
  CosmosWalletType,
  ICosmosSdkAccount,
  ICosmosWallet,
  NetworkChangeEventHandler,
} from 'types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CosmosApp from 'ledger-cosmos-js';

const logger = loggerFactory.getLogger('[LedgerCosmosWallet]');

async function connect (chainInfo: CosmosChainInfo): Promise<void> {
  const transport = await ledgerConnector.getLedgerConnection();
  const app = new CosmosApp(transport);
  await checkApp(app);
  await checkLock(app);
}

async function getAccount (chainInfo: CosmosChainInfo): Promise<ICosmosSdkAccount> {
  const transport = await ledgerConnector.getLedgerConnection();
  const app = new CosmosApp(transport);
  await checkApp(app);
  await checkLock(app);

  const address = await app.getAddressAndPubKey(chainInfo.path, chainInfo.bech32Prefix);

  return {
    address: address.bech32_address,
    balance: '0',
    pubKey: address.compressedPk
  };
}

async function addChain (chainId: string): Promise<void> {
  logger.info(`[addChain] Adding ${chainId}...`);
  logger.info('[addChain] Ledger does not support to add chain. Do nothing...');
}

async function signDirect (chainInfo: CosmosChainInfo, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc): Promise<DirectSignResponse> {
  logger.info('[sign] Direct signing...');
  throw new Error('Not supported!');
}

async function signAmino (chainInfo: CosmosChainInfo, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
  logger.info('[sign] Amino signing...');
  const transport = await ledgerConnector.getLedgerConnection();
  const app = new CosmosApp(transport);
  const signature = await app.sign(chainInfo.path, signDoc);
  logger.info(signature);
  return signature;
}

async function sendTx (chainId: string, txBytes: Uint8Array, mode: cosmos.tx.v1beta1.BroadcastMode): Promise<Uint8Array> {
  logger.info('[sendTx] Sending TX...');
  logger.error('[sendTx] Ledger does not support sending TX!');
  return new Uint8Array();
}

function registerAccountChangeHandler (handler: AccountChangeEventHandler): void {
  logger.info('[registerAccountChangeHandler] Ledger does not support account change event. Do nothing...');
}

function registerNetworkChangeHandler (handler: NetworkChangeEventHandler): void {
  logger.info('[registerNetworkChangeHandler] Ledger does not support network change event. Do nothing...');
}

function unregisterAccountChangeHandler (): void {
  logger.info('[unregisterNetworkChangeHandler] Keplr does not support network change event. Do nothing...');
}

function unregisterNetworkChangeHandler (): void {
  logger.info('[unregisterNetworkChangeHandler] Keplr does not support network change event. Do nothing...');
}

async function checkLock (app: CosmosApp): Promise<void> {
  const device = await app.getVersion();
  logger.info('[checkLock]', device);
  const locked = _.get(device, 'device_locked', true);

  if (locked) {
    throw new Error('Ledger: Please unlock Ledger device!');
  }
}

async function checkApp (app: CosmosApp): Promise<void> {
  const info = await app.appInfo();
  logger.info('[checkApp]', info);
  const appName = _.get(info, 'appName');

  if (appName !== 'Cosmos') {
    throw new Error('Ledger: Please open Cosmos App!');
  }
}

const ledgerWallet: ICosmosWallet = {
  type: CosmosWalletType.Ledger,
  keepConnection: false,
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

export default ledgerWallet;
