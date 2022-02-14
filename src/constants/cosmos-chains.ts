import { SupportedCosmosChain, CosmosChainInfo } from 'types';

const gravityBridge: CosmosChainInfo = {
  chainId: 'gravity-bridge-3',
  lcd: 'https://lcd-gravity-bridge.cosmostation.io',
  denom: 'ugraviton'
};

const osmosis: CosmosChainInfo = {
  chainId: 'osmosis-1',
  lcd: 'https://lcd-osmosis-app.cosmostation.io',
  denom: 'uosmo'
};

const chainInfoMap: Record<SupportedCosmosChain, CosmosChainInfo> = {
  gravityBridge,
  osmosis
};

export default chainInfoMap;
