import classNames from 'classnames';
import React, { ReactNode, ReactType } from 'react';
import t from './typography';

export interface Props {
  as?: ReactType;
  children: ReactNode;
  className?: string;
  [prop: string]: any;
}

export default ({ as: As = 'span', children, className, ...rest }: Props) => (
  <As className={classNames(t.caption, className)} {...rest}>
    {children}
  </As>
);
