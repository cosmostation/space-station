import _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { GravityBridgeAccount } from 'types';

const hasGravityBridgeNetwork$ = new BehaviorSubject<boolean>(false);
const gravityBridgeAccount$ = new BehaviorSubject<GravityBridgeAccount | undefined>(undefined);

// function registerEventHandler () {
//   window.addEventListener('keplr_keystorechange', connect);
// }
// registerEventHandler();

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
