import Code from 'babel-plugin-jsx-code/Component';
import Layout, { RenderCode } from '../../components/Layout';
import typography from 'ynnub/text/typography';
import LoadingBar from 'ynnub/components/LoadingBar';

export default () => (
  <Layout>
    <h1 className={typography.headline}>Loading Bars</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import LoadingBar from 'ynnub/components/LoadingBar';
`.trim()}</code></pre>

    <h2 className={typography.title}>Example of LoadingBar</h2>

    <Code render={RenderCode}>
      <LoadingBar hidden={false} />
    </Code>
  </Layout>
)
