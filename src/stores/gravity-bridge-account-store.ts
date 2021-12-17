import { BehaviorSubject } from 'rxjs';
import { GravityBridgeAccount } from 'types';

const hasGravityBridgeNetwork$ = new BehaviorSubject<boolean>(false);
const gravityBridgeAccount$ = new BehaviorSubject<GravityBridgeAccount | undefined>(undefined);

function updateAccount (account: GravityBridgeAccount | undefined) {
  gravityBridgeAccount$.next(account);
}

function updateNetwork (hasNetwork: boolean) {
  hasGravityBridgeNetwork$.next(hasNetwork);
}

export default {
  hasNetwork$: hasGravityBridgeNetwork$.asObservable(),
  account$: gravityBridgeAccount$.asObservable(),
  updateAccount,
  updateNetwork
}
