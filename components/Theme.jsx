import s from '@material/button/dist/mdc.button.min.css';
import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  dark?: ?boolean,
}

export default ({
  className,
  dark,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <div {...otherProps} className={s['mdc-theme--dark']}>
    {children}
  </div>
)
