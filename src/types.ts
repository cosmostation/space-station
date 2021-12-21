import { BroadcastMode } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ChainInfo } from '@keplr-wallet/types';
import { cosmos } from 'constants/gravity-main';
import { EventEmitter } from 'events';
import Long from 'long';
import Web3Manager from 'services/web3-manager';
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EthAccount extends Account {}

export type EthWallet = EthWalletManager;
export enum EthWalletType {
  MetaMask = 'MetaMask'
}

export type AccountChangeEventHandler = (accounts: string[]) => void;
export type NetworkChangeEventHandler = (data: any) => void;

export interface EthWalletManager {
  installed: Promise<boolean>;
  web3: Web3Manager | null;
  init: () => Promise<void>;
  checkConnection: (chainId: string) => Promise<EthAccount | null>;
  connect: (chainId: string) => Promise<EthAccount | null>;
  getAccount: () => Promise<EthAccount>;
  getCurrentChainId: () => Promise<string>;
  updateNetwork: (chainId: string) => Promise<boolean>;
  registerAccountChangeHandler: (handler: AccountChangeEventHandler) => void;
  registerNetworkChangeHandler: (handler: NetworkChangeEventHandler) => void;
}

export interface IMetaMaskWallet {
  walletType: EthWalletType,
  hasPermission: () => Promise<boolean>;
  requestPermission: () => Promise<boolean>;
  getChainId: () => Promise<string>;
  changeChainId: (chainId: string) => Promise<void>;
  getAccountInfo: () => Promise<string>;
  getEthBalance: (address: string) => Promise<number>;
  onAccountChange: (handler: AccountChangeEventHandler) => Promise<void>;
  onNetworkChange: (handler: NetworkChangeEventHandler) => Promise<void>;
  getMetaMaskProvider: () => Promise<MetaMaskProvider>;
}

export interface MetaMaskProvider extends AbstractProvider, EventEmitter {
  isMetaMask?: boolean;
  request (args: RequestArguments): Promise<any>;
}

export type DirectSignDoc = {
  chainId: string;
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  accountNumber: Long;
}

export interface IKeplrWallet {
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

export class NoEthWalletError extends Error {}
export class MetaMaskPendingRequestError extends Error {}
