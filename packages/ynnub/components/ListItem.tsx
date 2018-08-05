import React from 'react';
import classNames from 'classnames';
import { ComponentType, ReactElement, ReactType, ReactNode } from 'react';
import './list.global.scss';
import wrapWithClassName from '../utils/wrapWithClassName';

export interface Props {
  as?: ReactType,
  className?: string,
  startDetail?: ReactNode | ComponentType,
  endDetail?: ReactNode | ComponentType,
  text: ReactNode,
  secondaryText?: ReactNode,
  badge?: null,
  href?: string,
  children?: ReactNode,
  [prop: string]: any,
}

export default ({
  href,
  as: As = href ? 'a' : 'li',
  className,
  startDetail,
  endDetail,
  text,
  secondaryText,
  children,
  ...otherProps
}: Props): ReactElement<'li'> => {
  const item = <As
    href={href}
    className={classNames(
      'mdc-list-item',
      className,
    )}
    {...otherProps}
  >
    {wrapWithClassName(startDetail, 'mdc-list-item__start-detail')}
    <span className={'mdc-list-item__text'}>
      {text}
      {secondaryText && <span className={'mdc-list-item__secondary-text'}>{secondaryText}</span>}
      {children}
    </span>
    {wrapWithClassName(endDetail, 'mdc-list-item__end-detail')}
  </As>;


  if (As !== 'li') {
    return <li>{item}</li>;
  }

  return item;
}
