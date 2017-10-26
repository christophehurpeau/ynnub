import s from './label.scss';

type PropsType = {
  icon?: ?string,
  value: Node,
};

export default ({ icon, value, ...props }: PropsType) => (
  <div className={s.container}>
    {icon && <label className={`material-icons ${s.icon}`} {...props}>{icon}</label>}
    <label className={s.label} {...props}>{value}</label>
  </div>
);
