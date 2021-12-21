import { TokenInfo } from '@uniswap/token-lists';
import Big from 'big.js';
import { useEffect, useState } from 'react';
import ethWalletManager from 'services/eth-wallet-manager';
import { SupportedNetwork } from 'types';

export default function useTokenBalance (network: SupportedNetwork, address?: string, tokenInfo?: TokenInfo, rounds?: number, counter?: number): string {
  const [balance, setBalance] = useState<string>('0');
  useEffect(() => {
    if (address === undefined || tokenInfo === undefined) {
      setBalance('0');
    } else if (network === SupportedNetwork.Eth) {
      ethWalletManager.getERC20Balance(tokenInfo.address, address)
        .then((result) => {
          let _balance = new Big(result).div(10 ** tokenInfo.decimals);
          if (rounds !== undefined) {
            _balance = _balance.round(rounds, Big.roundDown);
          }
          setBalance(_balance.toString());
        })
    } else if (network === SupportedNetwork.GravityBridge) {
      // TODO: get balance from GB
      setBalance('0');
    } else {
      setBalance('0');
    }
  }, [network, address, tokenInfo, rounds, counter]);
  return balance;
}
