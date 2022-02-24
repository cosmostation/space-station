import Big from 'big.js';
import { cosmos } from 'constants/cosmos-v0.44.5';
import _ from 'lodash';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import gravityBridgeMessageService from 'services/cosmos-tx/gravity-bridge-message-service';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import ethWalletManger from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { Fee, IERC20Token, ITransfer, SupportedChain, SupportedCosmosChain, SupportedEthChain } from 'types';

const logger = loggerFactory.getLogger('[GravityBridgeTransferer]');

const CONTRACTS = {
  [SupportedEthChain.Eth]: '0xa4108aA1Ec4967F8b52220a4f7e94A8201F2D906'
};

function isGravityBridgeTransfer (from: SupportedChain, to: SupportedChain): boolean {
  return (from === SupportedChain.GravityBridge && (to === SupportedChain.Eth)) ||
    (to === SupportedChain.GravityBridge && (from === SupportedChain.Eth));
}

async function transfer (entity: ITransfer): Promise<string> {
  logger.info('[transfer] Entity:', entity);

  if (entity.toChain === SupportedChain.GravityBridge) {
    if (!typeHelper.isSupportedEthChain(entity.fromChain)) {
      const errorMessage = `Transferring from ${entity.fromChain} is not supported on Gravity Bridge!`;
      logger.error('[transfer]', errorMessage);
      throw new Error(errorMessage);
    }
    return transferToGravityBridge(entity);
  } else if (entity.fromChain === SupportedChain.GravityBridge) {
    if (!typeHelper.isSupportedEthChain(entity.toChain)) {
      const errorMessage = `Transferring to ${entity.toChain} is not supported on Gravity Bridge!`;
      logger.error('[transfer]', errorMessage);
      throw new Error(errorMessage);
    }
    return transferFromGravityBridge(entity);
  } else {
    const errorMessage = `Transferring to ${entity.toChain} is not supported on Eth`;
    logger.error('[transfer]', errorMessage);
    throw new Error(errorMessage);
  }
}

async function transferToGravityBridge (entity: ITransfer): Promise<string> {
  logger.info('[transferToGravityBridge] Entity:', entity);

  if (entity.token.erc20 === undefined) {
    const errorMessage = 'Gravity Transferer only allow ERC20 token!';
    logger.error('[transferToGravityBridge]', errorMessage);
    throw new Error(errorMessage);
  }

  if (typeHelper.isSupportedEthChain(entity.fromChain)) {
    const web3 = await ethWalletManger.getWeb3(entity.fromChain);
    if (web3 === null) {
      const errorMessage = "Can't get web3 from current wallet!";
      logger.error('[transferToGravityBridge]', errorMessage);
      throw new Error(errorMessage);
    }

    const erc20Token = entity.token.erc20;
    const decimal = new Big(10).pow(erc20Token.decimals);
    const _amount = new Big(entity.amount).times(decimal).toString();

    const contractAddress = CONTRACTS[entity.fromChain];
    await web3.approve(entity.fromAddress, erc20Token.address, contractAddress, _amount);
    const response = await web3.sendToCosmos(contractAddress, entity.fromAddress, erc20Token.address, entity.toAddress, _amount);
    if (!isSendCosmosResponse(response)) {
      throw new Error('No TX hash');
    }

    logger.info('[transferToGravityBridge] Sending succeed!', 'TX hash:', response.transactionHash);
    return response.transactionHash;
  } else {
    const errorMessage = `Transferring from ${entity.fromChain} is not supported on Gravity Bridge`;
    logger.error('[transferToGravityBridge]', errorMessage);
    throw new Error(errorMessage);
  }
}

async function transferFromGravityBridge (entity: ITransfer): Promise<string> {
  logger.info('[transferFromGravityBridge] Entity:', entity);

  if (entity.token.erc20 === undefined) {
    const errorMessage = 'Gravity Transferer only allow ERC20 token!';
    logger.error('[transferFromGravityBridge]', errorMessage);
    throw new Error(errorMessage);
  }

  const erc20Token = entity.token.erc20;
  const decimal = new Big(10).pow(erc20Token.decimals);
  const _amount = new Big(entity.amount).times(decimal).toString();
  const feeAmount = entity.bridgeFee
    ? new Big(entity.bridgeFee.amount).times(decimal).toString()
    : '0';
  const message = gravityBridgeMessageService.createSendToEthereumMessage(
    entity.fromAddress,
    entity.toAddress,
    erc20Token,
    _amount,
    erc20Token,
    feeAmount
  );

  const signature = await cosmosWalletManager.sign(SupportedCosmosChain.GravityBridge, [message]);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  return cosmosWalletManager.broadcast(
    SupportedCosmosChain.GravityBridge,
    txBytes,
    cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC
  );
}

type sendToCosmosResponse = {
  transactionHash: string
};

function isSendCosmosResponse (response: unknown): response is sendToCosmosResponse {
  return (response as sendToCosmosResponse).transactionHash !== undefined;
}

function getFees (fromChain: SupportedChain, token: IERC20Token, tokenPrice: string): Fee[] {
  if (fromChain === SupportedChain.GravityBridge) {
    return _.map([10, 200, 500], (usdFee, i) => ({
      id: i,
      label: getFeeLabel(usdFee),
      denom: token.symbol,
      amount: Big(usdFee).div(tokenPrice).round(6, Big.roundDown).toString(),
      amountInCurrency: usdFee.toString()
    }));
  } else {
    return [];
  }
}

function getFeeLabel (usdFee: number): string {
  switch (usdFee) {
    case 10: return 'Within a day';
    case 200: return 'Within an hour';
    case 500: return 'Instantly';
    default: return 'Unknown';
  }
}

export default {
  isGravityBridgeTransfer,
  transfer,
  getFees
};
