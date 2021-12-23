import { TokenInfo } from '@uniswap/token-lists';
import Big from 'big.js';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import loggerFactory from 'services/logger-factory';

const logger = loggerFactory.getLogger('[useGravityErc20TokenBalance]');

async function getGravityBridgeErc20TokenBalance (gravityBridgeAddress: string, tokenInfo: TokenInfo): Promise<string> {
  try {
    const balances = await gravityBridgeLcdService.getBalance(gravityBridgeAddress);
    const erc20Balances = _.find(balances, (balance) => balance.denom === `gravity${tokenInfo.address}`);
    return erc20Balances?.amount || '0';
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

export default function useGravityErc20TokenBalance (address?: string, tokenInfo?: TokenInfo, counter?: number, rounds?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || tokenInfo === undefined) {
      setBalance('0');
    } else {
      logger.info('Getting ERC20 balance...');
      const _rounds = rounds || tokenInfo.decimals;
      // getGravityBridgeErc20TokenBalance(address, tokenInfo)
      //   .then((balance) => {
      //     logger.info('ERC20 balance:', balance);
      //     const _balance = new Big(balance)
      //       .div(10 ** tokenInfo.decimals)
      //       .round(_rounds, Big.roundDown);
      //     setBalance(_balance.toString());
      //   });
      setBalance('100');
    }
  }, [address, tokenInfo, rounds, counter]);
  return balance;
}
