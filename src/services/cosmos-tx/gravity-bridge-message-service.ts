import Big from 'big.js';
import { cosmos, google } from 'constants/cosmos-v0.44.5';
import { gravity } from 'constants/gravity-bridge-v1.8.2';
import loggerFactory from 'services/util/logger-factory';
import { IToken, ITransfer } from 'types';
import { AminoMsg } from '@cosmjs/amino';

const logger = loggerFactory.getLogger('[GravityBridgeMessageService]');

function createSendToEthereumMessage (transfer: ITransfer): google.protobuf.Any {
  const token = transfer.token.erc20 || transfer.token.cosmos;
  if (!token) {
    const errorMessage = 'No token info!';
    logger.error('[createSendToEthereumMessage]', errorMessage);
    throw new Error(errorMessage);
  }

  const decimal = new Big(10).pow(token.decimals);
  const amount = new Big(transfer.amount).times(decimal).toString();
  const feeAmount = transfer.bridgeFee
    ? new Big(transfer.bridgeFee.amount).times(decimal).toString()
    : '0';
  const chainAmount = transfer.bridgeFee ? new Big(transfer.bridgeFee.chainFee).times(decimal).toString() : '0';
  const coin = convertTokenToCoin(transfer.token, amount);
  const feeCoin = convertTokenToCoin(transfer.token, feeAmount);
  const chainCoin = convertTokenToCoin(transfer.token, chainAmount);
  const sendMessage = new gravity.v1.MsgSendToEth({
    sender: transfer.fromAddress,
    eth_dest: transfer.toAddress,
    amount: coin,
    bridge_fee: feeCoin,
    chain_fee: chainCoin
  });
  logger.info('[createSendToEthereumMessage] MsgSendToEth:', sendMessage);

  return new google.protobuf.Any({
    type_url: '/gravity.v1.MsgSendToEth',
    value: gravity.v1.MsgSendToEth.encode(sendMessage).finish()
  });
}

function createSendToEthereumAminoMessage (transfer: ITransfer): AminoMsg {
  const token = transfer.token.erc20 || transfer.token.cosmos;
  if (!token) {
    const errorMessage = 'No token info!';
    logger.error('[createSendToEthereumAminoMessage]', errorMessage);
    throw new Error(errorMessage);
  }

  const decimal = new Big(10).pow(token.decimals);
  const amount = new Big(transfer.amount).times(decimal).toString();
  const feeAmount = transfer.bridgeFee
    ? new Big(transfer.bridgeFee.amount).times(decimal).toString()
    : '0';
  const chainAmount = transfer.bridgeFee ? new Big(transfer.bridgeFee.chainFee).times(decimal).toString() : '0';
  const coin = convertTokenToCoin(transfer.token, amount);
  const feeCoin = convertTokenToCoin(transfer.token, feeAmount);
  const chainCoin = convertTokenToCoin(transfer.token, chainAmount);
  const message: AminoMsg = {
    type: 'gravity/MsgSendToEth',
    value: {
      sender: transfer.fromAddress,
      eth_dest: transfer.toAddress,
      amount: coin,
      bridge_fee: feeCoin,
      chain_fee: chainCoin
    }
  };

  logger.info('[createSendToEthereumAminoMessage] MsgSendToEth:', message);
  return message;
}

function convertTokenToCoin (token: IToken, amount: string): cosmos.base.v1beta1.ICoin {
  if (token.erc20) {
    return {
      denom: `gravity${token.erc20.address}`,
      amount
    };
  } else if (token.cosmos) {
    return {
      denom: token.cosmos.denom,
      amount
    };
  } else {
    const errorMessage = 'No token info!';
    logger.error('[convertTokenToCoin]', errorMessage);
    throw new Error(errorMessage);
  }
}

export default {
  createSendToEthereumMessage,
  createSendToEthereumAminoMessage
};
