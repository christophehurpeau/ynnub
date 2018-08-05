import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

export interface Props {
  id: string,
  type?: string,
  icon?: string,
  label?: ReactNode,
  placeholder?: string,
  className?: string,
  [prop: string]: any,
}

export default ({ id, type, icon, label, placeholder, className, ...props }: Props): ReactElement<'div'> => (
  <div
    className={classNames(
      sInput.input,
      type !== 'radio' && type !== 'checkbox' && sInput.text,
      type && (sInput[type] as string | undefined),
      icon && sInput.withIcon,
      !label && sInput.noMargin,
      className,
    )}
  >
    <input id={id} type={type || 'text'} placeholder={placeholder || ''} {...props} />
    {!label ? null : <label className={sInput.label} htmlFor={id}>{label}</label>}
    {!icon ? null : <label className={`material-icons ${sInput.icon}`} htmlFor={id}>{icon}</label>}
  </div>
);
