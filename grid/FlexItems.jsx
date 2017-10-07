import type { ReactNodeType } from '../types';
import FlexItem from './FlexItem';

type PropsType = {
  children: ReactNodeType,
}

export default ({
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  children.map(child => <FlexItem {...otherProps}>{child}</FlexItem>)
)
