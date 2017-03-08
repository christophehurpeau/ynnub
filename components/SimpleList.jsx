import List from './List';
import s from './list/simple.scss';

export { ListItem } from './List';

type PropsType = {
  className: ?string,
  ordered: ?boolean,
}

export default ({ className, ordered, children, props }: PropsType) => (
  <List
    className={[s.simple, ordered && s.ordered, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </List>
);
