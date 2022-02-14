import { useEffect, useState } from 'react';
import accountStore from 'stores/account-store';
import { SupportedAccount } from 'types';

export default function useAccount (chain: string): SupportedAccount | undefined {
  const [account, setAccount] = useState<SupportedAccount>();
  useEffect(() => {
    const subscription = accountStore.account$.subscribe((accountMap) => {
      const _account = accountMap[chain];
      setAccount(_account);
    });
    return (): void => { subscription.unsubscribe(); };
  }, [chain]);
  return account;
}
