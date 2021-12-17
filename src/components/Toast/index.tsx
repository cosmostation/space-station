import './Toast.css';

import { TokenInfo } from '@uniswap/token-lists';
import Text from 'components/Text';
import dotenv from 'dotenv';
import FailIcon from 'images/fail-icon.png';
import SuccessIcon from 'images/success-icon.png';
import React from 'react';
import { toast } from 'react-toastify';
import { SupportedNetwork } from 'types';

dotenv.config();

const ETH_TX_EXPLORER = process.env.REACT_APP_ETH_TX_EXPLORER
  ? process.env.REACT_APP_ETH_TX_EXPLORER
  : '';

const GRAVITY_BRIDGE_TX_EXPLORER = process.env.REACT_APP_GRAVITY_BRIDGE_TX_EXPLORER
  ? process.env.REACT_APP_GRAVITY_BRIDGE_TX_EXPLORER
  : '';

function showTxSuccessToast (tokenInfo: TokenInfo, amount: string, txHash: string, toNetwork: SupportedNetwork) {
  const _toNetwork = toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge';
  const explorerLink = toNetwork === SupportedNetwork.Eth ? `${GRAVITY_BRIDGE_TX_EXPLORER}/${txHash}` : `${ETH_TX_EXPLORER}/${txHash}`
  const message = `Succeed to transfer ${amount} ${tokenInfo.symbol} to ${_toNetwork}`;
  return toast(<>
    <p className="toast-message">{message}</p>
    <a className="toast-explorer-link" href={explorerLink} target="_blank" rel="noopener noreferrer">
      <Text size="tiny">View on Explorer</Text>
    </a>
  </>, {
    icon: () =>  <img src={SuccessIcon} alt="success" className="toast-icon"/>
  });
}


function showTxFailToast (tokenInfo: TokenInfo, amount: string, toNetwork: SupportedNetwork, errorMessage: string) {
  const _toNetwork = toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge';
  const message = `Failed to transfer ${amount} ${tokenInfo.symbol} to ${_toNetwork}`;
  return toast(
    <div className="toast-message">
      <p>{message}</p>
      <Text size="tiny">{errorMessage}</Text>
    </div>,
    {
      icon: () =>  <img src={FailIcon} alt="fail" className="toast-icon"/>
    });
}

export default {
  showTxSuccessToast,
  showTxFailToast,
};
