import { TokenInfo } from '@uniswap/token-lists';
import dotenv from 'dotenv';
import web3Service from 'services/web3-service';

dotenv.config();

const GRAVITY_BRIDGE_CONTRACT_ADDRESS = process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  ? process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  : '';

type sendToCosmosResponse = {
  transactionHash: string
};

function isSendCosmosResponse(response: unknown): response is sendToCosmosResponse {
  return (response as sendToCosmosResponse).transactionHash !== undefined;
}

async function transferToCosmos (fromAddress: string, tokenInfo: TokenInfo, amount: string): Promise<string> {
  await web3Service.approve(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  const response = await web3Service.sendToCosmos(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  if (!isSendCosmosResponse(response)) {
    throw new Error('No tx hash');
  }
  return response.transactionHash;
}

export default {
  transferToCosmos
}
