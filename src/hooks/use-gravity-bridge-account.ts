import { useEffect, useState } from 'react';
import gravityBridgeAccountStore from 'stores/gravity-bridge-account-store';
import { GravityBridgeAccount } from 'types';

export default function useGravityBridgeAccount (): GravityBridgeAccount | undefined {
  const [account, setAccount] = useState<GravityBridgeAccount>();
  useEffect(() => {
    const subscription = gravityBridgeAccountStore.account$.subscribe(setAccount);
    return (): void => { subscription.unsubscribe(); };
  }, []);
  return account;
}
