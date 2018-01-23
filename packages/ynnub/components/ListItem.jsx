import React from 'react';
import type { ComponentType, Element, ElementType, Node } from 'react';
import './list.global.scss';
import wrapWithClassName from '../utils/wrapWithClassName';

type PropsType = {
  as?: ElementType,
  className?: ?string,
  startDetail?: Node | ComponentType,
  endDetail?: Node | ComponentType,
  text: Node,
  secondaryText?: Node,
  badge?: null,
  children?: Node,
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
}: PropsType): Element<'li'> => {
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
