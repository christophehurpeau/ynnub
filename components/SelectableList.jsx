import List from './List';
import s from './list/base.scss';
import sSelectable from './selectable.scss';

export { ListItem } from './List';

type PropsType = {
  className?: string,
  ordered?: ?boolean,
}

export default ({ className, children, props }: PropsType) => (
  <List
    className={[s.list, s.links, sSelectable.selectable, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </List>
);
