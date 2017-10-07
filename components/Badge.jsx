import sBadge from './badge.scss';

export default ({ value, children, ...otherProps }) => (
  <span className={sBadge.badge} {...otherProps}>{value || children}</span>
);
