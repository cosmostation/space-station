import erc20Abi from 'constants/erc20-abi.json';
import gravityBridgeAbi from 'constants/gravity-bridge-abi.json';
import dotenv from 'dotenv';
import { Erc20ContractMethods, GravityBridgetContractMethods, IERC20Token } from 'types';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

dotenv.config();

export default class Web3Manager {
  web3: Web3;

  constructor (provider: AbstractProvider) {
    this.web3 = new Web3(provider);
  }

  async getBalance (address: string): Promise<string> {
    return this.web3.eth.getBalance(address);
  }

  async sendToCosmos (contractAddress: string, fromAddress: string, erc20Address: string, gravityBridgeAddress: string, amount: string): Promise<Contract> {
    const contract = await this.getContract(gravityBridgeAbi as AbiItem[], contractAddress);
    const method = (contract.methods as GravityBridgetContractMethods).sendToCosmos(erc20Address, gravityBridgeAddress, amount);
    return method.send({ from: fromAddress });
  }

  async deployERC20 (contractAddress: string, fromAddress: string, cosmosDenom: string, tokenName: string, symbol: string, decimal: number): Promise<unknown> {
    const contract = await this.getContract(gravityBridgeAbi as AbiItem[], contractAddress);
    const method = (contract.methods as GravityBridgetContractMethods).deployERC20(cosmosDenom, tokenName, symbol, decimal);
    return method.send({ from: fromAddress });
  }

  async getERC20Balance (erc20Address: string, ethAddress: string): Promise<string> {
    const contract = await this.getContract(erc20Abi as AbiItem[], erc20Address);
    return (contract.methods as Erc20ContractMethods).balanceOf(ethAddress).call();
  }

  async getERC20Info (erc20Address: string): Promise<IERC20Token> {
    const contract = await this.getContract(erc20Abi as AbiItem[], erc20Address);
    const chainId = await this.web3.eth.net.getId();
    return convertERC20Info(chainId, erc20Address, contract);
  }

  async approve (fromAddress: string, erc20Address: string, spenderAddress: string, amount: string): Promise<Contract> {
    const contract = await this.getContract(erc20Abi as AbiItem[], erc20Address);
    const method = (contract.methods as Erc20ContractMethods).approve(spenderAddress, amount);
    return method.send({ from: fromAddress });
  }

  private async getContract (abi: AbiItem[], contractAddress: string): Promise<Contract> {
    return new this.web3.eth.Contract(abi, contractAddress);
  }
}

async function convertERC20Info (chainId: number, address: string, contract: Contract): Promise<IERC20Token> {
  const _chainId = chainId.toString(16);
  const name = await (contract.methods as Erc20ContractMethods).name().call();
  const symbol = await (contract.methods as Erc20ContractMethods).symbol().call();
  const decimals = await (contract.methods as Erc20ContractMethods).decimals().call();
  return { chainId: _chainId, name, symbol, decimals, address };
}
