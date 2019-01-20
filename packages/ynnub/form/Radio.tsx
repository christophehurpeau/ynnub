import React from 'react';
import InputText, { InputTextProps } from './InputText';

export interface RadioProps extends InputTextProps {
  type?: never;
  name?: string;
  checked?: boolean;
}

export default (props: RadioProps) => <InputText type="radio" {...props} />;
