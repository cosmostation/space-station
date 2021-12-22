import { TokenInfo } from '@uniswap/token-lists';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import ethWalletManager from 'services/eth-wallet-manager';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import loggerFactory from 'services/logger-factory';

const logger = loggerFactory.getLogger('[useGravityBridgeTokenList]');

async function getGravityBridgeErcTokens (gravityBridgeAddress: string): Promise<TokenInfo[]> {
  try {
    const balances = await gravityBridgeLcdService.getBalance(gravityBridgeAddress);
    const erc20Balances = _.filter(balances, (balance) => _.startsWith(balance.denom, 'gravity0x'));
    const requests = _.map(erc20Balances, (balance): Promise<TokenInfo | null> | undefined => {
      const address = _.last(_.split(balance.denom));
      if (address) {
        return ethWalletManager.getERC20Info(address);
      }
      return undefined;
    });
    const tokenInfos = await Promise.all(requests);
    return _.compact(tokenInfos);
  } catch (error) {
    logger.error(error);
    return [];
  }
}

export default function useGravityBridgeTokenList (gravityBridgeAddress?: string): TokenInfo[] {
  const [tokenList, setTokenList] = useState<TokenInfo[]>([]);
  useEffect(() => {
    if (gravityBridgeAddress) {
      getGravityBridgeErcTokens(gravityBridgeAddress).then(setTokenList);
    } else {
      setTokenList([]);
    }
  }, [gravityBridgeAddress]);
  return tokenList;
}
