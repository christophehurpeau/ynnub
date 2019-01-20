import React, { ReactElement } from 'react';
import Icon, { IconProps } from './Icon';
import s from './spinner.scss';

export const SpinnerIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={`${s.spinner} ${className}`}
    width="65px"
    height="65px"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      className={s.path}
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
);

interface Props {
  value: never;
  [prop: string]: any;
}

export default (props: Props) => (
  <Icon {...props} value={<SpinnerIcon /> as ReactElement<IconProps>} />
);
