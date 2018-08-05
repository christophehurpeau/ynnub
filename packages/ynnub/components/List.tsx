import { ReactElement, ReactType, ReactNode } from 'react';
import classNames from 'classnames';
import './list.global.scss';

export { default as ListItem } from './ListItem';

interface ListDividerPropsType {
  inset?: boolean,
  children: void,
}

export const ListDivider = ({ inset }: ListDividerPropsType) =>
  <li role="separator" className={`mdc-list-divider${!inset ? '' : ` mdc-list-divider--inset` }`} />;

export interface Props {
  as?: ReactType,
  className?: string,
  twoLine?: boolean,
  multiline?: null,
  avatar?: boolean,
  dense?: boolean,
  interactive?: boolean,
  links?: null,
  children: ReactNode,
  [prop: string]: any,
}

export default ({
  as: As = 'ul',
  className,
  avatar,
  dense,
  interactive,
  twoLine,
  children,
  ...otherProps
}: Props): ReactElement<'ul' | 'ol'> => {
  const list = <As
    className={classNames(
      'mdc-list',
      avatar && 'mdc-list--avatar-list',
      dense && 'mdc-list--dense',
      twoLine && 'mdc-list--two-line',
      !interactive && 'mdc-list--non-interactive',
      className,
    )}
    {...otherProps}
  >
    {children}
  </As>;

  if (As !== 'ul' && As !== 'ol') {
    return <ul>{list}</ul>;
  }

  return list;
};
