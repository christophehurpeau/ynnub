import React from 'react';
import './list.global.scss';
import type { TagNameOrReactComponentType, ReactNodeType, ReactComponentType } from '../types';
import wrapWithClassName from '../utils/wrapWithClassName';

type PropsType = {
  as?: TagNameOrReactComponentType,
  className?: ?string,
  startDetail?: ?ReactNodeType | ReactComponentType,
  endDetail?: ?ReactNodeType | ReactComponentType,
  text: ReactNodeType,
  secondaryText?: ?ReactNodeType,
  badge?: null,
  children?: ?ReactNodeType,
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
}: PropsType): ReactNodeType => {
  const item = <As
    href={href}
    className={[
      'mdc-list-item',
      className,
    ].filter(Boolean).join(' ')}
    {...otherProps}
  >
    {wrapWithClassName(startDetail, 'mdc-list-item__start-detail')}
    <span className={'mdc-list-item__text'}>
      {text}
      {secondaryText && <span className={'mdc-list-item__text__secondary'}>{secondaryText}</span>}
      {children}
    </span>
    {wrapWithClassName(endDetail, 'mdc-list-item__end-detail')}
  </As>;


  if (As !== 'li') {
    return <li>{item}</li>;
  }

  return item;
}
