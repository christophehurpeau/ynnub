import React, { ReactType, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import './tabbar.global.scss';

export interface Props {
  as?: ReactType,
  className?: string,
  children: ReactNode,
  [prop: string]: any,
}

export default ({
  as: As = 'nav',
  className,
  children,
  ...otherProps
}: Props): ReactElement<any> => (
  <As
    className={classNames(
      'mdc-tab-bar',
      className,
    )}
    {...otherProps}
  >
    {children}
  </As>
);

export type TabItemPropsType = {
  as?: ReactType,
  className?: string,
  active?: boolean,
  label?: ReactNode,
  children?: ReactNode,
  [prop: string]: any,
}

export const Tab = ({
  as: As = 'a',
  className,
  label,
  active,
  children,
  ...otherProps
}: TabItemPropsType): ReactElement<any> => (
  <As className={classNames(
    'mdc-tab',
    active && 'mdc-tab--active',
    className,
  )} {...otherProps}>
    {children || label}
  </As>
);
