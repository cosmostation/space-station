import './Toast.css';

import Text from 'components/Text';
import React from 'react';
import chainHelper from 'services/util/chain-helper';
import { IToken, SupportedChain } from 'types';

type TxFailToastProps = {
  token: IToken;
  amount: string;
  toChain: SupportedChain;
  errorMessage?: string;
};

const TxFailToast: React.FC<TxFailToastProps> = ({ token, amount, toChain, errorMessage }) => {
  const tokenSymbol = token?.erc20?.symbol || token?.cosmos?.symbol || 'Unknown Token';
  const message = `Failed to transfer ${amount} ${tokenSymbol} to ${chainHelper.getChainName(toChain)}`;
  return (
    <div className="toast-message">
      <p>{message}</p>
      {errorMessage ? <Text size="tiny" className="toast-error-detail">{errorMessage}</Text> : <></>}
    </div>
  );
};

export default TxFailToast;
