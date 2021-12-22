import { BehaviorSubject } from 'rxjs';
import { EthAccount } from 'types';

const currentNetwork$ = new BehaviorSubject<string | undefined>(undefined);
const ethAccount$ = new BehaviorSubject<EthAccount | undefined>(undefined);

function updateNetwork (network: string | undefined): void {
  currentNetwork$.next(network);
}

function updateAccount (account: EthAccount | undefined): void {
  ethAccount$.next(account);
}

export default {
  updateNetwork,
  updateAccount,
  currentNetwork$: currentNetwork$.asObservable(),
  account$: ethAccount$.asObservable()
};
