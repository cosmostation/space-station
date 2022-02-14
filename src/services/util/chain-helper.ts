import { SupportedChain } from 'types';

function getChainName (chain: SupportedChain): string {
  switch (chain) {
    case SupportedChain.Eth: return 'Ethereum';
    case SupportedChain.Goerli: return 'Goerli Testnet';
    case SupportedChain.GravityBridge: return 'Gravity Bridge';
    default: return 'Unsupported Chain';
  }
}

export default {
  getChainName
};
