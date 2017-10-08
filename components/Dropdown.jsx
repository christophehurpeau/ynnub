import Button from './Button';
import List from './List';
import s from './dropdown.scss';
import type { ReactNodeType } from '../types';

export { ListItem } from './List';

type PropsType = {
  tagName?: null,
  className?: string,
  label: ReactNodeType,
  button?: ?boolean,
  disabled?: ?boolean,
  children: ReactNodeType,
}

export default ({
  as: AsType = 'div',
  className,
  label,
  button,
  disabled,
  children,
  ...otherProps
}: PropsType): ReactNodeType => {
  if (!button) {
    return (
      <AsType
        className={[
          s.dropdownContainer,
          s.dropdown,
          disabled && s.disabled,
          className,
        ].filter(Boolean).join(' ')}
      >
        {label}
        <span key="arrow" className={s.arrow}>▼</span>
        <List className={s.list} {...otherProps}>
          {children}
        </List>
      </AsType>
    )
  } else {
    return (
      <AsType
        className={[
          s.dropdownContainer,
          disabled && s.disabled,
          className,
        ].filter(Boolean).join(' ')}
      >
        {!button ? label : (
          <Button
            label={[label, <span key="arrow" className={s.arrow}>▼</span>]}
            disabled={disabled}
            className={[
              s.dropdown,
              s.button,
              disabled && s.disabled,
            ].filter(Boolean).join(' ')}
            {...otherProps}
          />
        )}
        <List className={s.list}>
          {children}
        </List>
      </AsType>
    )
  }
};
