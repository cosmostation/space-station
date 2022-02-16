import { Fee, IToken, SupportedChain } from 'types';

import gravityBridgeTransferer from './gravity-bridge-transferer';

async function transfer (
  fromChain: SupportedChain,
  toChain: SupportedChain,
  fromAddress: string,
  toAddress: string,
  token: IToken,
  amount: string,
  fee?: Fee
): Promise<string> {
  if (gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain, token)) {
    if (token.erc20) {
      return gravityBridgeTransferer.transfer(fromChain, toChain, fromAddress, toAddress, token.erc20, amount, fee);
    }
  }
  throw new Error('Unsupported Transfer!');
}

function needBridgeFee (fromChain: SupportedChain, toChain: SupportedChain, token: IToken): boolean {
  return gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain, token) && fromChain === SupportedChain.GravityBridge;
}

function getFees (fromChain: SupportedChain, toChain: SupportedChain, token: IToken, tokenPrice: string): Fee[] {
  if (gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain, token)) {
    if (token.erc20) {
      return gravityBridgeTransferer.getFees(fromChain, token.erc20, tokenPrice);
    }
  }
  throw new Error('Unsupported Transfer!');
}

export default {
  transfer,
  needBridgeFee,
  getFees
};
