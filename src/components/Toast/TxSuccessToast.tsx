import './Toast.css';

import Text from 'components/Text';
import dotenv from 'dotenv';
import React from 'react';
import { IToken, SupportedChain } from 'types';

dotenv.config();

const ETH_TX_EXPLORER = process.env.REACT_APP_ETH_TX_EXPLORER || '';
const GRAVITY_BRIDGE_TX_EXPLORER = process.env.REACT_APP_GRAVITY_BRIDGE_TX_EXPLORER || '';

type TxSuccessToastProps = {
  token: IToken;
  amount: string;
  txHash: string;
  toChain: SupportedChain;
}

const TxSuccessToast: React.FC<TxSuccessToastProps> = ({ token, amount, txHash, toChain }) => {
  const _toChain = toChain === SupportedChain.Eth ? 'Ethereum' : 'Gravity Bridge';
  const message = `Successfully transferred ${amount} ${token.erc20?.symbol} to ${_toChain}`;
  const explorerLink = toChain === SupportedChain.Eth ? `${GRAVITY_BRIDGE_TX_EXPLORER}/${txHash}` : `${ETH_TX_EXPLORER}/${txHash}`;
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
