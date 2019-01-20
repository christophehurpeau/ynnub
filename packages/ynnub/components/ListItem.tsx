import classNames from 'classnames';
import React, { ComponentType, ReactType, ReactNode } from 'react';
import './list.global.scss';
import wrapWithClassName, {
  AsProps as WrapWithClassNameAsProps,
} from '../utils/wrapWithClassName';

export type StartDetailProps = WrapWithClassNameAsProps;
export type EndDetailProps = WrapWithClassNameAsProps;

export interface AsProps {
  href?: string;
  className: string;
  [prop: string]: any;
}

export interface Props {
  as?: ReactType<AsProps>;
  className?: string;
  startDetail?: ReactNode | ComponentType;
  endDetail?: ReactNode | ComponentType;
  text: ReactNode;
  secondaryText?: ReactNode;
  badge?: null;
  href?: string;
  children?: ReactNode;
  [prop: string]: any;
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
}: Props) => {
  const item = (
    <As
      href={href}
      className={classNames('mdc-list-item', className)}
      {...otherProps}
    >
      {wrapWithClassName(startDetail, 'mdc-list-item__graphic')}
      <span className="mdc-list-item__text">
        {text}
        {secondaryText && (
          <span className="mdc-list-item__secondary-text">{secondaryText}</span>
        )}
        {children}
      </span>
      {wrapWithClassName(endDetail, 'mdc-list-item__meta')}
    </As>
  );

  if (As !== 'li') {
    return <li>{item}</li>;
  }

  return item;
};
