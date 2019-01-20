import React, { ReactChild } from 'react';
import FlexItem, { FlexItemProps } from './FlexItem';

export { FlexItem };

export interface Props extends FlexItemProps {
  children: Array<ReactChild>;
}

export default ({ children, ...otherProps }: Props) => (
  // https://github.com/Microsoft/TypeScript/issues/21699
  <>
    {children.map((child, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <FlexItem key={index} {...otherProps}>
        {child}
      </FlexItem>
    ))}
  </>
);
