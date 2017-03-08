import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';
import sList from 'ynnub/components/list/base.scss';
import sLabel from 'ynnub/components/label.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Labels</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import sLabel from 'ynnub/components/label.scss';
`.trim()}</code></pre>

    <h2 className={sHeadings.textTitle}>Basic labels in list</h2>

    <Code render={RenderCode}>
      <ul className={sList.list}>
        <li>Item 1 <span className={sLabel.label}>Successfully saved</span></li>
        <li>Item 2 <span className={`${sLabel.label} ${sLabel.success}`}>Done</span></li>
        <li>Item 3 <span className={`${sLabel.label} ${sLabel.error}`}>Invalid data</span></li>
        <li>Item 4 <span className={`${sLabel.label} ${sLabel.warning}`}>Be careful</span></li>
      </ul>
    </Code>

    See also: <a href="badges">Badges</a>
  </div>
)
