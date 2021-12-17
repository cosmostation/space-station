import './Box.css';

import classNames from 'classnames';
import React from 'react';

type BoxProps = {
  className?: string,
  children?: JSX.Element | JSX.Element[] | string,
  density?: number,
  depth?: number,
}

const Box: React.FC<BoxProps> = ({ className, children, density, depth }) => {
  return (
    <div className={classNames(className, 'Box', density !== undefined ? `density-${density}` : '', depth !== undefined ? `depth-${depth}` : '')}>
      {children}
    </div>
  );
}

export default Box;
