import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import Block from 'ynnub/components/Block';

export default () => (
  <div>
    <h1 className={typography.headline}>Blocks</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import Block from 'ynnub/components/Block';
`.trim()}</code></pre>


    <h2 className={typography.title}>Basic block</h2>

    <Code render={RenderCode}>
      <Block>
          Block
      </Block>
    </Code>

    <h2 className={typography.title}>Primary block</h2>

    <Code render={RenderCode}>
      <Block primary>
          Block
      </Block>
    </Code>

    See also: <a href="cards">Cards</a>
  </div>
)
