import { useEffect, useState } from 'react';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { Account } from 'types';

export default function useGravityBridgeAccount (): Account | undefined {
  const [account, setAccount] = useState<Account>();
  useEffect(() => {
    const subscription = gravityBridgeAccountStore.account$.subscribe(setAccount);
    return () => subscription.unsubscribe();
  }, []);
  return account;
}
