import './tabbar.global.scss';
import type { TagNameOrReactComponentType, ReactNodeType } from '../types';

type PropsType = {
  as?: TagNameOrReactComponentType,
  className?: string,
  children: ReactNodeType,
}

export default ({
  as: As = 'nav',
  className,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
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
  as?: TagNameOrReactComponentType,
  className?: string,
  label: ReactNodeType,
  active?: ?boolean,
  children?: null,
}

export const Tab = ({ as: As = 'a', className, label, active, ...otherProps }: TabItemPropsType) => (
  <As className={[
    'mdc-tab',
    active && 'mdc-tab--active',
    className,
  ].filter(Boolean).join(' ')} {...otherProps}>
    {label}
  </As>
);

