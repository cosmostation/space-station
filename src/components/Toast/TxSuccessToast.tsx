import './Toast.css';

import Text from 'components/Text';
import dotenv from 'dotenv';
import React from 'react';
import chainHelper from 'services/util/chain-helper';
import { IToken, SupportedChain } from 'types';

dotenv.config();

type TxSuccessToastProps = {
  token: IToken;
  amount: string;
  txHash: string;
  fromChain: SupportedChain;
  toChain: SupportedChain;
}

const TxSuccessToast: React.FC<TxSuccessToastProps> = ({ token, amount, txHash, fromChain, toChain }) => {
  const tokenSymbol = token?.erc20?.symbol || token?.cosmos?.symbol || 'Unknown Token';
  const message = `Your ${amount} ${tokenSymbol} are now in the queue and will be relayed to ${chainHelper.getChainName(toChain)} soon.`;
  const explorerLink = `${chainHelper.getExplorerLink(fromChain)}/${txHash}`;
  return (
    <>
      <p className="toast-message">{message}</p>
      <a className="toast-explorer-link" href={explorerLink} target="_blank" rel="noopener noreferrer">
        <Text size="tiny">View on Explorer</Text>
      </a>
    </>
  );
};

export default TxSuccessToast;
