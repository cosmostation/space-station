import axios from 'axios';
import _ from 'lodash';
import { PriceInfo } from 'types';

const API_ENDPOINT = 'https://api-utility.cosmostation.io';

async function getPrices (): Promise<PriceInfo[]> {
  const url = `${API_ENDPOINT}/v1/market/prices`;
  const response = await axios.get(url);
  return _.get(response, 'data');
}

export default {
  getPrices
};
