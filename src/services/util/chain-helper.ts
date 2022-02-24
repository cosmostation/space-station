import { SupportedChain } from 'types';

function getChainName (chain: SupportedChain): string {
  switch (chain) {
    case SupportedChain.Eth: return 'Ethereum';
    case SupportedChain.GravityBridge: return 'Gravity Bridge';
    case SupportedChain.Osmosis: return 'Osmosis';
    default: return 'Unsupported Chain';
  }
}

function getExplorerLink (chain: SupportedChain): string {
  switch (chain) {
    case SupportedChain.Eth: return 'https://etherscan.io/tx';
    case SupportedChain.GravityBridge: return 'https://www.mintscan.io/gravity-bridge/txs';
    case SupportedChain.Osmosis: return 'https://www.mintscan.io/osmosis/txs';
    default: return '';
  }
}

export default {
  getChainName,
  getExplorerLink
};
