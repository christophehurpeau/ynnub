import '../interactions/interactions.global.scss';
import s from './button.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  className: ?string,
  containerClassName: ?string,
  icon: ?ReactNodeType,
  label: ?ReactNodeType,
  href: ?string,
  flat: ?boolean,
  disabled: ?boolean,
}

export default ({
  className,
  containerClassName,
  icon,
  label,
  children,
  href,
  flat,
  disabled,
  ...otherProps
}: PropsType): ReactNodeType => {
  const TagName = href ? 'a' : 'button';
  if (TagName === 'button' && disabled) otherProps = { disabled, ...otherProps };
  if (!label) label = children;
  return (
    <TagName
      href={href}
      className={[
        s.container,
        disabled && s.containerDisabled,
        containerClassName,
      ].filter(Boolean).join(' ')}
      {...otherProps}
    >
      <span
        className={[
          s.button,
          flat && s.flat,
          disabled && s.disabled,
          className,
        ].filter(Boolean).join(' ')}
      >
        {icon && <span className={s.icon}>{icon}</span>}
        {label}
      </span>
    </TagName>
  );
}
