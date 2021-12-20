import './Toast.css';

import { TokenInfo } from '@uniswap/token-lists';
import Text from 'components/Text';
import React from 'react';
import { SupportedNetwork } from 'types';

const PendingMetaMaskRequestToast: React.FC = () => {
  return (
    <div className="toast-message">
      <p>Please check Meta Mask</p>
      <Text size="tiny" className="toast-error-detail">Same request is pending</Text>
    </div>
  );
}

export default PendingMetaMaskRequestToast;
