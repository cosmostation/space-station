import './Toast.css';

import { TokenInfo } from '@uniswap/token-lists';
import Text from 'components/Text';
import dotenv from 'dotenv';
import React from 'react';
import { SupportedNetwork } from 'types';

dotenv.config();

const ETH_TX_EXPLORER = process.env.REACT_APP_ETH_TX_EXPLORER
  ? process.env.REACT_APP_ETH_TX_EXPLORER
  : '';

const GRAVITY_BRIDGE_TX_EXPLORER = process.env.REACT_APP_GRAVITY_BRIDGE_TX_EXPLORER
  ? process.env.REACT_APP_GRAVITY_BRIDGE_TX_EXPLORER
  : '';


type TxSuccessToastProps = {
  tokenInfo: TokenInfo;
  amount: string;
  txHash: string;
  toNetwork: SupportedNetwork;
}

const TxSuccessToast: React.FC<TxSuccessToastProps> = ({ tokenInfo, amount, txHash, toNetwork }) => {
  const _toNetwork = toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge';
  const message = `Succeed to transfer ${amount} ${tokenInfo.symbol} to ${_toNetwork}`;
  const explorerLink = toNetwork === SupportedNetwork.Eth ? `${GRAVITY_BRIDGE_TX_EXPLORER}/${txHash}` : `${ETH_TX_EXPLORER}/${txHash}`
  return (
    <>
      <p className="toast-message">{message}</p>
      <a className="toast-explorer-link" href={explorerLink} target="_blank" rel="noopener noreferrer">
        <Text size="tiny">View on Explorer</Text>
      </a>
    </>
  );
}

export default TxSuccessToast;
