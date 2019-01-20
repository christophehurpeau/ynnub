import React, { ReactNode } from 'react';

export interface Props {
  className?: string;
  dark?: boolean;
  children: ReactNode;
  [prop: string]: any;
}

export default ({ className, dark, children, ...otherProps }: Props) => (
  <div {...otherProps} className={dark ? 'mdc-theme--dark' : undefined}>
    {children}
  </div>
);
