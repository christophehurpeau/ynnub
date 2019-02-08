import React, {
  Children,
  ReactElement,
  ReactNode,
  FunctionComponent,
} from 'react';
import FlexGrid, { FlexGridProps } from '../grid/FlexGrid';
import Heading, { Level } from '../components/Heading';
import Radio, { RadioProps } from './Radio';
import s from './RadioSelect.scss';

export type RadioPropsForSelect = Pick<
  RadioProps,
  Exclude<keyof RadioProps, 'id'>
> & {
  // calc with RadioSelect props
  cheched?: never;
  id?: never;
  // in RadioSelect props
  name?: never;
};

const RadioForSelect: FunctionComponent<RadioPropsForSelect> = (
  props: RadioPropsForSelect,
) => {
  throw new Error('RadioForSelect is not supposed to be rendered');
};

export interface Props {
  label?: ReactNode;
  headingType?: never;
  headingLevel?: Level;
  prefixId: string;
  flex?: boolean;
  flexFlow?: FlexGridProps['flow'];
  name: string;
  children: ReactElement<RadioPropsForSelect>[];
  value?: any;
  [prop: string]: any;
}

const RadioSelect = ({
  label,
  headingLevel = 'subheading2',
  children,
  value,
  prefixId,
  flex,
  flexFlow = 'row wrap',
  ...props
}: Props) => {
  const checkedKey = props.onChange ? 'checked' : 'defaultChecked';
  const radioChildren = Children.map(
    children,
    (child: ReactElement<RadioPropsForSelect>): ReactElement<RadioProps> =>
      React.createElement(Radio, {
        [checkedKey]: value === child.props.value,
        id: `${prefixId}-${child.props.value}`,
        ...props,
        ...child.props,
        key: child.key,
        className: `${s.radio} ${child.props.className || ''}`,
      } as RadioProps),
  );

  return (
    <div className={s.container}>
      {label && (
        <Heading className={s.heading} value={label} level={headingLevel} />
      )}
      {!flex ? (
        radioChildren
      ) : (
        <FlexGrid className={s.flexContainer} flow={flexFlow}>
          {radioChildren}
        </FlexGrid>
      )}
    </div>
  );
};

RadioSelect.Radio = RadioForSelect;

export default RadioSelect;
