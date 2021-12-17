import { TokenInfo } from '@uniswap/token-lists';
import dotenv from 'dotenv';
import _ from 'lodash';
import web3Service from 'services/web3-service';

dotenv.config();

type transferToCosmosResponse = {
  txHash: string;
}

const GRAVITY_BRIDGE_CONTRACT_ADDRESS = process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  ? process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  : '';

async function transferToCosmos (fromAddress: string, tokenInfo: TokenInfo, amount: string): Promise<transferToCosmosResponse> {
  await web3Service.approve(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount);
  return (await web3Service.sendToCosmos(fromAddress, tokenInfo.address, GRAVITY_BRIDGE_CONTRACT_ADDRESS, amount)) as transferToCosmosResponse;
}

export default {
  transferToCosmos
}
