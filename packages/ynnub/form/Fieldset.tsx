import React, { ReactElement, ReactNode } from 'react';

export interface Props {
  legend?: ReactNode;
  children: ReactNode;
}

export default ({ legend, children }: Props): ReactElement<'fieldset'> => (
  <fieldset>
    {legend && <legend>{legend}</legend>}
    {children}
  </fieldset>
);
