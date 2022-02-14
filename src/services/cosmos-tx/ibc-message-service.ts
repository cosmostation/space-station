import { ibc } from 'constants/ibc-v2.0.3';
import { google, cosmos } from 'constants/gravity-bridge-v1.2.1';
import loggerFactory from 'services/util/logger-factory';

const logger = loggerFactory.getLogger('[IbcMessageService]');

function createIbcSendMessage (
  sender: string,
  receiver: string,
  token: cosmos.base.v1beta1.Coin,
  sourcePort: string,
  sourceChannel: string,
  timeoutHeight: ibc.core.client.v1.IHeight
): google.protobuf.Any {
  const transferMessage = new ibc.applications.transfer.v1.MsgTransfer({
    sender,
    receiver,
    token,
    source_port: sourcePort,
    source_channel: sourceChannel,
    timeout_height: timeoutHeight
  });
  logger.info('MsgTransfer', transferMessage);

  return new google.protobuf.Any({
    type_url: '/ibc.applications.transfer.v1.MsgTransfer',
    value: ibc.applications.transfer.v1.MsgTransfer.encode(transferMessage).finish()
  });
}

export default {
  createIbcSendMessage
};
