import { BridgeFee, IToken, ITransfer, SupportedChain } from 'types';

import gravityBridgeTransferer from './gravity-bridge-transferer';
import ibcTransferer from './ibc-transferer';

async function transfer (entity: ITransfer): Promise<string> {
  if (gravityBridgeTransferer.isGravityBridgeTransfer(entity.fromChain, entity.toChain)) {
    return gravityBridgeTransferer.transfer(entity);
  } else if (ibcTransferer.isIbcTransfer(entity.fromChain, entity.toChain)) {
    if (entity.token.cosmos) {
      return ibcTransferer.transfer(entity);
    }
  }
  throw new Error('Unsupported Transfer!');
}

function needBridgeFee (fromChain: SupportedChain, toChain: SupportedChain): boolean {
  if (gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain)) {
    return fromChain === SupportedChain.GravityBridge;
  }
  return false;
}

function getFees (fromChain: SupportedChain, toChain: SupportedChain, token: IToken, tokenPrice: string): BridgeFee[] {
  if (gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain)) {
    return gravityBridgeTransferer.getFees(fromChain, token, tokenPrice);
  }
  return [];
}

export default {
  transfer,
  needBridgeFee,
  getFees
};
