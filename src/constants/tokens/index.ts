import cheqdToGravityBridgeTokens from 'constants/tokens/cheqd-gb-tokens.js';
import cosmosToGravityBridgeTokens from 'constants/tokens/cosmos-gb-tokens.json';
import gravityBridgeToCheqdTokens from 'constants/tokens/gb-cheqd-tokens.js';
import gravityBridgeToEthTokens from 'constants/tokens/gb-eth-tokens';
import gravityBridgeToIrisTokens from 'constants/tokens/gb-iris-tokens.json';
import gravityBridgeToOsmosisTokens from 'constants/tokens/gb-osmosis-tokens.json';
import gravityBridgeToCosmosTokens from 'constants/tokens/gb-cosmos-tokens.json';
import gravityBridgeToStargazeTokens from 'constants/tokens/gb-stargaze-tokens.json';
import irisToGravityBridgeTokens from 'constants/tokens/iris-gb-tokens.json';
import osmosisToGravityBridgeTokens from 'constants/tokens/osmosis-gb-tokens.json';
import stargazeToGravityBridgeTokens from 'constants/tokens/stargaze-gb-tokens.json';
import { SupportedChain } from 'types';

export type CosmosTokenWithoutChainId = {
  name: string;
  denom: string;
  decimals: number;
  symbol: string;
  logoURI?: string;
  priceDenom?: string;
}

export const ibcTokenFromToMap: Record<SupportedChain, { [key in SupportedChain]?: Record<string, CosmosTokenWithoutChainId> }> = {
  [SupportedChain.GravityBridge]: {
    [SupportedChain.Osmosis]: gravityBridgeToOsmosisTokens,
    [SupportedChain.Cosmos]: gravityBridgeToCosmosTokens,
    [SupportedChain.Stargaze]: gravityBridgeToStargazeTokens,
    [SupportedChain.Cheqd]: gravityBridgeToCheqdTokens,
    [SupportedChain.Iris]: gravityBridgeToIrisTokens
  },
  [SupportedChain.Stargaze]: {
    [SupportedChain.GravityBridge]: stargazeToGravityBridgeTokens
  },
  [SupportedChain.Osmosis]: {
    [SupportedChain.GravityBridge]: osmosisToGravityBridgeTokens
  },
  [SupportedChain.Cosmos]: {
    [SupportedChain.GravityBridge]: cosmosToGravityBridgeTokens
  },
  [SupportedChain.Cheqd]: {
    [SupportedChain.GravityBridge]: cheqdToGravityBridgeTokens
  },
  [SupportedChain.Iris]: {
    [SupportedChain.GravityBridge]: irisToGravityBridgeTokens
  },
  [SupportedChain.Eth]: {}
};

export const gravityBridgeTokenFromToMap: Record<SupportedChain, { [key in SupportedChain]?: Record<string, CosmosTokenWithoutChainId> }> = {
  [SupportedChain.GravityBridge]: {
    [SupportedChain.Eth]: gravityBridgeToEthTokens
  },
  [SupportedChain.Eth]: {
    [SupportedChain.GravityBridge]: gravityBridgeToEthTokens,
    [SupportedChain.Osmosis]: gravityBridgeToEthTokens
  },
  [SupportedChain.Stargaze]: {},
  [SupportedChain.Osmosis]: {},
  [SupportedChain.Cosmos]: {},
  [SupportedChain.Cheqd]: {},
  [SupportedChain.Iris]: {}
};
