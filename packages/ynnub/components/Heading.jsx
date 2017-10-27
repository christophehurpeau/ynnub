import { Node } from 'react';
import typo from '../text/typography';
import s from './heading.scss';

type PropsType = {
  type: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading2' | 'subheading1',
  icon?: ?string,
  value: Node,
};

export default ({ type, icon, value, className, ...props }: PropsType) => (
  <div className={`${typo[type]} ${className ? ` ${className}` : ''}`} {...props}>
    {icon && <span className={`material-icons ${s.icon}`}>{icon}</span>}
    {value}
  </div>
);
