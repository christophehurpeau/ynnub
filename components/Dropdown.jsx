import sList from './list/base.scss';
import Button from './Button';
import s from './dropdown.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  tagName?: null,
  className?: string,
  label: ReactNodeType,
  button?: ?boolean,
  flat?: ?boolean,
  disabled?: ?boolean,
  links?: ?boolean,
  children: ReactNodeType,
}

export default ({
  as: AsType = 'div',
  className,
  label,
  button,
  flat,
  disabled,
  links,
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
        {...otherProps}
      >
        {label}
        <ul className={`${sList.list} ${s.list} ${links ? sList.links : ''}`}>
          {children}
        </ul>
      </AsType>
    )
  } else {
    return (
      <AsType
        className={[
          s.dropdownContainer,
          s.dropdownContainerButton,
          disabled && s.disabled,
          className,
        ].filter(Boolean).join(' ')}
        {...otherProps}
      >
        {!button ? label : (
          <Button
            label={label}
            flat={flat}
            disabled={disabled}
            className={[
              s.dropdown,
              s.button,
              flat && s.flat,
              disabled && s.disabled,
            ].filter(Boolean).join(' ')}
          />
        )}
        <ul className={`${sList.list} ${s.list} ${links ? sList.links : ''}`}>
          {children}
        </ul>
      </AsType>
    )
  }
};
