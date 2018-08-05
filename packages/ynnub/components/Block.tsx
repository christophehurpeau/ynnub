import { ReactElement, ReactType } from 'react';
import classNames from 'classnames';
import s from './block.scss';

export interface Props<T extends ReactType> {
  as: ReactType,
  className?: string,
  primary?: boolean,
  children?: ReactNode,
}

export default <T extends ReactType>({
  as: As = 'div',
  className,
  primary,
  children,
}: Props<T>): ReactElement<T> => {
  return <As className={classNames(
    s.block,
    primary && s.primary,
    className,
  )}>{children}</As>
}
