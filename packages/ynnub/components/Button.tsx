import classNames from 'classnames';
import React, { ReactNode, ReactType, SyntheticEvent } from 'react';
import Icon, { IconType } from './Icon';
import { SpinnerIcon } from './Spinner';
import './button.global.scss';

const clickDisabled = (
  e: SyntheticEvent<HTMLAnchorElement | HTMLButtonElement | any>,
): false => {
  e.preventDefault();
  return false;
};

export interface ButtonProps {
  as?: ReactType;
  className?: string;
  containerClassName?: never;
  icon?: IconType;
  label?: ReactNode;
  href?: string;
  flat?: boolean;
  unelevated?: boolean;
  stroked?: boolean;
  compact?: boolean;
  dense?: boolean;
  disabled?: boolean;
  inProgress?: boolean;
  confirm?: never;
  children?: ReactNode;
  [prop: string]: any;
}

export default ({
  href,
  as: As = href ? 'a' : 'button',
  className,
  icon,
  label,
  children,
  unelevated,
  flat,
  stroked,
  compact,
  dense,
  inProgress,
  disabled,
  confirm,
  onClick,
  ...otherProps
}: ButtonProps) => {
  if (As !== 'button' && disabled) throw new Error('Cannot disable a link');
  if (!label) label = children;
  return (
    <As
      href={href}
      className={classNames(
        'mdc-button',
        !label && 'mdl-button--icon',
        unelevated && 'mdc-button--unelevated',
        label && !flat && !unelevated && 'mdc-button--raised',
        stroked && 'mdc-button--stroked',
        compact && 'mdc-button--compact',
        dense && 'mdc-button--dense',
        className,
      )}
      disabled={inProgress || disabled}
      onClick={inProgress ? clickDisabled : onClick}
      {...otherProps}
    >
      {(inProgress || icon) && (
        <Icon
          key="icon"
          value={(inProgress ? <SpinnerIcon /> : icon) as IconType}
          className="mdc-button__icon"
        />
      )}
      {label}
    </As>
  );
};
