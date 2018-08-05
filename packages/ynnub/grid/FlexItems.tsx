import { ReactElement, ReactChild } from 'react';
import FlexItem from './FlexItem';

export { FlexItem };

export interface Props {
  children: Array<ReactChild>,
  [prop: string]: any,
}

export default ({
  children,
  ...otherProps
}: Props): Array<ReactElement<FlexItem>> => (
  children.map(child => <FlexItem {...otherProps}>{child}</FlexItem>)
)
