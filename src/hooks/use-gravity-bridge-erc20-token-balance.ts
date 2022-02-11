import Big from 'big.js';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import loggerFactory from 'services/util/logger-factory';
import { IToken, SupportedCosmosChain } from 'types';

const logger = loggerFactory.getLogger('[useGravityErc20TokenBalance]');

async function getGravityBridgeErc20TokenBalance (gravityBridgeAddress: string, token: IToken): Promise<string> {
  try {
    const balances = await lcdService.getBalance(SupportedCosmosChain.GravityBridge, gravityBridgeAddress);
    const erc20Balances = _.find(balances, (balance) => balance.denom === `gravity${token.erc20?.address}`);
    return erc20Balances?.amount || '0';
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

export default function useGravityErc20TokenBalance (address?: string, token?: IToken, counter?: number, rounds?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || token?.erc20 === undefined) {
      setBalance('0');
    } else {
      logger.info('Getting ERC20 balance...');
      const decimals = token.erc20.decimals;
      const _rounds = rounds || decimals;
      getGravityBridgeErc20TokenBalance(address, token)
        .then((balance) => {
          logger.info('ERC20 balance:', balance);
          const _balance = new Big(balance)
            .div(10 ** decimals)
            .round(_rounds, Big.roundDown);
          setBalance(_balance.toString());
        });
    }
  }, [address, token, rounds, counter]);
  return balance;
}
