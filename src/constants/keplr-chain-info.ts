import { ChainInfo } from '@keplr-wallet/types';

const gravityBridge: ChainInfo = {
  chainName: 'GravityBridge',
  chainId: 'gravity-bridge-2',
  rest: 'https://lcd-gravity-bridge.cosmostation.io',
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
    bech32PrefixAccAddr: 'gravity',
    bech32PrefixAccPub: 'gravitypub',
    bech32PrefixValAddr: 'gravityvaloper',
    bech32PrefixValPub: 'gravityvaloperpub',
    bech32PrefixConsAddr: 'gravityvalcons',
    bech32PrefixConsPub: 'gravityvalconspub'
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
  ],
  gasPriceStep: {
    low: 0,
    average: 0,
    high: 0
  }
};

const chainInfoMap: Record<string, ChainInfo> = {
  gravityBridge
};

export default chainInfoMap;
