import Big from 'big.js';
import { useEffect, useState } from 'react';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { IToken, SupportedChain } from 'types';

const logger = loggerFactory.getLogger('[useEthErc20TokenBalance]');

export default function useEthErc20TokenBalance (chain: SupportedChain, address?: string, token?: IToken, counter?: number, rounds?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || token?.erc20 === undefined) {
      setBalance('0');
    } else {
      logger.info('Getting ERC20 balance...');

      if (!typeHelper.isSupportedEthChain(chain)) {
        setBalance('0');
        return;
      }

      const decimals = token.erc20.decimals;
      const _rounds = rounds || decimals;
      ethWalletManager.getERC20Balance(chain, token.erc20.address, address)
        .then((result) => {
          logger.info('ERC20 balance:', result);
          const _balance = new Big(result)
            .div(10 ** decimals)
            .round(_rounds, Big.roundDown);
          setBalance(_balance.toString());
        }).catch((error) => {
          setBalance('0');
          logger.error(error);
        });
    }
  }, [chain, address, token, rounds, counter]);
  return balance;
}
