import CheqdChainLogo from 'images/cheqd-chain-logo.png';
import ChihuahuaChainLogo from 'images/chihuahua-chain-logo.png';
import NymLogo from 'images/nym-icon.png';

export default {
  gravity0x6B175474E89094C44Da98b954EedeAC495271d0F: {
    name: 'Dai',
    denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
    symbol: 'DAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734',
    priceDenom: 'dai'
  },
  gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: {
    name: 'Wrapped ETH',
    denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295',
    priceDenom: 'weth'
  },
  gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: {
    name: 'USD Coin',
    denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    priceDenom: 'usdc'
  },
  gravity0xdAC17F958D2ee523a2206206994597C13D831ec7: {
    name: 'Tether',
    denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707',
    priceDenom: 'tether'
  },
  gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: {
    name: 'Wrapped Bitcoin',
    denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    symbol: 'WBTC',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
    priceDenom: 'wrapped-bitcoin'
  },
  'ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED': {
    name: 'Atom',
    denom: 'ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/coin_image/tokens/token-cosmos.svg',
    priceDenom: 'uatom'
  },
  'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602': {
    name: 'Stargaze STARS',
    denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
    symbol: 'STARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/coin_image/tokens/token-stargaze.svg',
    priceDenom: 'ustars'
  },
  'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2': {
    name: 'CHEQ',
    denom: 'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2',
    symbol: 'CHEQ',
    decimals: 9,
    logoURI: CheqdChainLogo,
    priceDenom: 'ncheq'
  },
  'ibc/048BE20AE2E6BFD4142C547E04F17E5F94363003A12B7B6C084E08101BFCF7D1': {
    name: 'Chihuahua',
    denom: 'ibc/048BE20AE2E6BFD4142C547E04F17E5F94363003A12B7B6C084E08101BFCF7D1',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: ChihuahuaChainLogo,
    priceDenom: 'uhuahua'
  },
  'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606': {
    name: 'NYM',
    denom: 'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606',
    symbol: 'NYM',
    decimals: 6,
    logoURI: NymLogo,
    priceDenom: 'unym'
  }
};
