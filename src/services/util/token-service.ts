import { ICosmosToken, IERC20Token, SupportedCosmosChain } from 'types';

function convertErc20ToGravity (erc20Token: IERC20Token): ICosmosToken {
  return {
    chainId: SupportedCosmosChain.GravityBridge as string,
    name: erc20Token.name,
    denom: `gravity${erc20Token.address}`,
    logoURI: erc20Token.logoURI,
    decimals: erc20Token.decimals,
    isErc20: true
  };
}

export default {
  convertErc20ToGravity
};
