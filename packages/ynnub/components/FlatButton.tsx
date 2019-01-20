import Button, { ButtonProps } from './Button';

interface FlatButtonProps extends ButtonProps {
  flat: never;
}

export default (props: FlatButtonProps) => <Button flat {...props} />;
