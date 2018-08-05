import { ReactNode } from 'react';
import classNames from 'classnames';
import t from './typography';

export interface Props {
  as?: string,
  children: ReactNode,
  className?: string,
}

export default ({ as: As = 'h1', children, className, ...rest}: Props) =>
  <As className={classNames(t.title, className)} {...rest}>{children}</As>;
