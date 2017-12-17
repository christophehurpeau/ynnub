import type { Node } from 'react';
import t from './typography';

type PropsType = {
  as?: string,
  children: Node,
  className?: string,
}

export default ({ as: As = 'h1', children, className, ...rest}: PropsType) =>
  <As className={`${t.title}${className ? ' ' + className : ''}`} {...rest}>{children}</As>;
