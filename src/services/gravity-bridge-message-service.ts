import { TokenInfo } from '@uniswap/token-lists';
import Big from 'big.js';
import { cosmos, google, gravity } from 'constants/gravity-main';
import { IERC20Token } from 'types';

function createSendToEthereumMessage (
  sender: string,
  ethAddress: string,
  tokenInfo: TokenInfo,
  amount: string,
  feeTokenInfo: TokenInfo,
  feeAmount: string
): google.protobuf.Any {
  const erc20Token = convertTokenInfo(tokenInfo, amount);
  const feeErc20Token = convertTokenInfo(feeTokenInfo, feeAmount);
  const sendMessage = new gravity.v1.MsgSendToEthereum({
    sender,
    ethereum_recipient: ethAddress,
    amount: erc20Token,
    bridge_fee: feeErc20Token
  });

  return new google.protobuf.Any({
    type_url: '/gravity.v1.MsgSendToEthereum',
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

function convertTokenInfo (tokenInfo: TokenInfo, amount: string): IERC20Token {
  return {
    contract: tokenInfo.address,
    amount
  };
}

export default {
  createSendToEthereumMessage,
  createDelegateMessage,
  createWithdrawDelegatorRewardMessage
};
