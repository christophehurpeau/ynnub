import InputText, { Props as InputTextProps } from './InputText';

type Props = InputTextProps & { type: never };

export default (props: Props) => <InputText type="checkbox" {...props} />;
