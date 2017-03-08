import Code from 'babel-plugin-jsx-code/Component';
import Button from 'ynnub/components/Button';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Buttons</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import Button from 'ynnub/components/Button';
`.trim()}</code></pre>


    <h2 className={sHeadings.textTitle}>Basic button</h2>

    <Code render={RenderCode}>
      <div>
        <Button label="Click me !" />
        <Button label="Disabled button" disabled />
      </div>
    </Code>

    <h2 className={sHeadings.textTitle}>Link button</h2>

    <Code render={RenderCode}>
      <div>
        <Button href="#" label="Link to something" onClick="return false" />
        <Button disabled href="#" label="Disabled link" onClick="return false" />
      </div>
    </Code>

    <h2 className={sHeadings.textTitle}>Flat button</h2>

    <Code render={RenderCode}>
      <Button flat label="Close" href="#" onClick="return false" />
    </Code>
  </div>
)
