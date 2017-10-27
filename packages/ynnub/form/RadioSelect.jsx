import { Children, cloneElement } from 'react';
import Heading from '../components/Heading';

export Radio from './Radio';

type PropsType = {
  icon?: ?string,
  label?: ?Node,
};

export default ({ icon, label, children, ...props}) => {
  children = Children.map(children, child => cloneElement(child, { ...props, ...child.props }));

  return (
    <div>
      <Heading icon={icon} value={label} type="subheading2" />
      {children}
    </div>
  )
};
