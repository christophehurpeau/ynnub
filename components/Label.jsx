import s from './label.scss';
import { ReactNodeType } from '../types';

type VariationType = 'success' | 'error' | 'warning';

type PropsType = {
  variation: ?VariationType,
  children: ReactNodeType,
}

export default ({ children, variation, ...otherProps }: PropsType) => (
  <span className={`${s.label} ${variation ? s[variation] : ''}`} {...otherProps}>
    {children}
  </span>
);
