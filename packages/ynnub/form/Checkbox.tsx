import React from 'react';
import InputText, { InputTextProps } from './InputText';

export interface Props extends InputTextProps {
  type?: never;
}

export default (props: Props) => <InputText type="checkbox" {...props} />;
