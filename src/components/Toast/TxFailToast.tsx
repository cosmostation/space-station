import './Toast.css';

import { TokenInfo } from '@uniswap/token-lists';
import Text from 'components/Text';
import React from 'react';
import { SupportedNetwork } from 'types';

type TxFailToastProps = {
  tokenInfo: TokenInfo;
  amount: string;
  toNetwork: SupportedNetwork;
  errorMessage?: string;
};

const TxFailToast: React.FC<TxFailToastProps> = ({ tokenInfo, amount, toNetwork, errorMessage }) => {
  const _toNetwork = toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge';
  const message = `Failed to transfer ${amount} ${tokenInfo.symbol} to ${_toNetwork}`;
  return (
    <div className="toast-message">
      <p>{message}</p>
      {errorMessage ? <Text size="tiny" className="toast-error-detail">{errorMessage}</Text> : <></>}
    </div>
  );
};

export default TxFailToast;
