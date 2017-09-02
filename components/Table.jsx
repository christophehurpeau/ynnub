import s from './table.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  centered?: ?boolean,
  bordered?: ?boolean,
  striped?: ?boolean,
  children: Array<any>,
}

export default ({
  className,
  bordered,
  striped,
  centered,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <table
    className={[
      s.table,
      bordered && s.bordered,
      striped && s.striped,
      centered && s.centered,
      className,
    ].filter(Boolean).join(' ')}
    {...otherProps}
  >
    {children}
  </table>
)
