import type { Element, Node } from 'react';
import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

type PropsType = {
  id: string,
  type?: string,
  icon?: ?Node,
  label?: ?Node,
  placeholder?: ?string,
};

export default ({ id, type, icon, label, placeholder, ...props }): Element<'div'> => (
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
    {!icon ? null : <label className={`material-icons ${sInput.icon}`} htmlFor={id}>{icon}</label>}
  </div>
);
