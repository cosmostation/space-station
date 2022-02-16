import Big from 'big.js';
import { cosmos } from 'constants/gravity-bridge-v1.2.1';
import _ from 'lodash';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import gravityBridgeMessageService from 'services/cosmos-tx/gravity-bridge-message-service';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import ethWalletManger from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import { Fee, IERC20Token, IToken, SupportedChain, SupportedCosmosChain, SupportedEthChain } from 'types';

const logger = loggerFactory.getLogger('[GravityBridgeTransferer]');

const CONTRACTS = {
  [SupportedEthChain.Eth]: '0xa4108aA1Ec4967F8b52220a4f7e94A8201F2D906',
  [SupportedEthChain.Goerli]: '0xace45Cd2d490a0A180e50144D8dd0c7EB9A4215f'
};

function isGravityBridgeTransfer (from: SupportedChain, to: SupportedChain, token: IToken): boolean {
  const isSupportedChains = (from === SupportedChain.GravityBridge && (to === SupportedChain.Eth || to === SupportedChain.Goerli)) ||
    (to === SupportedChain.GravityBridge && (from === SupportedChain.Eth || from === SupportedChain.Goerli));
  return isSupportedChains && token.isErc20;
}

async function transfer (
  from: SupportedChain,
  to: SupportedChain,
  fromAddress: string,
  toAddress: string,
  token: IERC20Token,
  amount: string,
  fee?: Fee
): Promise<string> {
  logger.info(
    `[transfer] sending ERC20 token to ${to}`,
    'from address:', fromAddress,
    'to address:', toAddress,
    'token:', token,
    'amount:',
    amount
  );

  if (to === SupportedChain.GravityBridge) {
    if (!isSupportedEthChain(from)) {
      const errorMessage = `Transferring from ${from} is not supported on Gravity Bridge!`;
      logger.error('[transfer]', errorMessage);
      throw new Error(errorMessage);
    }
    return transferToGravityBridge(from, fromAddress, toAddress, token, amount);
  } else if (from === SupportedChain.GravityBridge) {
    if (!isSupportedEthChain(to)) {
      const errorMessage = `Transferring to ${to} is not supported on Gravity Bridge!`;
      logger.error('[transfer]', errorMessage);
      throw new Error(errorMessage);
    }
    return transferFromGravityBridge(to, fromAddress, toAddress, token, amount, fee);
  } else {
    const errorMessage = `Transferring to ${to} is not supported on Eth`;
    logger.error('[transfer]', errorMessage);
    throw new Error(errorMessage);
  }
}

async function transferToGravityBridge (
  from: SupportedEthChain,
  fromAddress: string,
  toAddress: string,
  token: IERC20Token,
  amount: string
): Promise<string> {
  logger.info(
    `[transferToGravityBridge] sending ERC20 token from ${from} to Gravity Bridge`,
    'from address:', fromAddress,
    'to address:', toAddress,
    'token:', token,
    'amount:', amount
  );
  if (isSupportedEthChain(from)) {
    const web3 = await ethWalletManger.getWeb3(from);
    if (web3 === null) {
      const errorMessage = "Can't get web3 from current wallet!";
      logger.error('[transferToGravityBridge]', errorMessage);
      throw new Error(errorMessage);
    }

    const contractAddress = CONTRACTS[from];
    const decimal = new Big(10).pow(token.decimals);
    const _amount = new Big(amount).times(decimal).toString();
    await web3.approve(fromAddress, token.address, contractAddress, _amount);
    const response = await web3.sendToCosmos(contractAddress, fromAddress, token.address, toAddress, _amount);
    if (!isSendCosmosResponse(response)) {
      throw new Error('No TX hash');
    }

    logger.info('[transferToGravityBridge] Sending succeed!', 'TX hash:', response.transactionHash);
    return response.transactionHash;
  } else {
    const errorMessage = `Transferring from ${from} is not supported on Gravity Bridge`;
    logger.error('[transferToGravityBridge]', errorMessage);
    throw new Error(errorMessage);
  }
}

async function transferFromGravityBridge (
  to: SupportedEthChain,
  fromAddress: string,
  toAddress: string,
  token: IERC20Token,
  amount: string,
  fee?: Fee
): Promise<string> {
  logger.info(
    `[transferFromGravityBridge] Sending to ${to}...`,
    'eth address:', toAddress,
    'token:', token,
    'amount:', amount,
    'fee:', fee
  );

  const decimal = new Big(10).pow(token.decimals);
  const _amount = new Big(amount).times(decimal).toString();
  const feeAmount = fee
    ? new Big(fee.amount).times(decimal).toString()
    : '0';
  const message = gravityBridgeMessageService.createSendToEthereumMessage(
    fromAddress,
    toAddress,
    token,
    _amount,
    token,
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

function isSupportedEthChain (chain: unknown): chain is SupportedEthChain {
  return _.includes(_.keys(CONTRACTS), chain as SupportedEthChain);
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
