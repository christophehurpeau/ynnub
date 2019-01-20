import Code from 'babel-plugin-jsx-code/Component';
import Table from 'ynnub/components/Table';
import typography from 'ynnub/text/typography';
import Layout, { RenderCode } from '../../components/Layout';

export default () => (
  <Layout>
    <h1 className={typography.headline}>Tables</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`import Table from 'ynnub/components/Table';`}</code></pre>

    <h2 className={typography.title}>Basic table</h2>

    <Code render={RenderCode}>
      <Table>
        <thead>
          <tr><th>Col1</th><th>Col2</th><th>Col3</th></tr>
        </thead>
        <tbody>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
        </tbody>
      </Table>
    </Code>

    <h2 className={typography.title}>Centered table</h2>

    <Code render={RenderCode}>
      <Table centered>
        <thead>
          <tr><th>Col1</th><th>Col2</th><th>Col3</th></tr>
        </thead>
        <tbody>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
        </tbody>
      </Table>
    </Code>

    <h2 className={typography.title}>Bordered table</h2>

    <Code render={RenderCode}>
      <Table bordered>
        <thead>
          <tr><th>Col1</th><th>Col2</th><th>Col3</th></tr>
        </thead>
        <tbody>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
        </tbody>
      </Table>
    </Code>

    <h2 className={typography.title}>Striped table</h2>

    <Code render={RenderCode}>
      <Table striped>
        <thead>
          <tr><th>Col1</th><th>Col2</th><th>Col3</th></tr>
        </thead>
        <tbody>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
          <tr><td>val1</td><td>val2</td><td>val3</td></tr>
        </tbody>
      </Table>
    </Code>
  </Layout>
)
