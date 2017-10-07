import s from './block.scss';
import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  primary?: ?boolean,
  children?: ?ReactNodeType,
}

export default ({
  as: As = 'div',
  className,
  primary,
  children,
}: PropsType): ReactNodeType => {
  return <As className={[
    s.block,
    primary && s.primary,
    className,
  ].filter(Boolean).join(' ')}>{children}</As>
}
