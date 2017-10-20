import type { Element, Node } from 'react';
import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

type PropsType = {
  id: string,
  label?: Node,
  children: Node,
};

export default ({ id, label, children, ...props }): Element<'div'> => (
  <div
    className={[
      sInput.input,
      sInput.select,
      !label && sInput.noMargin,
    ].filter(Boolean).join(' ')}
  >
    <select id={id} {...props}>
      {children}
    </select>
    {!label ? null : <label htmlFor={id}>{label}</label>}
  </div>
);
