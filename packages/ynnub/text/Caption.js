import { ReactNode } from 'react';
import classNames from 'classnames';
import t from './typography';

export interface Props {
  as?: string,
  children: ReactNode,
  className?: string,
  [prop: string]: any,
}

export default ({ as: As = 'span', children, className, ...rest}: Props) =>
  <As className={classNames(t.caption, className)} {...rest}>{children}</As>;
