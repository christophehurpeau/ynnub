import sBadge from './badge.scss';

export default ({ children, ...otherProps }) => (
  <span className={sBadge.badge} {...otherProps}>{children}</span>
);
