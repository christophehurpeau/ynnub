import { Children, cloneElement } from 'react';
import Label from './Label';

export Radio from './Radio';

type PropsType = {
  icon?: ?string,
  label?: ?Node,
};

export default ({ icon, label, children, ...props}) => {
  children = Children.map(children, child => cloneElement(child, { ...props, ...child.props }));

  return (
    <div>
      <Label icon={icon} value={label} />
      {children}
    </div>
  )
};
