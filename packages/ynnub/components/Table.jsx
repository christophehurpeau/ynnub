import type { Element, Node } from 'react';
import s from './table.scss';

type PropsType = {
  className?: string,
  centered?: ?boolean,
  bordered?: ?boolean,
  striped?: ?boolean,
  children: Node,
}

export default ({
  className,
  bordered,
  striped,
  centered,
  children,
  ...otherProps
}: PropsType): Element<'table'> => (
  <table
    className={[
      s.table,
      bordered && s.bordered,
      striped && s.striped,
      centered && s.centered,
      className,
    ].filter(Boolean).join(' ')}
    {...otherProps}
  >
    {children}
  </table>
)
