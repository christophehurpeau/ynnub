import type { Element, ElementType, Node } from 'react';
import Button from './Button';
import List from './List';
import s from './dropdown.scss';

export { ListItem } from './List';

type PropsType = {
  as?: ElementType,
  tagName?: null,
  className?: string,
  label: Node,
  button?: ?boolean,
  disabled?: ?boolean,
  children: Node,
}

export default ({
  as: AsType = 'div',
  className,
  label,
  button,
  disabled,
  children,
  ...otherProps
}: PropsType): Element => {
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
          s.resetButton,
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
        <List className={s.list} dense={otherProps.dense}>
          {children}
        </List>
      </AsType>
    )
  }
};
