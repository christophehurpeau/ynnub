import React, { Component } from 'react';

export default (node, className: string, As: string = 'span') => {
  if (!node) return node;

  if (typeof node === 'function' || node instanceof Component) {
    return React.createElement(node, { className });
  }

  return <As className={className}>{node}</As>;
}
