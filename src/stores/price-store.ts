import _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { PriceInfo } from 'types';

const prices$ = new BehaviorSubject<Record<string, PriceInfo>>({});

function updateBulk (priceInfos: PriceInfo[]): void {
  const priceInfoMap = _.keyBy(priceInfos, 'denom');
  prices$.next(priceInfoMap);
}

export default {
  prices$: prices$.asObservable(),
  updateBulk
};
