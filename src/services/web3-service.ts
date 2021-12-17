import erc20Abi from 'constants/erc20-abi.json';
import gravityBridgeAbi from 'constants/gravity-bridge-abi.json';
import dotenv from 'dotenv';
import _ from 'lodash';
import { erc20ContractMethods, gravityBridgetContractMethods } from 'types';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';
import { Contract, ContractSendMethod } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

import metaMaskService from './meta-mask-wallet';

dotenv.config();

const GRAVITY_BRIDGE_CONTRACT_ADDRESS = _.isString(process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS)
  ? process.env.REACT_APP_GRAVITY_BRIDGE_CONTRACT_ADDRESS
  : '';

const _web3 = new Promise<Web3>((resolve, reject) => {
  metaMaskService.getMetaMaskProvider()
    .then((metaMaskProvider) => {
      const web3 = new Web3(metaMaskProvider as AbstractProvider);
      resolve(web3);
    }).catch(reject);
});

async function getBalance (address: string) {
  const web3 = await _web3;
  return web3.eth.getBalance(address);
}

async function getContract (abi: AbiItem[], contractAddress: string): Promise<Contract> {
  const web3 = await _web3;
  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
}

async function sendToCosmos (fromAddress: string, erc20Address: string, gravityBridgeAddress: string, amount: string): Promise<unknown> {
  const contract = await getContract(gravityBridgeAbi as AbiItem[], GRAVITY_BRIDGE_CONTRACT_ADDRESS);
  const method = (contract.methods as gravityBridgetContractMethods).sendToCosmos(erc20Address, gravityBridgeAddress, amount);
  return method.send({ from: fromAddress });
}

async function deployERC20 (fromAddress: string, cosmosDenom: string, tokenName: string, symbol: string, decimal: number): Promise<unknown> {
  const contract = await getContract(gravityBridgeAbi as AbiItem[], GRAVITY_BRIDGE_CONTRACT_ADDRESS);
  const method = (contract.methods as gravityBridgetContractMethods).deployERC20(cosmosDenom, tokenName, symbol, decimal);
  return method.send({ from: fromAddress });
}

async function getERC20Balance (erc20Address: string, ethAddress: string): Promise<string> {
  const contract = await getContract(erc20Abi as AbiItem[], erc20Address);
  return (contract.methods as erc20ContractMethods).balanceOf(ethAddress).call();
}

async function getERC20Info (erc20Address: string): Promise<any> {
  const contract = await getContract(erc20Abi as AbiItem[], erc20Address);
  return contract;
}

async function approve (fromAddress: string, erc20Address: string, spenderAddress: string, amount: string): Promise<unknown> {
  const contract = await getContract(erc20Abi as AbiItem[], erc20Address);
  const method = (contract.methods as erc20ContractMethods).approve(spenderAddress, amount);
  return method.send({ from: fromAddress });
}

export default {
  getBalance,
  getContract,
  sendToCosmos,
  getERC20Balance,
  deployERC20,
  getERC20Info,
  approve,
};
