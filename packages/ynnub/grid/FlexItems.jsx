import type { ChildrenArray, Node } from 'react';
import FlexItem from './FlexItem';

type PropsType = {
  children: Node,
}

export default ({
  children,
  ...otherProps
}: PropsType): ChildrenArray<typeof FlexItem> => (
  children.map(child => <FlexItem {...otherProps}>{child}</FlexItem>)
)
