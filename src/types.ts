import { BroadcastMode } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ChainInfo } from '@keplr-wallet/types';
import { cosmos } from 'constants/gravity-main';
import { EventEmitter } from 'events';
import Long from 'long';
import { AbstractProvider, RequestArguments } from 'web3-core';
import { ContractSendMethod } from 'web3-eth-contract';

export enum SupportedNetwork {
  Eth = 'eth',
  GravityBridge = 'gravity-bridge'
}

export interface IERC20Token {
  contract?: (string | null);
  amount?: (string | null);
}

export interface Account {
  address: string;
  balance: string;
}

export interface GravityBridgeAccount extends Account {
  pubKey: Uint8Array;
}

export interface EthAccount extends Account {}

export enum EthWalletType {
  MetaMask = 'metaMask'
}

export type ConnectEventHandler = (data: any) => void;
export type AccountChangeEventHandler = (data: any) => void;
export type NetworkChangeEventHandler = (data: any) => void;
export type DisconnectEventHandler = (data: any) => void;

export interface IEthWallet {
  isConnected: () => Promise<boolean>;
  connect: (chainId: string) => Promise<string>;
  getChainId: () => Promise<string>;
  changeChainId: (chainId: string) => Promise<void>;
  getAccountInfo: () => Promise<string>;
  getEthBalance: (address: string) => Promise<number>;
  onConnect?: (handler: ConnectEventHandler) => any;
  onAccountChange?: (handler: AccountChangeEventHandler) => any;
  onNetworkChange?: (handler: NetworkChangeEventHandler) => any;
  onDisconnect?: (handler: DisconnectEventHandler) => any;
}

export interface MetaMaskProvider extends AbstractProvider, EventEmitter {
  isMetaMask?: boolean;
  request (args: RequestArguments): Promise<any>;
}

export interface MetaMaskWallet extends IEthWallet {
  getMetaMaskProvider: () => Promise<MetaMaskProvider>;
}

export type DirectSignDoc = {
  chainId: string;
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  accountNumber: Long;
}

export interface IGravityBridgeWallet {
  connect: (chainId: string) => Promise<void>;
  getAccount: (chainId: string) => Promise<GravityBridgeAccount>;
  sign: (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc) => Promise<DirectSignResponse>;
  sendTx: (chainId: string, txBytes: Uint8Array, mode: BroadcastMode) => Promise<Uint8Array>;
  suggestExperimentalChain: (chainInfo: ChainInfo) => Promise<void>;
  onAccountChange?: (handler: AccountChangeEventHandler) => any;
  onNetworkChange?: (handler: NetworkChangeEventHandler) => any;
}

export type erc20ContractMethods = {
  balanceOf: (ethAddress: string) => ContractSendMethod;
  name: () => ContractSendMethod;
  decimals: () => ContractSendMethod;
  symbol: () => ContractSendMethod;
  approve: (spender: string, amount: string) => ContractSendMethod;
}

export type gravityBridgetContractMethods = {
  sendToCosmos: (erc20Address: string, gravityBridgeAddress: string, amount: string) => ContractSendMethod;
  deployERC20: (cosmosDenom: string, tokenName: string, symbol: string, decimal: number) => ContractSendMethod;
}
