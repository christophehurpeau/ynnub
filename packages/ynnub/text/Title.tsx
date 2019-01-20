import classNames from 'classnames';
import React, { ReactNode, ReactType } from 'react';
import t from './typography';

export interface Props {
  as?: ReactType;
  children: ReactNode;
  className?: string;
}

export default ({ as: As = 'h1', children, className, ...rest }: Props) => (
  <As className={classNames(t.title, className)} {...rest}>
    {children}
  </As>
);
