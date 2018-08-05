import { ReactElement, ReactNode } from 'react';

export interface Props {
  className?: string,
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  grow?: true | number,
  shrink?: true | number,
  basis?: string,
  order?: number,
  padding?: string,
  children: ReactNode,
  [prop: string]: any,
}

const valueToNumber = (value: any) => {
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
}: Props): ReactElement<'div'> => (
  <div
    style={{ alignSelf: align, flex: `${valueToNumber(grow)} ${valueToNumber(shrink)} ${basis}`, order, padding }}
    {...otherProps}
  >
    {children}
  </div>
)
