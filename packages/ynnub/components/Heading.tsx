import classNames from 'classnames';
import React, { ReactNode } from 'react';
import typo from '../text/typography';
import s from './heading.scss';
import Icon, { IconType } from './Icon';

export type Level =
  | 'display4'
  | 'display3'
  | 'display2'
  | 'display1'
  | 'headline'
  | 'title'
  | 'subheading2'
  | 'subheading1';

export interface Props {
  level: Level;
  icon?: IconType;
  value: ReactNode;
  className?: string;
  [prop: string]: any;
}

export default ({ level, icon, value, className, ...props }: Props) => (
  <div className={classNames(typo[level], className)} {...props}>
    {icon && <Icon className={s.icon} value={icon} />}
    {value}
  </div>
);
