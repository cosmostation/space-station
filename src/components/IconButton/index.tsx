import './IconButton.css';

import classNames from 'classnames';
import React from 'react';

type BoxProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: (event: any) => void;
  disabled?: boolean;
  size?: 'big' | 'medium' | 'small';
  type?: 'primary'
}

const Box: React.FC<BoxProps> = ({ className, children, onClick, disabled, size, type }) => {
  return (
    <button className={classNames(className, 'IconButton', size, type)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Box;
