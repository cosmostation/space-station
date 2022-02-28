import cosmosChains from 'constants/cosmos-chains';
import _ from 'lodash';
import {
  CosmosWalletType,
  EthWalletType,
  ICosmosToken,
  IERC20Token,
  IToken,
  SupportedCosmosChain,
  SupportedEthChain,
} from 'types';

function isCosmosWalletType (type: string): type is CosmosWalletType {
  return _.includes(_.values(CosmosWalletType), type);
}

function isEthWalletType (type: string): type is EthWalletType {
  return _.includes(_.values(EthWalletType), type);
}

function isSupportedCosmosChain (chain: string): chain is SupportedCosmosChain {
  return _.includes(_.values(SupportedCosmosChain), chain);
}

function isSupportedEthChain (chain: string): chain is SupportedEthChain {
  return _.includes(_.values(SupportedEthChain), chain);
}

function convertErc20ToGravity (erc20Token: IERC20Token): ICosmosToken {
  const gravityBridge = cosmosChains[SupportedCosmosChain.GravityBridge];
  return {
    chainId: gravityBridge.chainId,
    name: erc20Token.name,
    denom: `gravity${erc20Token.address}`,
    symbol: erc20Token.symbol,
    logoURI: erc20Token.logoURI,
    decimals: erc20Token.decimals
  };
}

function convertErc20ToToken (erc20Token: IERC20Token): IToken {
  return {
    isErc20: true,
    isCosmos: false,
    erc20: erc20Token
  };
}

function isSameToken (tokenA: IToken, tokenB: IToken): boolean {
  if (tokenA.isErc20) {
    return tokenA.isErc20 === tokenB.isErc20 &&
      tokenA.erc20?.chainId === tokenB.erc20?.chainId &&
      tokenA.erc20?.address === tokenB.erc20?.address;
  } else {
    return tokenA.isCosmos === tokenB.isCosmos &&
      tokenA.cosmos?.chainId === tokenB.cosmos?.chainId &&
      tokenA.cosmos?.denom === tokenB.cosmos?.denom;
  }
}

export default {
  isCosmosWalletType,
  isEthWalletType,
  isSupportedCosmosChain,
  isSupportedEthChain,
  convertErc20ToGravity,
  convertErc20ToToken,
  isSameToken
};
