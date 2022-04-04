import './Text.css';

import classNames from 'classnames';
import React from 'react';

type TextProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | unknown;
  muted?: boolean;
  size?: 'big' | 'medium' | 'small' | 'tiny';
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ className, children, muted, size, bold }) => {
  return (
    <p className={classNames(className, 'Text', size, { muted, bold }) }>{children}</p>
  );
};

export default Text;
