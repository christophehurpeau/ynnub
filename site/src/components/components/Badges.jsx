import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';
import List from 'ynnub/components/List';
import sBadge from 'ynnub/components/badge.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Badges</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import sBadge from 'ynnub/components/badge.scss';
`.trim()}</code></pre>

    <h2 className={sHeadings.textTitle}>Basic badges in list</h2>

    <Code render={RenderCode}>
      <List>
          <li>Item 1 <span className={sBadge.badge}>1</span></li>
          <li>Item 2 <span className={sBadge.badge}>4</span></li>
          <li>Item 3 <span className={sBadge.badge}>1234</span></li>
          <li>Item 4 <span className={sBadge.badge} /></li>
      </List>
    </Code>

    <p>You can also use <code>{'<ListItem badge="1">Item 1</ListItem>'}</code></p>.

    See also: <a href="labels">Labels</a>
  </div>
)
