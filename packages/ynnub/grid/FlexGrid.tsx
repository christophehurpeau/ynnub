import { Element, ReactNode } from 'react';
import classNames from 'classnames';
import s from './_flex.scss';

export interface Props {
  className?: string,
  responsive?: boolean,
  withGutter?: boolean,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch',
  flow?: 'row nowrap' | 'row wrap' | 'row wrap-reverse' |
    'row-reverse nowrap' | 'row-reverse wrap' | 'row-reverse wrap-reverse' |
    'column nowrap' | 'column wrap' | 'column wrap-reverse' |
    'column-reverse nowrap' | 'column-reverse wrap' | 'column-reverse wrap-reverse',
  children: ReactNode,
  [prop: string]: any,
}

export default ({
  className,
  responsive,
  withGutter,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignContent = 'stretch',
  flow = 'row nowrap',
  children,
  ...otherProps
}: Props): Element<'div'> => (
  <div
    className={classNames(
      s.flex,
      withGutter && s.withGutter,
      responsive && s.responsive,
      className,
    )}
    style={{ justifyContent, alignItems, alignContent, flexFlow: flow }}
    {...otherProps}
  >
    {children}
  </div>
)
