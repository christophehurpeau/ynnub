import classNames from 'classnames';
import React, { ReactChild } from 'react';
import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

export interface InputTextProps {
  children?: never;
  id: string;
  type?: 'text' | 'radio' | 'checkbox' | string;
  icon?: string;
  label?: ReactChild;
  placeholder?: string;
  className?: string;
  [prop: string]: any;
}

export default ({
  id,
  type = 'text',
  icon,
  label,
  title,
  placeholder = '',
  className,
  ...props
}: InputTextProps) => (
  <div
    className={classNames(
      sInput.input,
      type !== 'radio' && type !== 'checkbox' && sInput.text,
      type && (sInput as any)[type],
      icon && sInput.withIcon,
      !label && sInput.noMargin,
      className,
    )}
  >
    <input id={id} type={type} placeholder={placeholder} {...props} />
    {!label ? null : (
      <label className={sInput.label} htmlFor={id} title={title}>
        {label}
      </label>
    )}
    {!icon ? null : (
      <label
        className={`material-icons ${sInput.icon}`}
        htmlFor={id}
        title={title}
      >
        {icon}
      </label>
    )}
  </div>
);
