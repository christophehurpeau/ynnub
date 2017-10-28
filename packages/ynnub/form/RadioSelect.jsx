import { Children, cloneElement } from 'react';
import { FlexGrid } from '../grid/flex';
import Heading from '../components/Heading';
import s from './RadioSelect.scss';

export Radio from './Radio';

type PropsType = {
  label?: ?Node,
  headingType?: ?string,
  prefixId: string,
  flex?: boolean,
  flexFlow?: ?string,
  name: string,
};

export default ({ label, headingType = "subheading2", children, value, prefixId, flex, flexFlow = 'row wrap', ...props}) => {
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
