import { Element, ReactType, ReactNode } from 'react';
import classNames from 'classnames';
import Button from './Button';
import List from './List';
import s from './dropdown.scss';

export { ListItem } from './List';

export interface Props {
  as?: ReactType,
  tagName?: null,
  className?: string,
  label: ReactNode,
  button?: boolean,
  buttonClassName?: string,
  disabled?: boolean,
  children: ReactNode,
  [prop: string]: any,
}

export default ({
  as: AsType = 'div',
  className,
  label,
  button,
  buttonClassName,
  disabled,
  children,
  ...otherProps
}: Props): Element => {
  if (!button) {
    return (
      <AsType
        className={classNames(
          s.dropdownContainer,
          s.dropdown,
          disabled && s.disabled,
          className,
        )}
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
        className={classNames(
          s.dropdownContainer,
          s.resetButton,
          disabled && s.disabled,
          className,
          )}
      >
        <Button
          label={[label, <span key="arrow" className={s.arrow}>▼</span>]}
          disabled={disabled}
          className={classNames(
            s.dropdown,
            s.button,
            disabled && s.disabled,
            buttonClassName,
          )}
          {...otherProps}
        />
        <List className={s.list} dense={otherProps.dense}>
          {children}
        </List>
      </AsType>
    )
  }
};
