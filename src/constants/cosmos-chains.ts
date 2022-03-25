import { CosmosChainInfo, SupportedCosmosChain } from 'types';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
  bech32Prefix: 'gravity',
  path: [44, 118, 5, 0, 3],
  denom: 'ugraviton',
  ibcChannels: {
    [SupportedCosmosChain.Osmosis]: 'channel-10',
    [SupportedCosmosChain.Stargaze]: 'channel-7',
    [SupportedCosmosChain.Cosmos]: 'channel-17'
  }
};

const cosmos: CosmosChainInfo = {
  chainId: 'cosmoshub-4',
  lcd: 'https://lcd-cosmos.cosmostation.io',
  bech32Prefix: 'cosmos',
  path: [44, 118, 5, 0, 3],
  denom: 'uatom',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-281'
  }
};

const osmosis: CosmosChainInfo = {
  chainId: 'osmosis-1',
  lcd: 'https://lcd-osmosis-app-and.cosmostation.io',
  bech32Prefix: 'osmo',
  path: [44, 118, 5, 0, 3],
  denom: 'uosmo',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-144'
  }
};

const stargaze: CosmosChainInfo = {
  chainId: 'stargaze-1',
  lcd: 'https://lcd-stargaze.cosmostation.io',
  bech32Prefix: 'star',
  path: [44, 118, 5, 0, 3],
  denom: 'ustars',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-6'
  }
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  cosmos,
  osmosis,
  stargaze
};

export default chainInfoMap;
