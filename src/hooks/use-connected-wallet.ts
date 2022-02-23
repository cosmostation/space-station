import { useEffect, useState } from 'react';
import accountStore from 'stores/account-store';
import { CosmosWalletType, EthWalletType } from 'types';

export default function useConnectedWallet (chain: string): EthWalletType | CosmosWalletType | undefined {
  const [wallet, setWallet] = useState<EthWalletType | CosmosWalletType>();
  useEffect(() => {
    const subscription = accountStore.wallets$.subscribe((walletMap) => {
      const _wallet = walletMap[chain];
      setWallet(_wallet);
    });
    return (): void => { subscription.unsubscribe(); };
  }, [chain]);
  return wallet;
}
