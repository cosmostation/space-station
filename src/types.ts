import { AminoSignResponse, StdSignDoc, AminoMsg } from '@cosmjs/amino';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { cosmos, google } from 'constants/cosmos-v0.44.5';
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
  GravityBridge = 'gravityBridge',
  Osmosis = 'osmosis',
  Stargaze = 'stargaze',
  Cosmos = 'cosmos',
  Cheqd = 'cheqd',
  Iris = 'iris',
  Chihuahua = 'chihuahua',
  Nyx = 'nyx',
  Crescent = 'crescent',
  Secret = 'secret'
}

export enum SupportedEthChain {
  Eth = 'eth',
}

export enum SupportedCosmosChain {
  GravityBridge = 'gravityBridge',
  Osmosis = 'osmosis',
  Stargaze = 'stargaze',
  Cosmos = 'cosmos',
  Cheqd = 'cheqd',
  Iris = 'iris',
  Chihuahua = 'chihuahua',
  Nyx = 'nyx',
  Crescent = 'crescent',
  Secret = 'secret'
}

export interface IERC20Token {
  readonly chainId: string;
  readonly address: string;
  readonly name?: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  balance?: string;
  priceDenom?: string;
}

export interface ICosmosToken {
  readonly chainId: string;
  readonly name?: string;
  readonly denom: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  balance?: string;
  priceDenom?: string;
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

export enum EthWalletEvent {
  AccountChange,
  NetworkChange
}

export type AccountChangeEventHandler = (accounts: string[]) => void;
export type NetworkChangeEventHandler = (data: any) => void;

export interface IEthWalletManager {
  init (ethChain: SupportedEthChain): Promise<void>;
  connect (chain: SupportedEthChain, walletType: EthWalletType): Promise<void>;
  disconnect: (chain: SupportedEthChain) => Promise<void>;
  getERC20Info (chain: SupportedEthChain, contractAddress: string): Promise<IERC20Token | null>;
  updateAccount (chain: SupportedEthChain): Promise<void>;
  getERC20Balance (chain: SupportedEthChain, contractAddress: string, ownerAddress: string): Promise<string>;
  getWeb3 (chain: SupportedEthChain): Promise<Web3Manager | null>;
}

export interface IEthWallet {
  type: EthWalletType;
  connect: (chain: SupportedEthChain) => Promise<void>;
  checkConnection: (chain: SupportedEthChain) => Promise<boolean>;
  getAccount: () => Promise<IEthAccount>;
  updateNetwork: (chain: SupportedEthChain) => Promise<boolean>;
  getWeb3: () => Promise<Web3Manager | null>;
  isSupportMultiConnection: () => boolean;
  registerAccountChangeHandler: (handler: AccountChangeEventHandler) => void;
  registerNetworkChangeHandler: (handler: NetworkChangeEventHandler) => void;
  unregisterAccountChangeHandler: () => void;
  unregisterNetworkChangeHandler: () => void;
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
  bech32Prefix: string;
  denom: string;
  path: number[];
  ibcChannels: { [key in SupportedCosmosChain]?: string };
  supportZeroFee: boolean;
}

export enum CosmosWalletType {
  Keplr = 'Keplr',
  Ledger = 'Ledger'
}

export type DirectSignDoc = {
  chainId: string;
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  accountNumber: Long;
}

export enum BroadcastSource {
  Lcd,
  Wallet
}

export interface ICosmosWalletManager {
  init (): Promise<void>;
  connect (chain: SupportedCosmosChain, walletType: CosmosWalletType): Promise<void>;
  disconnect: (chain: SupportedCosmosChain) => Promise<void>;
  canSignDirect: (chain: SupportedCosmosChain) => Promise<boolean>;
  canSignAmino: (chain: SupportedCosmosChain) => Promise<boolean>;
  signDirect (chain: SupportedCosmosChain, messages: google.protobuf.IAny[], feeAmount: string, gasLimit: number, memo: string): Promise<DirectSignResponse>;
  signAmino (chain: SupportedCosmosChain, messages: AminoMsg[], feeAmount: string, gasLimit: number, memo: string): Promise<AminoSignResponse>;
  broadcast (chain: SupportedCosmosChain, txBytes: Uint8Array, broadCastMode: cosmos.tx.v1beta1.BroadcastMode, broadCastSource: BroadcastSource): Promise<string>;
}

export interface ICosmosWallet {
  type: CosmosWalletType;
  keepConnection: boolean;
  isSupportDirectSign(chainInfo: CosmosChainInfo): Promise<boolean>;
  isSupportAminoSign(chainInfo: CosmosChainInfo): Promise<boolean>;
  isSupportBroadcast(chainInfo: CosmosChainInfo): Promise<boolean>;
  connect: (chainInfo: CosmosChainInfo) => Promise<void>;
  getAccount: (chainInfo: CosmosChainInfo) => Promise<ICosmosSdkAccount>;
  signDirect: (chainInfo: CosmosChainInfo, signer: string, signDoc: cosmos.tx.v1beta1.SignDoc) => Promise<DirectSignResponse>;
  signAmino: (chainInfo: CosmosChainInfo, signer: string, signDoc: StdSignDoc) => Promise<AminoSignResponse>;
  sendTx: (chainId: string, txBytes: Uint8Array, mode: cosmos.tx.v1beta1.BroadcastMode) => Promise<Uint8Array>;
  addChain: (chainId: string) => Promise<void>;
  registerAccountChangeHandler: (handler: AccountChangeEventHandler) => void;
  registerNetworkChangeHandler: (handler: NetworkChangeEventHandler) => void;
  unregisterAccountChangeHandler: () => void;
  unregisterNetworkChangeHandler: () => void;
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

export interface BridgeFee {
  id: number;
  label: string;
  denom: string;
  amount: string;
  amountInCurrency: string;
}

export interface ITransfer {
  fromChain: SupportedChain,
  toChain: SupportedChain,
  token: IToken,
  fromAddress: string,
  toAddress: string,
  amount: string,
  feeAmount?: string,
  memo?: string,
  bridgeFee?: BridgeFee
}

export type ChainViewInfo = {
  chain: SupportedChain
  name: string
  image: string
  supportedWallets: Array<EthWalletType | CosmosWalletType>
  toChains: SupportedChain[]
  head: number
  tail: number
}

export type WalletType = CosmosWalletType | EthWalletType;
