import cosmosToGravityBridgeTokens from 'constants/tokens/cosmos-gb-tokens.json';
import gravityBridgeToEthTokens from 'constants/tokens/gb-eth-tokens.json';
import gravityBridgeToIrisTokens from 'constants/tokens/gb-iris-tokens.json';
import gravityBridgeToOsmosisTokens from 'constants/tokens/gb-osmosis-tokens.json';
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
    [SupportedChain.Eth]: gravityBridgeToEthTokens,
    [SupportedChain.Osmosis]: gravityBridgeToOsmosisTokens,
    [SupportedChain.Stargaze]: gravityBridgeToStargazeTokens,
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
  [SupportedChain.Iris]: {
    [SupportedChain.GravityBridge]: irisToGravityBridgeTokens
  },
  [SupportedChain.Eth]: {}
};
