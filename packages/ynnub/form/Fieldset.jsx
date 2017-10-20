import type { Element, Node } from 'react';

type PropsType = {
  legend?: Node,
  children: Node,
};

export default ({ legend, children }): Element<'fieldset'> => <fieldset>
  {legend && <legend>{legend}</legend>}
  {children}
</fieldset>
