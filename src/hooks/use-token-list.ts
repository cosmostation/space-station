import _ from 'lodash';
import { useEffect, useState } from 'react';
import tokenListService from 'services/token-list-service';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { IToken, SupportedChain } from 'types';

const logger = loggerFactory.getLogger('[useTokenList]');

export default function useTokenList (fromChain: SupportedChain, toChain: SupportedChain, searchedTokens: IToken[], address?: string): IToken[] {
  const [tokens, setTokens] = useState<IToken[]>([]);
  useEffect(() => {
    tokenListService.getTokens(fromChain, toChain, address)
      .then((tokens) => {
        let _tokens = [...tokens, ...searchedTokens];
        _tokens = _.uniqWith(_tokens, typeHelper.isSameToken);
        setTokens(_tokens);
      }).catch((error) => {
        logger.error(error);
        setTokens([]);
      });
  }, [fromChain, toChain, address, searchedTokens]);
  return tokens;
}
