import s from './_flex.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  responsive?: ?boolean,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch',
  flow?: 'row nowrap' | 'row wrap' | 'row wrap-reverse' |
    'row-reverse nowrap' | 'row-reverse wrap' | 'row-reverse wrap-reverse' |
    'column nowrap' | 'column wrap' | 'column wrap-reverse' |
    'column-reverse nowrap' | 'column-reverse wrap' | 'column-reverse wrap-reverse',
  children: Array<ReactNodeType>,
}

export default ({
  className,
  responsive,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignContent = 'stretch',
  flow = 'row nowrap',
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <div
    className={[
      s.flex,
      responsive && s.responsive,
      className,
    ].filter(Boolean).join(' ')}
    style={{ justifyContent, alignItems, alignContent, flexFlow: flow }}
    {...otherProps}
  >
    {children}
  </div>
)
