import { useEffect, useState } from 'react';
import tokenService from 'services/token-service';
import loggerFactory from 'services/util/logger-factory';
import { IToken, SupportedChain } from 'types';

const logger = loggerFactory.getLogger('[useTokenBalance]');

export default function useTokenBalance (chain: SupportedChain, address?: string, token?: IToken, counter?: number, rounds?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || token?.erc20 === undefined) {
      setBalance('0');
    } else {
      tokenService.getTokenBalance(chain, token, address, rounds || 6)
        .then((balance: string) => {
          setBalance(balance);
        }).catch((error) => {
          logger.error(error);
          setBalance('0');
        });
    }
  }, [chain, address, token, rounds, counter]);
  return balance;
}
