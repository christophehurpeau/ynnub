import s from './loadingBar.scss';

export default (props) => (
  <div {...props} className={s.loadingBar}>
    <div className={s.progress} />
  </div>
);
