import {Children, cloneElement, ReactElement, ReactNode} from 'react';
import { FlexGrid } from '../grid/flex';
import Heading from '../components/Heading';
import Radio from "./Radio";
import s from './RadioSelect.scss';

export { Radio };

export interface Props {
  label?: ReactNode,
  headingType?: string,
  prefixId: string,
  flex?: boolean,
  flexFlow?: string,
  name: string,
  children: Array<ReactElement<Radio>>,
  value: any,
  [prop: string]: any,
};

export default ({ label, headingType = "subheading2", children, value, prefixId, flex, flexFlow = 'row wrap', ...props }: Props) => {
  children = Children.map(children, child => cloneElement(child, {
    checked: value === child.props.value,
    id: `${prefixId}-${child.props.value}`,
    ...props,
    ...child.props,
    className: `${s.radio} ${child.props.className || ''}`
  }));

  return (
    <div className={s.container}>
      {label && <Heading className={s.heading} value={label} type={headingType} />}
      {!flex ? children : <FlexGrid className={s.flexContainer} flow={flexFlow}>{children}</FlexGrid>}
    </div>
  )
};
