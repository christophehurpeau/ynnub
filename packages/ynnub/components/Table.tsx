import classNames from 'classnames';
import React, { ReactNode } from 'react';
import s from './table.scss';

export interface Props {
  className?: string;
  centered?: boolean;
  bordered?: boolean;
  striped?: boolean;
  children: ReactNode;
  [prop: string]: any;
}

export default ({
  className,
  bordered,
  striped,
  centered,
  children,
  ...otherProps
}: Props) => (
  <table
    className={classNames(
      s.table,
      bordered && s.bordered,
      striped && s.striped,
      centered && s.centered,
      className,
    )}
    {...otherProps}
  >
    {children}
  </table>
);
