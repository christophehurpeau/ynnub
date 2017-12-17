import type { Node } from 'react';
import t from './typography.global.scss';

type PropsType = {
  children: Node,
  className?: string,
}

export default ({ children, className, ...rest}: PropsType) =>
  <span className={`${t.caption}${className ? ' ' + className : ''}`} {...rest}>{children}</span>;
