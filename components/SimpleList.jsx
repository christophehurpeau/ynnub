import List from './List';
import s from './list/simple.scss';

type PropsType = {
  className?: string,
  ordered?: ?boolean,
}

export default ({ className, ordered, children, props }: PropsType) => {
  return <List
    as={ordered ? 'ol' : 'ul'}
    className={[s.simple, ordered && s.ordered, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </List>;
};
