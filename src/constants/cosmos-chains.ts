import { CosmosChainInfo, SupportedCosmosChain } from 'types';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
  bech32Prefix: 'gravity',
  path: [44, 60, 0, 0, 0],
  denom: 'ugraviton',
  ibcChannels: {
    [SupportedCosmosChain.Osmosis]: 'channel-10',
    [SupportedCosmosChain.Stargaze]: 'channel-7',
    [SupportedCosmosChain.Cosmos]: 'channel-17',
    [SupportedCosmosChain.Cheqd]: 'channel-43',
    [SupportedCosmosChain.Iris]: 'channel-47'
  }
};

const cosmos: CosmosChainInfo = {
  chainId: 'cosmoshub-4',
  lcd: 'https://lcd-cosmos.cosmostation.io',
  bech32Prefix: 'cosmos',
  path: [44, 118, 0, 0, 0],
  denom: 'uatom',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-281'
  }
};

const osmosis: CosmosChainInfo = {
  chainId: 'osmosis-1',
  lcd: 'https://lcd-osmosis-app-and.cosmostation.io',
  bech32Prefix: 'osmo',
  path: [44, 118, 0, 0, 0],
  denom: 'uosmo',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-144'
  }
};

const stargaze: CosmosChainInfo = {
  chainId: 'stargaze-1',
  lcd: 'https://lcd-stargaze.cosmostation.io',
  bech32Prefix: 'star',
  path: [44, 118, 0, 0, 0],
  denom: 'ustars',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-6'
  }
};

const cheqd: CosmosChainInfo = {
  chainId: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.net',
  bech32Prefix: 'cheqd',
  path: [44, 118, 0, 0, 0],
  denom: 'ncheq',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-2'
  }
};

const iris: CosmosChainInfo = {
  chainId: 'irishub-1',
  lcd: 'https://lcd-iris.cosmostation.io',
  bech32Prefix: 'iris',
  path: [44, 118, 0, 0, 0],
  denom: 'uiris',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-29'
  }
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  cosmos,
  osmosis,
  stargaze,
  cheqd,
  iris
};

export default chainInfoMap;
