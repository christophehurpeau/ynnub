import VerticalList from './VerticalList';
import s from './nav.scss';

export default ({ className, ...props }) => (
  <VerticalList
    links
    {...props}
    className={s.nav + (className ? ` ${className}` : '')}
  />
);
