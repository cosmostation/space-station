import { ChainInfo } from '@keplr-wallet/types';

const gravityBridge: ChainInfo = {
  chainName: 'GravityBridge',
  chainId: 'cgbtestnet1',
  rest: 'http://220.76.21.184:20301',
  rpc: 'http://220.76.21.184:20302',
  stakeCurrency: {
    coinDenom: 'GRAVITON',
    coinMinimalDenom: 'ugraviton',
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  },
  bech32Config: {
    bech32PrefixAccAddr: 'cosmos',
    bech32PrefixAccPub: 'cosmospub',
    bech32PrefixValAddr: 'cosmosvaloper',
    bech32PrefixValPub: 'cosmosvaloperpub',
    bech32PrefixConsAddr: 'cosmosvalcons',
    bech32PrefixConsPub: 'cosmosvalconspub'
  },
  currencies: [
    {
      coinDenom: 'GRAVITON',
      coinMinimalDenom: 'ugraviton',
      coinDecimals: 6
    }
  ],
  feeCurrencies: [
    {
      coinDenom: 'GRAVITON',
      coinMinimalDenom: 'ugraviton',
      coinDecimals: 6
    }
  ]
};

const chainInfoMap: Record<string, ChainInfo> = {
  gravityBridge
};

export default chainInfoMap;
