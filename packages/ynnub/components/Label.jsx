import type { Element, Node } from 'react';
import s from './label.scss';

type VariationType = 'success' | 'error' | 'warning';

type PropsType = {
  variation?: VariationType,
  className?: string,
  children: Node,
}

export default ({ children, variation, className, ...otherProps }: PropsType): Element<'span'> => (
  <span className={`${s.label} ${variation ? s[variation] : ''} ${className ? className : ''}`} {...otherProps}>
    {children}
  </span>
);
