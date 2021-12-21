import './Toast.css';

import Text from 'components/Text';
import React from 'react';

type FailToastProps = {
  heading: JSX.Element | JSX.Element[] | string;
  message?: JSX.Element | JSX.Element[] | string;
}

const FailToast: React.FC<FailToastProps> = ({ heading, message }) => {
  return (
    <div className="toast-message">
      <p className="toast-message">{heading}</p>
      { message ? <Text size="tiny" className="toast-error-detail">{message}</Text> : <></> }
    </div>
  );
};

export default FailToast;
