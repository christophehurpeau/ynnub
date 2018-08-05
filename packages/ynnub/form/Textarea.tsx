import { ReactNode } from 'react';
import classNames from 'classnames';
import './form.global.scss';
import sInput from './input.scss';

export interface Props {
  id: string,
  label?: ReactNode,
  placeholder?: string,
  [prop: string]: any,
};

export default ({ id, label, placeholder, ...props }: Props) => (
  <div
    className={classNames(
      sInput.input,
      sInput.text,
      sInput.textarea,
      !label && sInput.noMargin,
    )}
  >
    <textarea id={id} placeholder={placeholder || ''} {...props} />
    {!label ? null : <label className={sInput.label} htmlFor={id}>{label}</label>}
  </div>
);
