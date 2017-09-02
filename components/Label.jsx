import s from './label.scss';
import { ReactNodeType } from '../types';

type VariationType = 'success' | 'error' | 'warning';

type PropsType = {
  variation?: VariationType,
  className?: string,
  children: ReactNodeType,
}

export default ({ children, variation, className, ...otherProps }: PropsType) => (
  <span className={`${s.label} ${variation ? s[variation] : ''} ${className ? className : ''}`} {...otherProps}>
    {children}
  </span>
);
