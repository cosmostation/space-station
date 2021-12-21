import './Toast.css';

import React from 'react';

const NoEthWalletToast: React.FC = () => {
  return (
    <div className="toast-message">
      <p className="toast-message">Please install MetaMask!</p>
    </div>
  );
}

export default NoEthWalletToast;
