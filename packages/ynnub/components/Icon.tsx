import React, { ReactNode, ReactElement } from 'react';

export type IconType = string | ReactNode;

interface IconProps {
  className?: string,
  style?: Object,
}


export interface Props {
  value: string | ReactElement<IconProps>,
  icon: IconType,
  className?: string,
  [prop: string]: any,
}

export default ({ value, className = '', ...props }: Props): ReactNode => {
  if (typeof value ==='string') return <span className={`material-icons ${className}`} {...props}>{value}</span>;
  return React.cloneElement(value, { className: `${className} ${value.props.className || ''}`, style: { verticalAlign: 'text-bottom' } });
}
