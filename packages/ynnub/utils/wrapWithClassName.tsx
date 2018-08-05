import React, { ReactNode, ReactType }  from 'react';

export default (node: ReactNode, className: string, As: ReactType = 'span') => {
  if (!node) return node;

  if (typeof node === 'function') {
    return React.createElement(node, { className });
  }

  return <As className={className}>{node}</As>;
}
