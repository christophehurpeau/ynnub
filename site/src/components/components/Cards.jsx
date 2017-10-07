import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import sCard from 'ynnub/components/card.scss';

export default () => (
  <div>
    <h1 className={typography.headline}>Cards</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import sCard from 'ynnub/components/card.scss';
`.trim()}</code></pre>


    <h2 className={typography.title}>Basic block</h2>

    <Code render={RenderCode}>
      <div className={sCard.card}>
          <div className={sCard.content}>
              <h3 className={[typography.headline, sCard.title].join(' ')}>
                  title
              </h3>
              content
          </div>
      </div>
    </Code>
  </div>
)
