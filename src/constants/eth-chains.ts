import { SupportedEthChain, EthChainInfo } from 'types';

const eth: EthChainInfo = {
  chainId: '0x1'
};

const goerli: EthChainInfo = {
  chainId: '0x5'
};

const chainInfoMap: Record<SupportedEthChain, EthChainInfo> = {
  eth,
  goerli
};

export default chainInfoMap;
