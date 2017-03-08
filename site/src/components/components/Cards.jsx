import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';
import sCard from 'ynnub/components/card.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Cards</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import sCard from 'ynnub/components/card.scss';
`.trim()}</code></pre>


    <h2 className={sHeadings.textTitle}>Basic block</h2>

    <Code render={RenderCode}>
      <div className={sCard.card}>
          <div className={sCard.content}>
              <h3 className={[sHeadings.textHeadline, sCard.title].join(' ')}>
                  title
              </h3>
              content
          </div>
      </div>
    </Code>
  </div>
)
