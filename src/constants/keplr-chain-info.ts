import { ChainInfo } from '@keplr-wallet/types';

const gravityBridge: ChainInfo = {
  chainName: 'GravityBridge',
  chainId: 'gravity-bridge-3',
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

const cheqd: ChainInfo = {
  chainName: 'Cheqd',
  chainId: 'cheqd-mainnet-1',
  rest: 'https://api.cheqd.net',
  rpc: 'https://rpc.cheqd.net',
  stakeCurrency: {
    coinDenom: 'CHEQ',
    coinMinimalDenom: 'ncheq',
    coinDecimals: 9
  },
  bip44: {
    coinType: 118
  },
  bech32Config: {
    bech32PrefixAccAddr: 'cheqd',
    bech32PrefixAccPub: 'cheqdpub',
    bech32PrefixValAddr: 'cheqdvaloper',
    bech32PrefixValPub: 'cheqdvaloperpub',
    bech32PrefixConsAddr: 'cheqdvalcons',
    bech32PrefixConsPub: 'cheqdvalconspub'
  },
  currencies: [
    {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'ncheq',
      coinDecimals: 9
    }
  ],
  feeCurrencies: [
    {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'ncheq',
      coinDecimals: 9
    }
  ],
  gasPriceStep: {
    low: 0,
    average: 0,
    high: 0
  }
};

const chainInfoMap: Record<string, ChainInfo> = {
  gravityBridge,
  cheqd
};

export default chainInfoMap;
