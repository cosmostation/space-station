import './Button.css';

import classNames from 'classnames';
import React from 'react';

type BoxProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: (event: any) => void;
  disabled?: boolean;
  type?: 'primary';
}

const Box: React.FC<BoxProps> = ({ className, children, onClick, disabled, type }) => {
  return (
    <button className={classNames(className, type, 'Button')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Box;
