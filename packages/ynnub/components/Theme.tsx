import { ReactElement, ReactNode } from 'react';
import s from '@material/button/dist/mdc.button.min.css';

export interface Props {
  className?: string,
  dark?: boolean,
  children: ReactNode,
  [prop: string]: any,
}

export default ({
  className,
  dark,
  children,
  ...otherProps
}: Props): ReactElement<'div'> => (
  <div {...otherProps} className={s['mdc-theme--dark']}>
    {children}
  </div>
)
