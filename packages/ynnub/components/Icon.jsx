import React, { type Node } from 'react';

export type IconType = string | Node;

type PropsType = {
  icon: IconType,
  className?: ?string,
}

export default ({ value, className = '', ...props }: PropsType): Node => {
  if (typeof value ==='string') return <span className={`material-icons ${className}`}>{value}</span>;
  return React.cloneElement(value, { className: `${className} ${icon.className || ''}`, style: { verticalAlign: 'text-bottom' } });
}
