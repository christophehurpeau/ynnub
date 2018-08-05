import { ReactNode } from 'react';
import classNames from 'classnames';
import typo from '../text/typography';
import s from './heading.scss';
import Icon, { IconType } from './Icon';

export interface Props {
  type: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading2' | 'subheading1',
  icon?: IconType,
  value: ReactNode,
  className?: string,
  [prop: string]: any,
}

export default ({ type, icon, value, className, ...props }: Props) => (
  <div className={classNames(typo[type], className)} {...props}>
    {icon && <Icon className={s.icon} value={icon} />}
    {value}
  </div>
);
