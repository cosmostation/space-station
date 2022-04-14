import { SupportedChain, SupportedCosmosChain, BroadcastSource } from 'types';

const nameMap: Record<SupportedChain, string> = {
  [SupportedChain.Eth]: 'Ethereum',
  [SupportedChain.GravityBridge]: 'Gravity Bridge',
  [SupportedChain.Osmosis]: 'Osmosis',
  [SupportedChain.Stargaze]: 'Stargaze',
  [SupportedChain.Cosmos]: 'Cosmos',
  [SupportedChain.Axelar]: 'Axelar',
  [SupportedChain.Terra]: 'Terra',
  [SupportedChain.Cheqd]: 'cheqd',
  [SupportedChain.Iris]: 'Iris',
  [SupportedChain.Chihuahua]: 'Chihuahua'
};

const txLinkMap: Record<SupportedChain, string> = {
  [SupportedChain.Eth]: 'https://etherscan.io/tx',
  [SupportedChain.GravityBridge]: 'https://www.mintscan.io/gravity-bridge/txs',
  [SupportedChain.Osmosis]: 'https://www.mintscan.io/osmosis/txs',
  [SupportedChain.Stargaze]: 'https://www.mintscan.io/stargaze/txs',
  [SupportedChain.Cosmos]: 'https://www.mintscan.io/cosmos/txs',
  [SupportedChain.Axelar]: 'https://www.mintscan.io/axelar/txs',
  [SupportedChain.Terra]: 'https://finder.terra.money/mainnet/tx',
  [SupportedChain.Cheqd]: 'https://explorer.cheqd.io/transactions',
  [SupportedChain.Iris]: 'https://www.mintscan.io/iris/txs',
  [SupportedChain.Chihuahua]: 'https://www.mintscan.io/chihuahua/txs'
};

const accountLinkMap: Record<SupportedChain, string> = {
  [SupportedChain.Eth]: 'https://etherscan.io/tx',
  [SupportedChain.GravityBridge]: 'https://www.mintscan.io/gravity-bridge/account',
  [SupportedChain.Osmosis]: 'https://www.mintscan.io/osmosis/account',
  [SupportedChain.Stargaze]: 'https://www.mintscan.io/stargaze/account',
  [SupportedChain.Cosmos]: 'https://www.mintscan.io/cosmos/account',
  [SupportedChain.Cheqd]: 'https://explorer.cheqd.io/accounts',
  [SupportedChain.Iris]: 'https://www.mintscan.io/iris/account',
  [SupportedChain.Chihuahua]: 'https://www.mintscan.io/chihuahua/account',
  [SupportedChain.Axelar]: 'https://www.mintscan.io/axelar/account',
  [SupportedChain.Terra]: 'https://finder.terra.money/mainnet/address'
};

const broadcastSourceMap: Record<SupportedCosmosChain, BroadcastSource> = {
  [SupportedChain.GravityBridge]: BroadcastSource.Lcd,
  [SupportedChain.Osmosis]: BroadcastSource.Lcd,
  [SupportedChain.Stargaze]: BroadcastSource.Lcd,
  [SupportedChain.Cosmos]: BroadcastSource.Lcd,
  [SupportedChain.Cheqd]: BroadcastSource.Wallet,
  [SupportedChain.Iris]: BroadcastSource.Lcd,
  [SupportedChain.Chihuahua]: BroadcastSource.Lcd,
  [SupportedChain.Axelar]: BroadcastSource.Lcd,
  [SupportedChain.Terra]: BroadcastSource.Wallet
};

function getChainName (chain: SupportedChain): string {
  return nameMap[chain];
}

function getTxLink (chain: SupportedChain): string {
  return txLinkMap[chain];
}

function getAccountLink (chain: SupportedChain): string {
  return accountLinkMap[chain];
}

function getBroadcastSource (chain: SupportedCosmosChain): BroadcastSource {
  return broadcastSourceMap[chain];
}

export default {
  getChainName,
  getTxLink,
  getAccountLink,
  getBroadcastSource
};
