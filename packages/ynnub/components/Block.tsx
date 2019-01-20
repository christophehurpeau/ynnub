import classNames from 'classnames';
import React, { ReactChild, ReactHTML } from 'react';
import s from './block.scss';

export interface Props {
  as?: keyof ReactHTML;
  className?: string;
  primary?: boolean;
  children?: ReactChild;
}

export default ({ as: As = 'div', className, primary, children }: Props) => (
  <As className={classNames(s.block, primary && s.primary, className)}>
    {children}
  </As>
);
