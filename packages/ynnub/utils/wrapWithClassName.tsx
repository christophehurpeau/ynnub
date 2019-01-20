import React, { ReactNode, ReactType, FunctionComponent } from 'react';

export interface AsProps {
  className: string;
}

export default (
  node: ReactNode | FunctionComponent<AsProps>,
  className: string,
  As: ReactType<AsProps> = 'span',
) => {
  if (!node) return node;

  if (typeof node === 'function') {
    return React.createElement(node as FunctionComponent<AsProps>, {
      className,
    });
  }

  return <As className={className}>{node}</As>;
};
