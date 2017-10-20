import type { Element, Node } from 'react';
import s from './block.scss';

type PropsType = {
  className?: string,
  primary?: ?boolean,
  children?: Node,
}

export default ({
  as: As = 'div',
  className,
  primary,
  children,
}: PropsType): Element => {
  return <As className={[
    s.block,
    primary && s.primary,
    className,
  ].filter(Boolean).join(' ')}>{children}</As>
}
