import gravityBridgeToEthTokens from 'constants/tokens/gb-eth-tokens.json';
import gravityBridgeToOsmosisTokens from 'constants/tokens/gb-osmosis-tokens.json';
import gravityBridgeToStargazeTokens from 'constants/tokens/gb-stargaze-tokens.json';
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

export const ibcTokenFromToMap: { [key in SupportedChain]?: { [key in SupportedChain]?: Record<string, CosmosTokenWithoutChainId> } } = {
  [SupportedChain.GravityBridge]: {
    [SupportedChain.Eth]: gravityBridgeToEthTokens,
    [SupportedChain.Osmosis]: gravityBridgeToOsmosisTokens,
    [SupportedChain.Stargaze]: gravityBridgeToStargazeTokens
  },
  [SupportedChain.Stargaze]: {
    [SupportedChain.GravityBridge]: stargazeToGravityBridgeTokens
  },
  [SupportedChain.Osmosis]: {
    [SupportedChain.GravityBridge]: osmosisToGravityBridgeTokens
  }
};
