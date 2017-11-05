import type { Element, Node, ElementType } from 'react';
import Icon, { type IconType } from './Icon';
import { SpinnerIcon } from './Spinner';
import './button.global.scss';

const clickDisabled = (e) => {
  e.preventDefault();
  return false;
};

const createConfirm = (confirm: string, onClick: ?Function) => {
  console.log('createConfirm');
  return (e) => {
    console.log('clicked');
    if (!window.confirm(confirm)) {
      return clickDisabled(e);
    }

    if (onClick) onClick();
  }
};

type PropsType = {
  as?: ElementType,
  className?: string,
  containerClassName?: null,
  icon?: ?IconType,
  label?: ?Node,
  href?: string,
  flat?: ?boolean,
  unelevated?: ?boolean,
  stroked?: ?boolean,
  compact?: ?boolean,
  dense?: ?boolean,
  disabled?: ?boolean,
  inProgress?: ?boolean,
  confirm?: ?string,
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
}: PropsType): Element => {
  if (As !== 'button' && disabled) throw new Error('Cannot disable a link');
  if (!label) label = children;
  return (
    <As
      href={href}
      className={[
        'mdc-button',
        !label && 'mdl-button--icon',
        unelevated && 'mdc-button--unelevated',
        label && !flat && !unelevated && 'mdc-button--raised',
        stroked && 'mdc-button--stroked',
        compact && 'mdc-button--compact',
        dense && 'mdc-button--dense',
        className,
      ].filter(Boolean).join(' ')}
      disabled={inProgress || disabled}
      onClick={inProgress ? clickDisabled : (confirm ? createConfirm(confirm, onClick) : onClick)}
      {...otherProps}
    >
      {(inProgress || icon) && <Icon key="icon" value={inProgress ? <SpinnerIcon /> : icon} className="mdc-button__icon" />}
      {label}
    </As>
  );
}
