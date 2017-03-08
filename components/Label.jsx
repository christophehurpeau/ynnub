import s from './label.scss';
import { ReactNodeType } from '../types';

type PropsType = {
  variation: 'success' | 'error' | 'warning',
  children: ReactNodeType,
}

export default ({ children, variation, ...otherProps }: PropsType) => (
  <span className={`${s.label} ${variation ? s[variation] : ''}`} {...otherProps}>
    {children}
  </span>
);
