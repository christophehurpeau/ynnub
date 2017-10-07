import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import List, { ListItem } from 'ynnub/components/List';
import Badge from 'ynnub/components/Badge';

export default () => (
  <div>
    <h1 className={typography.headline}>Badges</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import sBadge from 'ynnub/components/badge.scss';
`.trim()}</code></pre>

    <h2 className={typography.title}>Basic badges in list</h2>

    <Code render={RenderCode}>
      <List>
        <ListItem text="Item 1" endDetail={<Badge value="1" />} />
        <ListItem text="Item 2" endDetail={<Badge value="4" />} />
        <ListItem text="Item 3" endDetail={<Badge value="1234" />} />
        <ListItem text="Item 4" endDetail={<Badge />} />
      </List>
    </Code>

    See also: <a href="labels">Labels</a>
  </div>
)
