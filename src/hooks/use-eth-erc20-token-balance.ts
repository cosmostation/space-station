import { TokenInfo } from '@uniswap/token-lists';
import Big from 'big.js';
import { useEffect, useState } from 'react';
import ethWalletManager from 'services/eth-wallet-manager';
import loggerFactory from 'services/logger-factory';

const logger = loggerFactory.getLogger('[useEthErc20TokenBalance]');

export default function useEthErc20TokenBalance (address?: string, tokenInfo?: TokenInfo, counter?: number, rounds?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || tokenInfo === undefined) {
      setBalance('0');
    } else {
      logger.info('Getting ERC20 balance...');
      const _rounds = rounds || tokenInfo.decimals;
      ethWalletManager.getERC20Balance(tokenInfo.address, address)
        .then((result) => {
          logger.info('ERC20 balance:', result);
          const _balance = new Big(result)
            .div(10 ** tokenInfo.decimals)
            .round(_rounds, Big.roundDown);
          setBalance(_balance.toString());
        }).catch((error) => {
          setBalance('0');
          logger.error(error);
        });
    }
  }, [address, tokenInfo, rounds, counter]);
  return balance;
}
