import type { Node } from 'react';
import t from './typography';

type PropsType = {
  as?: string,
  children: Node,
  className?: string,
}

export default ({ as: As = 'span', children, className, ...rest}: PropsType) =>
  <As className={`${t.caption}${className ? ' ' + className : ''}`} {...rest}>{children}</As>;
