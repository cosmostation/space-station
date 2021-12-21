import { TokenInfo } from '@uniswap/token-lists';
import _ from 'lodash';
import { useEffect, useState } from 'react';

import ethTokenList from './eth.json';
import goerliTokenList from './goerli.json';

function getTokenList(chainId: string): TokenInfo[] {
  const _chainId = _.toNumber(chainId);
  if (_chainId === 1) {
    return _.get(ethTokenList, 'tokens', []);
  } else if (_chainId === 5) {
    return _.get(goerliTokenList, 'tokens', []);
  } else {
    return [];
  }
}

export default function useEthTokenList (ethChainId: string): TokenInfo[] {
  const [tokenList, setTokenList] = useState<TokenInfo[]>([]);
  useEffect(() => {
    const tokeList = getTokenList(ethChainId);
    setTokenList(tokeList);
  }, [ethChainId]);
  return tokenList;
}
