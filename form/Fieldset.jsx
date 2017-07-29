import type { ReactNodeType } from '../types';

type PropsType = {
  legend: ?ReactNodeType,
  children: ReactNodeType,
};

export default ({ legend, children }) => <fieldset>
  {legend && <legend>{legend}</legend>}
  {children}
</fieldset>

