import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  id: string,
  type: ?string,
  icon: ?ReactNodeType,
  label: ?ReactNodeType,
  placeholder: ?string,
};

export default ({ id, type, icon, label, placeholder, ...props }) => (
  <div
    className={[
      sInput.input,
      type !== 'radio' && type !== 'checkbox' && sInput.text,
      type && sInput[type],
      icon && sInput.withIcon,
      !label && sInput.noMargin,
    ].filter(Boolean).join(' ')}
  >
    <input id={id} type={type || 'text'} placeholder={placeholder || ''} {...props} />
    {!label ? null : <label htmlFor={id}>{label}</label>}
    {!icon ? null : <label className={sInput.icon} htmlFor={id}>{icon}</label>}
  </div>
);
