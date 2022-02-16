import { cosmos, google } from 'constants/gravity-bridge-v1.2.1';
import loggerFactory from 'services/util/logger-factory';

const logger = loggerFactory.getLogger('[CosmosMessageService]');

function createDelegationMessage (
  delegatorAddress: string,
  validatorAddress: string,
  amount: cosmos.base.v1beta1.Coin
): google.protobuf.Any {
  const message = new cosmos.staking.v1beta1.MsgDelegate({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount
  });
  logger.info('MsgDelegate:', message);

  return new google.protobuf.Any({
    type_url: '/cosmos.staking.v1beta1.MsgDelegate',
    value: cosmos.staking.v1beta1.MsgDelegate.encode(message).finish()
  });
}

function createWithdrawDelegatorRewardMessage (
  delegatorAddress: string,
  validatorAddress: string
): google.protobuf.Any {
  const message = new cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress
  });
  logger.info('MsgDelegate:', message);

  return new google.protobuf.Any({
    type_url: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    value: cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.encode(message).finish()
  });
}

export default {
  createDelegationMessage,
  createWithdrawDelegatorRewardMessage
};
