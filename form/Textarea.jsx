import '../reset.global.scss';
import './form.global.scss';
import sInput from './input.scss';

type PropsType = {
  id: string,
  label: ?ReactNodeType,
  placeholder: ?string,
};

export default ({ id, label, placeholder, ...props }) => (
  <div
    className={[
      sInput.input,
      sInput.text,
      sInput.textarea,
    ].filter(Boolean).join(' ')}
  >
    <textarea id={id} placeholder={placeholder || ''} {...props} />
    {!label ? null : <label htmlFor={id}>{label}</label>}
  </div>
);
