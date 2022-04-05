import { cosmos, google } from 'constants/cosmos-v0.44.5';
import { ibc } from 'constants/ibc-v2.0.3';
import Long from 'long';
import loggerFactory from 'services/util/logger-factory';
import { ICosmosToken } from 'types';
import { AminoMsg } from '@cosmjs/amino';

const logger = loggerFactory.getLogger('[IbcMessageService]');
const TIMEOUT_HEIGHT = 800;

function createIbcSendMessage (
  sender: string,
  receiver: string,
  token: ICosmosToken,
  amount: string,
  sourcePort: string,
  sourceChannel: string,
  revisionNumber: string,
  revisionHeight: string
): google.protobuf.Any {
  const coin = new cosmos.base.v1beta1.Coin({ denom: token.denom, amount });
  const timeoutHeight: ibc.core.client.v1.IHeight = {
    revision_number: Long.fromString(revisionNumber),
    revision_height: Long.fromString(revisionHeight).add(TIMEOUT_HEIGHT)
  };
  const transferMessage = new ibc.applications.transfer.v1.MsgTransfer({
    sender,
    receiver,
    token: coin,
    source_port: sourcePort,
    source_channel: sourceChannel,
    timeout_height: timeoutHeight
  });
  logger.info('[createIbcSendMessage] MsgTransfer:', transferMessage);

  return new google.protobuf.Any({
    type_url: '/ibc.applications.transfer.v1.MsgTransfer',
    value: ibc.applications.transfer.v1.MsgTransfer.encode(transferMessage).finish()
  });
}

function createIbcSendAminoMessage (
  sender: string,
  receiver: string,
  token: ICosmosToken,
  amount: string,
  sourcePort: string,
  sourceChannel: string,
  revisionNumber: string,
  revisionHeight: string
): AminoMsg {
  const message: AminoMsg = {
    type: 'cosmos-sdk/MsgTransfer',
    value: {
      sender,
      receiver,
      token: { denom: token.denom, amount },
      source_port: sourcePort,
      source_channel: sourceChannel,
      timeout_height: {
        revision_number: revisionNumber,
        revision_height: Long.fromString(revisionHeight).add(TIMEOUT_HEIGHT).toString()
      }
    }
  };
  return message;
}

export default {
  createIbcSendMessage,
  createIbcSendAminoMessage
};
