import React, { ReactChild, DOMAttributes } from 'react';
import * as s from './badge.scss';

interface Props extends DOMAttributes<HTMLSpanElement> {
  value?: ReactChild;
}

export default ({ value, children, ...otherProps }: Props) => (
  <span className={s.badge} {...otherProps}>
    {value || children}
  </span>
);
