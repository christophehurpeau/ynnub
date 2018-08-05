import React, { ReactElement, ReactNode } from 'react';
import s from './label.scss';

export type VariationType = 'success' | 'error' | 'warning';

export interface Props {
  variation?: VariationType,
  className?: string,
  children: ReactNode,
  [prop: string]: any,
}

export default ({ children, variation, className, ...otherProps }: Props): ReactElement<'span'> => (
  <span className={`${s.label} ${variation ? s[variation] : ''} ${className ? className : ''}`} {...otherProps}>
    {children}
  </span>
);
