import axios from 'axios';
import { cosmos } from 'constants/gravity-bridge-v1.2.1';
import _ from 'lodash';
import { SupportedCosmosChain } from 'types';
import cosmosChains from 'constants/cosmos-chains';

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

export default {
  getAccountInfo,
  getBalance,
  getTx,
  broadcastProtoTx
};
