import { useEffect, useState } from 'react';
import metaMaskAccountStore from 'stores/eth-account-store';
import { EthAccount } from 'types';

export default function useEthAccount (): EthAccount | undefined {
  const [account, setAccount] = useState<EthAccount>();
  useEffect(() => {
    const subscription = metaMaskAccountStore.account$.subscribe((account) => {
      setAccount(account);
    });
    return (): void => { subscription.unsubscribe(); };
  }, []);
  return account;
}
