import { Children, cloneElement } from 'react';
import Heading from '../components/Heading';
import s from './RadioSelect.scss';

export Radio from './Radio';

type PropsType = {
  icon?: ?string,
  label?: ?Node,
  prefixId: string,
};

export default ({ icon, label, children, value, prefixId, ...props}) => {
  children = Children.map(children, child => cloneElement(child, {
    selected: value === child.props.value,
    id: `${prefixId}-${value}`,
    ...props,
    ...child.props,
  }));

  return (
    <div className={s.container}>
      <Heading icon={icon} value={label} type="subheading2" />
      {children}
    </div>
  )
};
