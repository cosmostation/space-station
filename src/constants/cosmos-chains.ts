import { CosmosChainInfo, SupportedCosmosChain } from 'types';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
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

const axelar: CosmosChainInfo = {
  chainId: 'axelar-dojo-1',
  lcd: 'https://lcd-axelar.cosmostation.io',
  denom: 'uaxl',
  ibcChannels: {
    [SupportedCosmosChain.Terra]: 'channel-0'
  }
};

const terra: CosmosChainInfo = {
  chainId: 'columbus-5',
  lcd: 'https://lcd.terra.dev',
  denom: 'uluna',
  ibcChannels: {
    [SupportedCosmosChain.Axelar]: 'channel-19'
  }
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  cosmos,
  osmosis,
  stargaze,
  axelar,
  terra
};

export default chainInfoMap;
