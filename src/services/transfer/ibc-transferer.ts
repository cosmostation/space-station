import Big from 'big.js';
import { cosmos } from 'constants/cosmos-v0.44.5';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import cosmosTxService from 'services/cosmos-tx/cosmos-tx-service';
import ibcMessageService from 'services/cosmos-tx/ibc-message-service';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { ITransfer, SupportedChain } from 'types';

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
    const errorMessage = 'Cosmos token is only allowed for IBC transfer!';
    logger.error('[transfer]', errorMessage);
    throw new Error(errorMessage);
  }

  const [originChannelId, channel] = await lcdService.getDestChannel(entity.fromChain, entity.toChain);
  logger.info('[transfer] Destination Channel:', channel, 'Origin Channel ID:', originChannelId);

  const cosmosToken = entity.token.cosmos;
  const decimal = new Big(10).pow(cosmosToken.decimals);
  const _amount = new Big(entity.amount).times(decimal).toString();
  const timeoutHeight = channel.proof_height;
  logger.info('[transfer] Timeout Height:', timeoutHeight);

  const message = ibcMessageService.createIbcSendMessage(
    entity.fromAddress,
    entity.toAddress,
    cosmosToken,
    _amount,
    'transfer',
    originChannelId,
    timeoutHeight.revision_number,
    timeoutHeight.revision_height
  );
  logger.info('[transfer] Message:', message);

  const signature = await cosmosWalletManager.signDirect(entity.fromChain, [message]);
  logger.info('[transfer] signature:', signature);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  return cosmosWalletManager.broadcast(
    entity.fromChain,
    txBytes,
    cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC
  );
}

export default {
  isIbcTransfer,
  transfer
};
