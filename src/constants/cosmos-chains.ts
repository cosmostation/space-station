import { CosmosChainInfo, SupportedCosmosChain } from 'types';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
  denom: 'ugraviton',
  ibcChannels: {
    [SupportedCosmosChain.Osmosis]: 'channel-10',
    [SupportedCosmosChain.Stargaze]: 'channel-7',
    [SupportedCosmosChain.Cosmos]: 'channel-17',
    [SupportedCosmosChain.Cheqd]: 'channel-43'
  }
};

const cosmos: CosmosChainInfo = {
  chainId: 'cosmoshub-4',
  lcd: 'https://lcd-cosmos.cosmostation.io',
  denom: 'uatom',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-281'
  }
};

const osmosis: CosmosChainInfo = {
  chainId: 'osmosis-1',
  lcd: 'https://lcd-osmosis-app-and.cosmostation.io',
  denom: 'uosmo',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-144'
  }
};

const stargaze: CosmosChainInfo = {
  chainId: 'stargaze-1',
  lcd: 'https://lcd-stargaze.cosmostation.io',
  denom: 'ustars',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-6'
  }
};

const cheqd: CosmosChainInfo = {
  chainId: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.net',
  denom: 'ncheq',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-2'
  }
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  cosmos,
  osmosis,
  stargaze,
  cheqd
};

export default chainInfoMap;
