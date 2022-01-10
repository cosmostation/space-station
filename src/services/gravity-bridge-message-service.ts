import { TokenInfo } from '@uniswap/token-lists';
import { cosmos, google, gravity } from 'constants/gravity-bridge-v1.2.1';
import loggerFactory from 'services/logger-factory';

const logger = loggerFactory.getLogger('[GravityBridgeMessageService]');

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
  const sendMessage = new gravity.v1.MsgSendToEth({
    sender,
    eth_dest: ethAddress,
    amount: erc20Token,
    bridge_fee: feeErc20Token
  });
  logger.info('MsgSendToEth', sendMessage);

  return new google.protobuf.Any({
    type_url: '/gravity.v1.MsgSendToEth',
    value: gravity.v1.MsgSendToEth.encode(sendMessage).finish()
  });
}

function convertTokenInfo (tokenInfo: TokenInfo, amount: string): cosmos.base.v1beta1.ICoin {
  return {
    denom: `gravity${tokenInfo.address}`,
    amount
  };
}

export default {
  createSendToEthereumMessage
};
