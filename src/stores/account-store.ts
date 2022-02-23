import _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { CosmosWalletType, EthWalletType, SupportedAccount } from 'types';

const accounts$ = new BehaviorSubject<Record<string, SupportedAccount | undefined>>({});
const wallets$ = new BehaviorSubject<Record<string, EthWalletType | CosmosWalletType | undefined>>({});

function updateAccount (chain: string, account: SupportedAccount | undefined, connectedWallet: EthWalletType | CosmosWalletType | undefined): void {
  const current = _.clone(accounts$.getValue());
  current[chain] = account;
  updateConnectedWallet(chain, account, connectedWallet);
  accounts$.next(current);
}

function updateConnectedWallet (chain: string, account: SupportedAccount | undefined, connectedWallet: EthWalletType | CosmosWalletType | undefined): void {
  const current = _.clone(wallets$.getValue());

  if (account === undefined) {
    current[chain] = undefined;
  } else if (connectedWallet !== undefined) {
    current[chain] = connectedWallet;
  }
  wallets$.next(current);
}

export default {
  accounts$: accounts$.asObservable(),
  wallets$: wallets$.asObservable(),
  updateAccount
};
