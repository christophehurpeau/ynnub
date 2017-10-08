import type { ReactNodeType } from '../types';

type PropsType = {
  className?: string,
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  grow?: true | Number,
  shrink?: true | Number,
  basis?: string,
  order?: Number,
  padding?: string,
  children: ReactNodeType,
}

const valueToNumber = value => {
  if (value === true) return 1;
  return value;
};

export default ({
  align,
  grow = 0,
  shrink = 0,
  basis = 'auto',
  order,
  padding,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <div
    style={{ alignSelf: align, flex: `${valueToNumber(grow)} ${valueToNumber(shrink)} ${basis}`, order, padding }}
    {...otherProps}
  >
    {children}
  </div>
)
