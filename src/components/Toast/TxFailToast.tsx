import './Toast.css';

import Text from 'components/Text';
import React from 'react';
import { IToken, SupportedChain } from 'types';

type TxFailToastProps = {
  token: IToken;
  amount: string;
  toChain: SupportedChain;
  errorMessage?: string;
};

const TxFailToast: React.FC<TxFailToastProps> = ({ token, amount, toChain, errorMessage }) => {
  const _toChain = toChain === SupportedChain.Eth ? 'Ethereum' : 'Gravity Bridge';
  const message = `Failed to transfer ${amount} ${token.erc20?.symbol} to ${_toChain}`;
  return (
    <div className="toast-message">
      <p>{message}</p>
      {errorMessage ? <Text size="tiny" className="toast-error-detail">{errorMessage}</Text> : <></>}
    </div>
  );
};

export default TxFailToast;
