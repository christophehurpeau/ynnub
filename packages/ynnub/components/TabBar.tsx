import classNames from 'classnames';
import React, { ReactType, ReactNode } from 'react';
import './tabbar.global.scss';

export interface Props {
  as?: ReactType;
  className?: string;
  children: ReactNode;
  [prop: string]: any;
}

export default ({
  as: As = 'nav',
  className,
  children,
  ...otherProps
}: Props) => (
  <As className={classNames('mdc-tab-bar', className)} {...otherProps}>
    {children}
  </As>
);

export interface TabItemPropsType {
  as?: ReactType;
  className?: string;
  active?: boolean;
  label?: ReactNode;
  children?: ReactNode;
  [prop: string]: any;
}

export const Tab = ({
  as: As = 'a',
  className,
  label,
  active,
  children,
  ...otherProps
}: TabItemPropsType) => (
  <As
    className={classNames('mdc-tab', active && 'mdc-tab--active', className)}
    {...otherProps}
  >
    {children || label}
  </As>
);
