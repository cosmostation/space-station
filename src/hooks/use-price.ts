import _ from 'lodash';
import { useEffect, useState } from 'react';
import priceService from 'services/price-service';
import loggerFactory from 'services/util/logger-factory';
import priceStore from 'stores/price-store';
import { Price } from 'types';

const logger = loggerFactory.getLogger('[usePrice]');

export default function usePrice (currency: string, denom?: string): Price | undefined {
  const [price, setPrice] = useState<Price>();
  useEffect(() => {
    logger.info('curreny:', currency, 'denom:', denom);
    priceService.getPrices().then(priceStore.updateBulk);
    const subscription = priceStore.prices$.subscribe((priceInfoMap) => {
      if (denom) {
        const _priceInfo = priceInfoMap[_.toLower(denom)];
        const _price = _.find(_priceInfo.prices, { currency });
        setPrice(_price);
      }
    });
    return (): void => { subscription.unsubscribe(); };
  }, [currency, denom]);
  return price;
}
