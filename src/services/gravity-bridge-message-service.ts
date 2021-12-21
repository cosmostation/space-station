import Big from 'big.js';
import { cosmos, google, gravity } from 'constants/gravity-main';
import { IERC20Token } from 'types';

function createSendToEthereumMessage (
  sender: string,
  ethAddress: string,
  erc20Token: IERC20Token,
  erc20Fee: IERC20Token
): google.protobuf.Any {
  const sendMessage = new gravity.v1.SendToEthereum({
    sender,
    ethereum_recipient: ethAddress,
    erc20_token: erc20Token,
    erc20_fee: erc20Fee
  });

  return new google.protobuf.Any({
    type_url: '/gravity.v1.SendToEthereum',
    value: gravity.v1.SendToEthereum.encode(sendMessage).finish()
  });
}

function createDelegateMessage (delegator: string, validator: string, amount: number): google.protobuf.Any {
  const message = new cosmos.staking.v1beta1.MsgDelegate({
    delegator_address: delegator,
    validator_address: validator,
    amount: {
      denom: 'ugraviton',
      amount: Big(amount).times(10 ** 6).toString()
    }
  });

  return new google.protobuf.Any({
    type_url: '/cosmos.staking.v1beta1.MsgDelegate',
    value: cosmos.staking.v1beta1.MsgDelegate.encode(message).finish()
  });
}

function createWithdrawDelegatorRewardMessage (delegator: string, validator: string): google.protobuf.Any {
  const message = new cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward({
    delegator_address: delegator,
    validator_address: validator
  });

  return new google.protobuf.Any({
    type_url: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    value: cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.encode(message).finish()
  });
}

export default {
  createSendToEthereumMessage,
  createDelegateMessage,
  createWithdrawDelegatorRewardMessage
};
