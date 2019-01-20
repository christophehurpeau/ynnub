import classNames from 'classnames';
import React, { ReactNode } from 'react';
import List from './List';
import s from './list/simple.scss';

export interface Props {
  className?: string;
  ordered?: boolean;
  children: ReactNode;
  [prop: string]: any;
}

export default ({ className, ordered, children, props }: Props) => (
  <List
    as={ordered ? 'ol' : 'ul'}
    className={classNames(s.simple, ordered && s.ordered, className)}
    {...props}
  >
    {children}
  </List>
);
