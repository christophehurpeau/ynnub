import type { Element, ElementType, Node } from 'react';
import './tabbar.global.scss';

type PropsType = {
  as?: ElementType,
  className?: string,
  children: Node,
}

export default ({
  as: As = 'nav',
  className,
  children,
  ...otherProps
}: PropsType): Element => (
  <As
    className={[
      'mdc-tab-bar',
      className,
    ].filter(Boolean).join(' ')}
    {...otherProps}
  >
    {children}
  </As>
);

type TabItemPropsType = {
  as?: ElementType,
  className?: string,
  active?: ?boolean,
  label?: Node,
  children?: Node,
}

export const Tab = ({
  as: As = 'a',
  className,
  label,
  active,
  children,
  ...otherProps
}: TabItemPropsType): Element => (
  <As className={[
    'mdc-tab',
    active && 'mdc-tab--active',
    className,
  ].filter(Boolean).join(' ')} {...otherProps}>
    {children || label}
  </As>
);
