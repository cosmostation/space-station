import './Toast.css';

import Text from 'components/Text';
import React from 'react';

const PendingMetaMaskRequestToast: React.FC = () => {
  return (
    <div className="toast-message">
      <p className="toast-message">Please check Meta Mask</p>
      <Text size="tiny" className="toast-error-detail">Same request is pending</Text>
    </div>
  );
}

export default PendingMetaMaskRequestToast;
