import { BehaviorSubject } from 'rxjs';
import { SupportedAccount } from 'types';
import _ from 'lodash';

const accounts$ = new BehaviorSubject<Record<string, SupportedAccount | undefined>>({});

function updateAccount (chain: string, account: SupportedAccount | undefined): void {
  const current = _.clone(accounts$.getValue());
  current[chain] = account;
  accounts$.next(current);
}

export default {
  account$: accounts$.asObservable(),
  updateAccount
};
