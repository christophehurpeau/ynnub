import classNames from 'classnames';
import List from './List';
import s from './list/vertical.scss';

export { default as ListItem } from './ListItem';

export interface Props {
  className?: string,
  [prop: string]: any,
}

export default ({ className, children, ...props }: Props) => (
  <List
    className={classNames(s.vertical, className)}
    {...props}
  >
    {children}
  </List>
);
