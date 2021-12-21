import './Row.css';

import classNames from 'classnames';
import React from 'react';

type RowProps = {
  className?: string,
  children?: JSX.Element | JSX.Element[] | string,
  depth?: number,
}

const Row: React.FC<RowProps> = ({ className, children, depth }) => {
  return (
    <div className={classNames(className, 'Row', depth ? `depth-${depth}` : '')}>
      {children}
    </div>
  );
};

export default Row;
