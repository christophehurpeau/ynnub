import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import TabBar, { Tab } from 'ynnub/components/TabBar';

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
      </TabBar>
    </Code>
  </div>
)
