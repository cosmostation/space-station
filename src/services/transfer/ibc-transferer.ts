import Big from 'big.js';
import { cosmos } from 'constants/cosmos-v0.44.5';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import ibcMessageService from 'services/cosmos-tx/ibc-message-service';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { ITransfer, SupportedChain, CosmosBroadcastSource, ICosmosToken, SupportedCosmosChain } from 'types';

const logger = loggerFactory.getLogger('[IbcTransferer]');

function isIbcTransfer (from: SupportedChain, to: SupportedChain): boolean {
  return typeHelper.isSupportedCosmosChain(from) && typeHelper.isSupportedCosmosChain(to);
}

async function transfer (entity: ITransfer): Promise<string> {
  logger.info('[transfer] Entity:', entity);

  if (!typeHelper.isSupportedCosmosChain(entity.fromChain) || !typeHelper.isSupportedCosmosChain(entity.toChain)) {
    const errorMessage = `IBC Transferring from ${entity.fromChain} to ${entity.toChain} is not supported!`;
    logger.error('[transfer]', errorMessage);
    throw new Error(errorMessage);
  }

  if (entity.token.cosmos === undefined) {
    const errorMessage = 'Only Cosmos SDK based token can do IBC transfer!';
    logger.error('[transfer]', errorMessage);
    throw new Error(errorMessage);
  }

  const [originChannelId, channel] = await lcdService.getDestChannel(entity.fromChain, entity.toChain);
  logger.info('[transfer] Destination Channel:', channel, 'Origin Channel ID:', originChannelId);

  const cosmosToken = entity.token.cosmos;
  const timeoutHeight = channel.proof_height;
  const feeAmount = entity.feeAmount || '0';
  const memo = entity.memo || '';
  logger.info('[transfer] Timeout Height:', timeoutHeight);

  if (cosmosWalletManager.canSignDirect(entity.fromChain)) {
    return broadcastWithDirectSign(
      entity.fromChain,
      cosmosToken,
      entity.amount,
      entity.fromAddress,
      entity.toAddress,
      originChannelId,
      timeoutHeight.revision_number,
      timeoutHeight.revision_height,
      feeAmount,
      memo
    );
  } else if (cosmosWalletManager.canSignAmino(entity.fromChain)) {
    return broadcastWithAminoSign(
      entity.fromChain,
      cosmosToken,
      entity.amount,
      entity.fromAddress,
      entity.toAddress,
      originChannelId,
      timeoutHeight.revision_number,
      timeoutHeight.revision_height,
      feeAmount,
      memo
    );
  } else {
    throw new Error('[transfer] Wallet should support direct signing or amino signing!');
  }
}

async function broadcastWithDirectSign (
  fromChain: SupportedCosmosChain,
  cosmosToken: ICosmosToken,
  amount: string,
  fromAddress: string,
  toAddress: string,
  originChannelId: string,
  revisionNumber: string,
  revisionHeight: string,
  feeAmount: string,
  memo: string
): Promise<string> {
  const decimal = new Big(10).pow(cosmosToken.decimals);
  const _amount = new Big(amount).times(decimal).toString();
  const gasLimit = 200000;

  const message = ibcMessageService.createIbcSendMessage(
    fromAddress,
    toAddress,
    cosmosToken,
    _amount,
    'transfer',
    originChannelId,
    revisionNumber,
    revisionHeight
  );
  logger.info('[broadcastWithDirectSign] Message:', message);

  const signature = await cosmosWalletManager.signDirect(
    fromChain,
    [message],
    feeAmount,
    gasLimit,
    memo
  );
  logger.info('[broadcastWithDirectSign] signature:', signature);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  return cosmosWalletManager.broadcast(
    fromChain,
    txBytes,
    cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC,
    CosmosBroadcastSource.Wallet
  );
}

async function broadcastWithAminoSign (
  fromChain: SupportedCosmosChain,
  cosmosToken: ICosmosToken,
  amount: string,
  fromAddress: string,
  toAddress: string,
  originChannelId: string,
  revisionNumber: string,
  revisionHeight: string,
  feeAmount: string,
  memo: string
): Promise<string> {
  const decimal = new Big(10).pow(cosmosToken.decimals);
  const _amount = new Big(amount).times(decimal).toString();
  const gasLimit = 200000;

  const aminoMessage = ibcMessageService.createIbcSendAminoMessage(
    fromAddress,
    toAddress,
    cosmosToken,
    _amount,
    'transfer',
    originChannelId,
    revisionNumber,
    revisionHeight
  );

  const aminoSignResponse = await cosmosWalletManager.signAmino(
    fromChain,
    [aminoMessage],
    feeAmount,
    gasLimit,
    memo
  );

  const message = ibcMessageService.createIbcSendMessage(
    fromAddress,
    toAddress,
    cosmosToken,
    _amount,
    'transfer',
    originChannelId,
    revisionNumber,
    revisionHeight
  );

  const txBytes = cosmosTxService.createAminoTxRawBytes(aminoSignResponse, [message]);
  return cosmosWalletManager.broadcast(
    fromChain,
    txBytes,
    cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC,
    CosmosBroadcastSource.Wallet
  );
}

export default {
  isIbcTransfer,
  transfer
};
