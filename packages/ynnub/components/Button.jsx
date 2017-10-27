import type { Element, Node, ElementType } from 'react';
import './button.global.scss';

type PropsType = {
  as?: ElementType,
  className?: string,
  containerClassName?: null,
  icon?: ?string,
  label?: ?Node,
  href?: string,
  flat?: ?boolean,
  unelevated?: ?boolean,
  stroked?: ?boolean,
  compact?: ?boolean,
  dense?: ?boolean,
  disabled?: ?boolean,
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
  ...otherProps
}: PropsType): Element => {
  if (As !== 'button' && otherProps.disabled) throw new Error('Cannot disable a link');
  if (!label) label = children;
  return (
    <As
      href={href}
      className={[
        'mdc-button',
        unelevated && 'mdc-button--unelevated',
        !flat && !unelevated && 'mdc-button--raised',
        stroked && 'mdc-button--stroked',
        compact && 'mdc-button--compact',
        dense && 'mdc-button--dense',
        className,
      ].filter(Boolean).join(' ')}
      {...otherProps}
    >
      {icon && <span key="icon" className="material-icons mdc-button__icon">{icon}</span>}
      {label}
    </As>
  );
}
