import { TokenInfo } from '@uniswap/token-lists';
import _ from 'lodash';
import { useEffect, useState } from 'react';

import ethTokenList from './eth.json';
import goerliTokenList from './goerli.json';

export default function useEthTokenList (ethChainId: string, page = 1, perPage = 20): [boolean, TokenInfo[]] {
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [tokenList, setTokenList] = useState<TokenInfo[]>([]);
  useEffect(() => {
    const [hasMore, tokens] = getTokenList(ethChainId, page, perPage);
    setHasMore(hasMore);
    setTokenList(tokens);
  }, [ethChainId, page, perPage]);
  return [hasMore, tokenList];
}

function getTokenList (chainId: string, page: number, perPage: number): [boolean, TokenInfo[]] {
  const _chainId = _.toNumber(chainId);
  if (_chainId === 1) {
    const _hasMore = hasMore(ethTokenList, page, perPage);
    const tokens = _.take<TokenInfo>(ethTokenList, page * perPage);
    return [_hasMore, tokens];
  } else if (_chainId === 5) {
    const _hasMore = hasMore(ethTokenList, page, perPage);
    const tokens = _.take<TokenInfo>(goerliTokenList, page * perPage);
    return [_hasMore, tokens];
  } else {
    return [false, []];
  }
}

function hasMore (tokenInfo: TokenInfo[], page: number, pageSize: number): boolean {
  return _.size(tokenInfo) > page * pageSize;
}
