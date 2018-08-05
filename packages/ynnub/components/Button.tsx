import { ReactElement, ReactNode, ReactType, SyntheticEvent } from 'react';
import classNames from 'classnames';
import Icon, { IconType } from './Icon';
import { SpinnerIcon } from './Spinner';
import './button.global.scss';

const clickDisabled = (e: SyntheticEvent<HTMLAnchorElement | HTMLButtonElement | any>): false => {
  e.preventDefault();
  return false;
};

type OnClick = (e: any) => any;

const createConfirm = (confirm: string, onClick?: OnClick) => {
  return (e: SyntheticEvent<HTMLAnchorElement | HTMLButtonElement | any>): false | void => {
    console.log('clicked');
    if (!window.confirm(confirm)) {
      return clickDisabled(e);
    }

    if (onClick) onClick(e);
  }
};

export interface Props<T> {
  as?: T,
  className?: string,
  containerClassName?: never,
  icon?: IconType,
  label?: ReactNode,
  href?: string,
  flat?: boolean,
  unelevated?: boolean,
  stroked?: boolean,
  compact?: boolean,
  dense?: boolean,
  disabled?: boolean,
  inProgress?: boolean,
  confirm?: string,
  children?: ReactNode,
  [prop: string]: any,
}

interface ButtonProps {
  [prop: string]: any
}

export default <T extends ReactType<ButtonProps>>({
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
}: Props<T>): ReactElement<T> => {
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
      onClick={inProgress ? clickDisabled : (confirm ? createConfirm(confirm, onClick) : onClick)}
      {...otherProps}
    >
      {(inProgress || icon) && <Icon key="icon" value={inProgress ? <SpinnerIcon /> : icon} className="mdc-button__icon" />}
      {label}
    </As>
  );
}
