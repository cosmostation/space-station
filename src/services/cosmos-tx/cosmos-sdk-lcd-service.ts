import axios from 'axios';
import cosmosChains from 'constants/cosmos-chains';
import { cosmos } from 'constants/cosmos-v0.44.5';
import _ from 'lodash';
import loggerFactory from 'services/util/logger-factory';
import { SupportedCosmosChain } from 'types';

const logger = loggerFactory.getLogger('[lcdService]');

type AccountInfoResponse = {
  '@type': string;
  // eslint-disable-next-line camelcase
  account_number: string;
  address: string;
  // eslint-disable-next-line camelcase
  pub_key: {
    '@type': string;
    key: string;
  },
  sequence: string;
}

type Token = {
  denom: string;
  amount: string;
}

type ChannelResponse = {
  channel: {
    state: string,
    ordering: string,
    counterparty: {
      // eslint-disable-next-line camelcase
      port_id: string,
      // eslint-disable-next-line camelcase
      channel_id: string
    },
    // eslint-disable-next-line camelcase
    connection_hops: string[],
    version: string
  },
  proof: unknown,
  // eslint-disable-next-line camelcase
  proof_height: {
    // eslint-disable-next-line camelcase
    revision_number: string,
    // eslint-disable-next-line camelcase
    revision_height: string
  }
};

async function getAccountInfo (cosmosChain: SupportedCosmosChain, address: string): Promise<AccountInfoResponse> {
  const chain = cosmosChains[cosmosChain];
  const url = `${chain.lcd}/cosmos/auth/v1beta1/accounts/${address}`;
  const response = await axios.get(url);
  return _.get(response, 'data.account') as AccountInfoResponse;
}

async function getBalance (cosmosChain: SupportedCosmosChain, address: string): Promise<Token[]> {
  const chain = cosmosChains[cosmosChain];
  const url = `${chain.lcd}/cosmos/bank/v1beta1/balances/${address}`;
  const response = await axios.get(url);
  return _.get(response, 'data.balances');
}

function getTx (cosmosChain: SupportedCosmosChain, txHash: string): Promise<unknown> {
  const chain = cosmosChains[cosmosChain];
  const url = `${chain.lcd}/cosmos/tx/v1beta1/txs/${txHash}`;
  return axios.get(url)
    .then((response) => _.get(response, 'data'));
}

async function broadcastProtoTx (cosmosChain: SupportedCosmosChain, txBytes: Uint8Array, broadCastMode: cosmos.tx.v1beta1.BroadcastMode): Promise<unknown> {
  const chain = cosmosChains[cosmosChain];
  const txBytesBase64 = Buffer.from(txBytes).toString('base64');
  const data = { tx_bytes: txBytesBase64, mode: broadCastMode };
  const url = `${chain.lcd}/cosmos/tx/v1beta1/txs`;
  const response = await axios.post(url, data);
  return _.get(response, 'data');
}

async function getIbcDenomTraces (cosmosChain: SupportedCosmosChain): Promise<unknown> {
  const chain = cosmosChains[cosmosChain];
  const url = `${chain.lcd}/ibc/apps/transfer/v1/denom_traces`;
  const response = await axios.get(url);
  return _.get(response, 'data.denom_trace');
}

function getDestChannel (fromChain: SupportedCosmosChain, toChain: SupportedCosmosChain): Promise<[string, ChannelResponse]> {
  const fromChainInfo = cosmosChains[fromChain];
  const sourceChannel = fromChainInfo.ibcChannels[toChain];
  const toChainInfo = cosmosChains[toChain];
  const destChannel = toChainInfo.ibcChannels[fromChain];
  if (!sourceChannel) {
    throw new Error(`There is no channel from ${fromChain} to ${toChain}`);
  }
  const url = `${toChainInfo.lcd}/ibc/core/channel/v1/channels/${destChannel}/ports/transfer`;
  return axios.get(url)
    .then((response) => [sourceChannel, _.get(response, 'data')]);
}

export default {
  getAccountInfo,
  getBalance,
  getTx,
  broadcastProtoTx,
  getIbcDenomTraces,
  getDestChannel
};
