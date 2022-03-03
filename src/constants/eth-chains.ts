import { EthChainInfo, SupportedEthChain } from 'types';

const eth: EthChainInfo = {
  chainId: '0x1'
};

const chainInfoMap: Record<SupportedEthChain, EthChainInfo> = {
  eth
};

export default chainInfoMap;
