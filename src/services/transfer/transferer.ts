import { IERC20Token, SupportedChain } from 'types';

import gravityBridgeTransferer from './gravity-bridge-transferer';

async function transfer (
  fromChain: SupportedChain,
  toChain: SupportedChain,
  fromAddress: string,
  toAddress: string,
  token: IERC20Token,
  amount: string,
  fee: string
): Promise<string> {
  if (fromChain === SupportedChain.GravityBridge || toChain === SupportedChain.GravityBridge) {
    return gravityBridgeTransferer.transfer(fromChain, toChain, fromAddress, toAddress, token, amount, fee);
  }
  throw new Error('Unsupported Transfer!');
}

export default {
  transfer
};
