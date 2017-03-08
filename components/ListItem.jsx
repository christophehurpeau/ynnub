import type { ReactNodeType } from '../types';
import Badge from './Badge';

type PropsType = {
  badge: ?ReactNodeType,
  children: Array<any>,
}

export default ({
  badge,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <li
    {...otherProps}
  >
    {children}
    {badge == null ? null : ' '}
    {badge == null ? null : <Badge>{badge}</Badge>}
  </li>
)
