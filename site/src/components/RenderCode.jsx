import 'ynnub/text/code.scss';
import s from './RenderCode.scss';

export default ({ source, result }) => (
  <div className={s.container}>
    <div className={s.code}>
      <div className={s.title}>Code</div>
      <pre><code>{source}</code></pre>
    </div>
    <div className={s.renderResult}>
      <div className={s.title}>Result</div>
      {result}
    </div>
  </div>
)
