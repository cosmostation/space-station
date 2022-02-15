import { BroadcastMode } from '@cosmjs/launchpad';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { cosmos, google } from 'constants/gravity-bridge-v1.2.1';
import { EventEmitter } from 'events';
import Long from 'long';
import Web3Manager from 'services/eth-wallet/web3-manager';
import { AbstractProvider, RequestArguments } from 'web3-core';
import { ContractSendMethod } from 'web3-eth-contract';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light'
}

export enum SupportedChain {
  Eth = 'eth',
  Goerli = 'goerli',
  GravityBridge = 'gravityBridge',
  Osmosis = 'osmosis'
}

export enum SupportedEthChain {
  Eth = 'eth',
  Goerli = 'goerli'
}

export enum SupportedCosmosChain {
  GravityBridge = 'gravityBridge',
  Osmosis = 'osmosis'
}

export interface IERC20Token {
  readonly chainId: string;
  readonly address: string;
  readonly name?: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
}

export interface ICosmosToken {
  readonly chainId: string;
  readonly denom: string;
  readonly name?: string;
  readonly decimals: number;
  readonly logoURI?: string;
  readonly isIbc?: boolean;
  readonly isErc20?: boolean;
}

export type TokenInfo = IERC20Token | ICosmosToken;
export interface IToken {
  isErc20: boolean;
  isCosmos: boolean;
  erc20?: IERC20Token;
  cosmos?: ICosmosToken;
}

export interface IAccount {
  address: string;
  balance: string;
}

export interface ICosmosSdkAccount extends IAccount {
  pubKey: Uint8Array;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEthAccount extends IAccount {}
export type SupportedAccount = ICosmosSdkAccount | IEthAccount;
export enum EthWalletType {
  MetaMask = 'MetaMask'
}

export type AccountChangeEventHandler = (accounts: string[]) => void;
export type NetworkChangeEventHandler = (data: any) => void;

export interface IEthWalletManager {
  init (ethChain: SupportedEthChain): Promise<void>;
  connect (chain: SupportedEthChain, walletType: EthWalletType): Promise<void>;
  getERC20Info (chain: SupportedEthChain, contractAddress: string): Promise<IERC20Token | null>;
  updateAccount (chain: SupportedEthChain): Promise<void>;
  getERC20Balance (chain: SupportedEthChain, contractAddress: string, ownerAddress: string): Promise<string>;
  getWeb3(chain: SupportedEthChain): Promise<Web3Manager | null>;
}

export interface IEthWallet {
  connect: (chain: SupportedEthChain) => Promise<void>;
  checkConnection: (chain: SupportedEthChain) => Promise<boolean>;
  getAccount: () => Promise<IEthAccount>;
  updateNetwork: (chain: SupportedEthChain) => Promise<boolean>;
  registerAccountChangeHandler: (handler: AccountChangeEventHandler) => void;
  registerNetworkChangeHandler: (handler: NetworkChangeEventHandler) => void;
  getWeb3: () => Promise<Web3Manager | null>;
  isSupportMultiConnection: () => boolean;
}

export interface MetaMaskProvider extends AbstractProvider, EventEmitter {
  isMetaMask?: boolean;
  request (args: RequestArguments): Promise<any>;
}

export type EthChainInfo = {
  chainId: string;
}

export type CosmosChainInfo = {
  chainId: string;
  lcd: string;
  denom: string;
}

export enum CosmosWalletType {
  Keplr = 'Keplr'
}

export type DirectSignDoc = {
  chainId: string;
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  accountNumber: Long;
}

export interface ICosmosWalletManager {
  init (): Promise<void>;
  connect (chain: SupportedCosmosChain, walletType: CosmosWalletType): Promise<void>;
  sign (chain: SupportedCosmosChain, messages: google.protobuf.IAny[]): Promise<DirectSignResponse>;
  broadcast (chain: SupportedCosmosChain, txBytes: Uint8Array, broadCastMode: cosmos.tx.v1beta1.BroadcastMode): Promise<string>;
}

export interface ICosmosWallet {
  connect: (chainId: string) => Promise<void>;
  getAccount: (chainId: string) => Promise<ICosmosSdkAccount>;
  sign: (chainId: string, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc) => Promise<DirectSignResponse>;
  sendTx: (chainId: string, txBytes: Uint8Array, mode: BroadcastMode) => Promise<Uint8Array>;
  addChain: (chainId: string) => Promise<void>;
  onAccountChange?: (handler: AccountChangeEventHandler) => any;
  onNetworkChange?: (handler: NetworkChangeEventHandler) => any;
}

export type Erc20ContractMethods = {
  balanceOf: (ethAddress: string) => ContractSendMethod;
  name: () => ContractSendMethod;
  decimals: () => ContractSendMethod;
  symbol: () => ContractSendMethod;
  approve: (spender: string, amount: string) => ContractSendMethod;
}

export type GravityBridgetContractMethods = {
  sendToCosmos: (erc20Address: string, gravityBridgeAddress: string, amount: string) => ContractSendMethod;
  deployERC20: (cosmosDenom: string, tokenName: string, symbol: string, decimal: number) => ContractSendMethod;
}

export class NoMetaMaskWalletError extends Error {}
export class MetaMaskPendingRequestError extends Error {}
export class NoKeplrWalletError extends Error {}

export interface Price {
  readonly currency: string;
  // eslint-disable-next-line camelcase
  readonly current_price: number;
}

export interface PriceInfo {
  denom: string;
  // eslint-disable-next-line camelcase
  last_updated: string;
  prices: Price[]
}

export interface Fee {
  id: number;
  label: string;
  denom: string;
  amount: string;
  amountInCurrency: string;
}
