import './button.global.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  containerClassName?: null,
  icon?: ?ReactNodeType,
  label?: ?ReactNodeType,
  href?: string,
  flat?: ?boolean,
  unelevated?: ?boolean,
  stroked?: ?boolean,
  compact?: ?boolean,
  dense?: ?boolean,
  disabled?: ?boolean,
}

export default ({
  className,
  icon,
  label,
  children,
  href,
  unelevated,
  flat,
  stroked,
  compact,
  dense,
  ...otherProps
}: PropsType): ReactNodeType => {
  const TagName = href ? 'a' : 'button';
  if (TagName !== 'button' && otherProps.disabled) throw new Error('Cannot disable a link');
  if (!label) label = children;
  return (
    <TagName
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
      {icon && <span key="icon" className="mdc-button__icon">{icon}</span>}
      {label}
    </TagName>
  );
}
