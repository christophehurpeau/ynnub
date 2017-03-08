import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  id: string,
  label: ?ReactNodeType,
  children: ReactNodeType,
};

export default ({ id, label, children, ...props }) => (
  <div
    className={[
      sInput.input,
      sInput.select,
    ].filter(Boolean).join(' ')}
  >
    <select id={id} {...props}>
      {children}
    </select>
    {!label ? null : <label htmlFor={id}>{label}</label>}
  </div>
);
