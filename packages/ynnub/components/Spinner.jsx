import Icon from './Icon';
import s from './spinner.scss';

export const SpinnerIcon = ({ className = '', ...props }) => (
  <svg className={`${s.spinner} ${className}`} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle className={s.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
  </svg>
);

export default props => <Icon {...props} value={<SpinnerIcon />} />;
