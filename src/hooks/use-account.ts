import { useEffect, useState } from 'react';
import accountStore from 'stores/account-store';
import { SupportedAccount } from 'types';

export default function useAccount (chain: string): SupportedAccount | undefined {
  const [account, setAccount] = useState<SupportedAccount>();
  useEffect(() => {
    const subscription = accountStore.accounts$.subscribe((accountMap) => {
      const _account = accountMap[chain];
      if (account === undefined || _account === undefined) {
        setAccount(_account);
      } else if (!isSameAccount(account, _account)) {
        setAccount(_account);
      }
    });
    return (): void => { subscription.unsubscribe(); };
  }, [chain]);
  return account;
}

function isSameAccount (accountA: SupportedAccount, accountB: SupportedAccount): boolean {
  return accountA.address === accountB.address && accountA.balance === accountB.balance;
}
