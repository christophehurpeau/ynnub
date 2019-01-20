import React, { ReactElement } from 'react';

export type IconType = string | ReactElement<IconProps>;

export interface IconProps {
  className?: string;
  style?: Object;
}

export interface Props {
  value: IconType;
  className?: string;
  [prop: string]: any;
}

export default ({ value, className = '', ...props }: Props) => {
  if (typeof value === 'string')
    return (
      <span className={`material-icons ${className}`} {...props}>
        {value}
      </span>
    );
  return React.cloneElement(value, {
    className: `${className} ${value.props.className || ''}`,
    style: { verticalAlign: 'text-bottom' },
  });
};
