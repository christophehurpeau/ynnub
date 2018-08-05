import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import TabBar, { Tab } from 'ynnub/components/TabBar';
import Dropdown, { ListItem } from 'ynnub/components/Dropdown';

export default () => (
  <div>
    <h1 className={typography.headline}>Nav</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import TabBar, { Tab } from 'ynnub/components/TabBar';
`.trim()}</code></pre>


    <h2 className={typography.title}>Basic</h2>

    <Code render={RenderCode}>
      <TabBar>
        <Tab active label="Tab 1" />
        <Tab label="Tab 2" />
        <Dropdown className="mdc-tab" label="Dropdown tab">
          <ListItem text="Item 1" />
          <ListItem text="Item 2" />
        </Dropdown>
      </TabBar>
    </Code>
  </div>
)
