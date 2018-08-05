import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

export interface Props {
  id: string,
  label?: ReactNode,
  children: ReactNode,
  [prop: string]: any,
};

export default ({ id, icon, label, children, ...props }: Props): ReactElement<'div'> => (
  <div
    className={classNames(
      sInput.input,
      sInput.select,
      icon && sInput.withIcon,
      !label && sInput.noMargin,
    )}
  >
    <select id={id} {...props}>
      {children}
    </select>
    {!label ? null : <label className={sInput.label} htmlFor={id}>{label}</label>}
    {!icon ? null : <label className={`material-icons ${sInput.icon}`} htmlFor={id}>{icon}</label>}
  </div>
);
