import classNames from 'classnames';
import React, { ReactType, ReactNode } from 'react';
import { StartDetailProps, EndDetailProps } from './ListItem';
import './list.global.scss';

export { default as ListItem } from './ListItem';
export type ListItemStartDetailProps = StartDetailProps;
export type ListItemEndDetailProps = EndDetailProps;

interface ListDividerPropsType {
  inset?: boolean;
  children?: never;
}

export const ListDivider = ({ inset }: ListDividerPropsType) => (
  <li
    role="separator"
    className={`mdc-list-divider${!inset ? '' : ` mdc-list-divider--inset`}`}
  />
);

export interface Props {
  as?: ReactType;
  className?: string;
  twoLine?: boolean;
  multiline?: null;
  avatar?: boolean;
  dense?: boolean;
  interactive?: boolean;
  links?: null;
  children: ReactNode;
  [prop: string]: any;
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
}: Props) => {
  const list = (
    <As
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
    </As>
  );

  if (As !== 'ul' && As !== 'ol') {
    return <ul>{list}</ul>;
  }

  return list;
};
