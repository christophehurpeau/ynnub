import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Headings</h1>

    <pre><code>{"import sHeadings from 'ynnub/text/headings.scss';"}</code></pre>

    <Code render={RenderCode}>
      <div>
        <h1 className={sHeadings.pageTitle}>h1. page-title</h1>
        <h2 className={sHeadings.textHeadline}>h2. text-headline</h2>
        <h3 className={sHeadings.textTitle}>h3. text-title</h3>
        <h4 className={sHeadings.textSubhead}>h4. text-subhead</h4>
      </div>
    </Code>
  </div>
)
