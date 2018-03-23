import List from './List';
import s from './list/vertical.scss';

export ListItem from './ListItem';

type PropsType = {
  className?: string,
}

export default ({ className, children, ...props }: PropsType) => (
  <List
    className={[s.vertical, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </List>
);
