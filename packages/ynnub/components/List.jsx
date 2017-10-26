import type { Element, ElementType, Node } from 'react';
import './list.global.scss';

export ListItem from './ListItem';

type ListDividerPropsType = {|
  inset?: boolean,
|};

export const ListDivider = ({ inset }: ListDividerPropsType) =>
  <li role="separator" className={`mdc-list-divider${!inset ? '' : ` mdc-list-divider--inset` }`} />;

type PropsType = {
  as?: ElementType,
  className?: string,
  twoLine?: ?boolean,
  multiline?: null,
  avatar?: ?boolean,
  dense?: ?boolean,
  links?: null,
  children: Node,
}

export default ({
  as: As = 'ul',
  className,
  avatar,
  dense,
  twoLine,
  children,
  ...otherProps
}: PropsType): Element<'ul' | 'ol'> => {
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
    return <ul>{list}</ul>;
  }

  return list;
};
