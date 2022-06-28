import { CosmosChainInfo, SupportedCosmosChain } from 'types';
import _ from 'lodash';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
  bech32Prefix: 'gravity',
  path: [44, 118, 0, 0, 0],
  denom: 'ugraviton',
  ibcChannels: {
    [SupportedCosmosChain.Osmosis]: 'channel-10',
    [SupportedCosmosChain.Stargaze]: 'channel-7',
    [SupportedCosmosChain.Cosmos]: 'channel-17',
    [SupportedCosmosChain.Cheqd]: 'channel-43',
    [SupportedCosmosChain.Iris]: 'channel-47',
    [SupportedCosmosChain.Chihuahua]: 'channel-34',
    [SupportedCosmosChain.Nyx]: 'channel-18',
    [SupportedCosmosChain.Crescent]: 'channel-62',
    [SupportedCosmosChain.Secret]: 'channel-79'
  },
  supportZeroFee: true
};

const cosmos: CosmosChainInfo = {
  chainId: 'cosmoshub-4',
  lcd: 'https://lcd-cosmos.cosmostation.io',
  bech32Prefix: 'cosmos',
  path: [44, 118, 0, 0, 0],
  denom: 'uatom',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-281'
  },
  supportZeroFee: false
};

const osmosis: CosmosChainInfo = {
  chainId: 'osmosis-1',
  lcd: 'https://lcd-osmosis-app-and.cosmostation.io',
  bech32Prefix: 'osmo',
  path: [44, 118, 0, 0, 0],
  denom: 'uosmo',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-144'
  },
  supportZeroFee: true
};

const stargaze: CosmosChainInfo = {
  chainId: 'stargaze-1',
  lcd: 'https://lcd-stargaze.cosmostation.io',
  bech32Prefix: 'star',
  path: [44, 118, 0, 0, 0],
  denom: 'ustars',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-6'
  },
  supportZeroFee: false
};

const cheqd: CosmosChainInfo = {
  chainId: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.net',
  bech32Prefix: 'cheqd',
  path: [44, 118, 0, 0, 0],
  denom: 'ncheq',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-2'
  },
  supportZeroFee: false
};

const iris: CosmosChainInfo = {
  chainId: 'irishub-1',
  lcd: 'https://lcd-iris.cosmostation.io',
  bech32Prefix: 'iris',
  path: [44, 118, 0, 0, 0],
  denom: 'uiris',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-29'
  },
  supportZeroFee: false
};

const chihuahua: CosmosChainInfo = {
  chainId: 'chihuahua-1',
  lcd: 'https://lcd-chihuahua.cosmostation.io',
  bech32Prefix: 'chihuahua',
  path: [44, 118, 0, 0, 0],
  denom: 'uhuahua',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-15'
  },
  supportZeroFee: false
};

const nyx: CosmosChainInfo = {
  chainId: 'nyx',
  lcd: 'https://lcd-nym.cosmostation.io',
  bech32Prefix: 'n',
  path: [44, 118, 0, 0, 0],
  denom: 'unyx',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-0'
  },
  supportZeroFee: false
};
const crescent: CosmosChainInfo = {
  chainId: 'crescent-1',
  lcd: 'https://lcd-crescent.cosmostation.io/',
  bech32Prefix: 'cre',
  path: [44, 118, 0, 0, 0],
  denom: 'ucre',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-2'
  },
  supportZeroFee: false
};
const secret: CosmosChainInfo = {
  chainId: 'secret-4',
  lcd: 'https://api.scrt.network',
  bech32Prefix: 'secret',
  path: [44, 529, 0, 0, 0],
  denom: 'uscrt',
  ibcChannels: {
    [SupportedCosmosChain.GravityBridge]: 'channel-79'
  },
  supportZeroFee: false
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  cosmos,
  osmosis,
  stargaze,
  cheqd,
  iris,
  chihuahua,
  nyx,
  crescent,
  secret
};

export function findChainInfoByChainId (chainId: string): CosmosChainInfo | undefined {
  return _.find(_.values(chainInfoMap), { chainId });
}

export default chainInfoMap;
