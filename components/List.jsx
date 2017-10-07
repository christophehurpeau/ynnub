import './list.global.scss';
import type { ReactNodeType } from '../types';

export ListItem from './ListItem';

type ListDividerPropsType = {|
  inset?: boolean,
|};

export const ListDivider = ({ inset }: ListDividerPropsType) =>
  <li role="separator" className={`mdc-list-divider${!inset ? '' : ` mdc-list-divider--inset` }`} />;

type PropsType = {
  as?: string,
  className?: string,
  twoLine?: ?boolean,
  multiline?: null,
  avatar?: ?boolean,
  dense?: ?boolean,
  links?: null,
  children: ReactNodeType,
}

export default ({
  as: As = 'ul',
  className,
  avatar,
  dense,
  twoLine,
  links,
  children,
  ...otherProps
}: PropsType): ReactNodeType => {
  const list = <As
    className={[
      'mdc-list',
      avatar && 'mdc-list--avatar-list',
      dense && 'mdc-list--dense',
      twoLine && 'mdc-list--two-line',
      className,
    ].filter(Boolean).join(' ')}
    {...otherProps}
  >
    {children}
  </As>;

  if (As !== 'ul' && As !== 'ol') {
    return <li>{list}</li>;
  }

  return list;
};
