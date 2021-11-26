import axios from 'axios';
import { cosmos } from 'constants/gravity-main';
import chainInfo from 'constants/keplr-chain-info';
import _ from 'lodash';

const LCD_ENDPOINT = chainInfo.gravityBridge.rest;

type AccountInfoResponse = {
  readonly '@type': string;
  readonly account_number: string;
  readonly address: string;
  readonly pub_key: {
    readonly '@type': string;
    readonly key: string;
  },
  readonly sequence: string;
}

async function getAccountInfo (address: string): Promise<AccountInfoResponse> {
  const url = `${LCD_ENDPOINT}/cosmos/auth/v1beta1/accounts/${address}`;
  const response = await axios.get(url);
  return _.get(response, 'data.account') as AccountInfoResponse;
}

function getTx (txHash: string): Promise<unknown> {
  const url = `${LCD_ENDPOINT}/cosmos/tx/v1beta1/txs/${txHash}`;
  return axios.get(url)
    .then((response) => _.get(response, 'data'));
}

async function broadcastProtoTx (txBytes: Uint8Array, broadCastMode: cosmos.tx.v1beta1.BroadcastMode): Promise<unknown> {
  const txBytesBase64 = Buffer.from(txBytes).toString('base64');
  const data = { tx_bytes: txBytesBase64, mode: broadCastMode };
  const url = `${LCD_ENDPOINT}/cosmos/tx/v1beta1/txs`;
  const response = await axios.post(url, data);
  return _.get(response, 'data');
}

export default {
  getAccountInfo,
  getTx,
  broadcastProtoTx,
};
