import React, { ReactNode } from 'react';
import s from './label.scss';

export type VariationType = 'success' | 'error' | 'warning';

export interface Props {
  variation?: VariationType;
  className?: string;
  children: ReactNode;
  [prop: string]: any;
}

export default ({ children, variation, className, ...otherProps }: Props) => (
  <span
    className={`${s.label} ${variation ? s[variation] : ''} ${className || ''}`}
    {...otherProps}
  >
    {children}
  </span>
);
