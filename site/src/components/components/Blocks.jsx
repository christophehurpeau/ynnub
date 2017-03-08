import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';
import sBlock from 'ynnub/components/block.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Blocks</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import sBlock from 'ynnub/components/block.scss';
`.trim()}</code></pre>


    <h2 className={sHeadings.textTitle}>Basic block</h2>

    <Code render={RenderCode}>
      <div className={sBlock.block}>
          Block
      </div>
    </Code>

    <h2 className={sHeadings.textTitle}>Primary block</h2>

    <Code render={RenderCode}>
      <div className={[sBlock.block, sBlock.primary].join(' ')}>
          Block
      </div>
    </Code>

    See also: <a href="cards">Cards</a>
  </div>
)
