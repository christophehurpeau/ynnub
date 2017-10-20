import React  from 'react';

export default (node, className: string, As: string = 'span') => {
  if (!node) return node;

  if (typeof node === 'function') {
    return React.createElement(node, { className });
  }

  return <As className={className}>{node}</As>;
}
