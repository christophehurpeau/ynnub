import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import List, { ListItem } from 'ynnub/components/List';
import Label from 'ynnub/components/Label';

export default () => (
  <div>
    <h1 className={typography.headline}>Labels</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import sLabel from 'ynnub/components/label.scss';
`.trim()}</code></pre>

    <h2 className={typography.title}>Basic labels in list</h2>

    <Code render={RenderCode}>
      <List>
        <ListItem text="Item 1"><Label>Successfully saved</Label></ListItem>
        <ListItem text="Item 2"><Label variation="success">Done</Label></ListItem>
        <ListItem text="Item 3"><Label variation="error">Invalid data</Label></ListItem>
        <ListItem text="Item 4"><Label variation="warning">Be careful</Label></ListItem>
      </List>
    </Code>

    See also: <a href="badges">Badges</a>
  </div>
)
