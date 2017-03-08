import Code from 'babel-plugin-jsx-code/Component';
import Table from 'ynnub/components/Table';
import sHeadings from 'ynnub/text/headings.scss';
import RenderCode from '../RenderCode';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Tables</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`import Table from 'ynnub/components/Table';`}</code></pre>

    <h2 className={sHeadings.textTitle}>Basic table</h2>

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

    <h2 className={sHeadings.textTitle}>Centered table</h2>

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

    <h2 className={sHeadings.textTitle}>Bordered table</h2>

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

    <h2 className={sHeadings.textTitle}>Striped table</h2>

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
  </div>
)
