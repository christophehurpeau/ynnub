import type { Element, Node } from 'react';
import s from '@material/button/dist/mdc.button.min.css';

type PropsType = {
  className?: string,
  dark?: ?boolean,
  children: Node,
}

export default ({
  className,
  dark,
  children,
  ...otherProps
}: PropsType): Element<'div'> => (
  <div {...otherProps} className={s['mdc-theme--dark']}>
    {children}
  </div>
)
