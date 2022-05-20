import { ChainInfo } from '@keplr-wallet/types';

const gravityBridge: ChainInfo = {
  chainName: 'GravityBridge',
  chainId: 'gravity-bridge-3',
  rest: 'https://lcd-gravity-bridge.cosmostation.io',
  rpc: 'https://lcd-gravity-bridge.cosmostation.io:26657',
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
  chainName: 'cheqd',
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
    low: 25,
    average: 30,
    high: 50
  }
};

const chihuahua: ChainInfo = {
  chainId: 'chihuahua-1',
  chainName: 'Chihuahua',
  rpc: 'https://rpc.chihuahua.wtf',
  rest: 'https://rest.flixnet-4.omniflix.network',
  stakeCurrency: {
    coinDenom: 'HUAHUA',
    coinMinimalDenom: 'uhuahua',
    coinDecimals: 6,
    coinGeckoId: '-'
  },
  bip44: {
    coinType: 118
  },
  bech32Config: {
    bech32PrefixAccAddr: 'chihuahua',
    bech32PrefixAccPub: 'chihuahuapub',
    bech32PrefixValAddr: 'chihuahuavaloper',
    bech32PrefixValPub: 'chihuahuavaloperpub',
    bech32PrefixConsAddr: 'chihuahuavalcons',
    bech32PrefixConsPub: 'chihuahuavalconspub'
  },
  currencies: [
    {
      coinDenom: 'HUAHUA',
      coinMinimalDenom: 'uhuahua',
      coinDecimals: 6,
      coinGeckoId: '-'
    }
  ],
  feeCurrencies: [
    {
      coinDenom: 'HUAHUA',
      coinMinimalDenom: 'uhuahua',
      coinDecimals: 6,
      coinGeckoId: '-'
    }
  ],
  gasPriceStep: {
    low: 0.025,
    average: 0.03,
    high: 0.04
  },
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go']
};

const nyx: ChainInfo = {
  chainId: 'nyx',
  chainName: 'NYX',
  rpc: 'https://rpc-nym.cosmostation.io',
  rest: 'https://lcd-nym.cosmostation.io',
  stakeCurrency: {
    coinDenom: 'NYX',
    coinMinimalDenom: 'unyx',
    coinDecimals: 6,
    coinGeckoId: '-'
  },
  bip44: {
    coinType: 118
  },
  bech32Config: {
    bech32PrefixAccAddr: 'n',
    bech32PrefixAccPub: 'npub',
    bech32PrefixValAddr: 'nvaloper',
    bech32PrefixValPub: 'nvaloperpub',
    bech32PrefixConsAddr: 'nvalcons',
    bech32PrefixConsPub: 'nvalconspub'
  },
  currencies: [
    {
      coinDenom: 'NYX',
      coinMinimalDenom: 'unyx',
      coinDecimals: 6,
      coinGeckoId: '-'
    },
    {
      coinDenom: 'NYM',
      coinMinimalDenom: 'unym',
      coinDecimals: 6,
      coinGeckoId: '-'
    }
  ],
  feeCurrencies: [
    {
      coinDenom: 'NYM',
      coinMinimalDenom: 'unym',
      coinDecimals: 6,
      coinGeckoId: '-'
    }
  ],
  gasPriceStep: {
    low: 0.025,
    average: 0.03,
    high: 0.04
  },
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go']
};

const chainInfoMap: Record<string, ChainInfo> = {
  gravityBridge,
  cheqd,
  chihuahua,
  nyx
};

export default chainInfoMap;
