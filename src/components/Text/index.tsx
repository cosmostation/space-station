import './Text.css';

import classNames from 'classnames';
import React from 'react';

type TextProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string | {};
  muted?: boolean;
  size?: 'big' | 'medium' | 'small' | 'tiny';
}

const Text: React.FC<TextProps> = ({ className, children, muted, size }) => {
  return (
    <p className={classNames(className, 'Text', muted ? 'muted': '', size ? size : '') }>{children}</p>
  );
}

export default Text;
