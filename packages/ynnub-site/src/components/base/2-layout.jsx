import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import sHolyGrail from 'ynnub/layout/holygrail.scss';

export default () => (
  <div>
    <h1 className={typography.headline}>Layouts</h1>

    <h2 className={typography.title}><a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)">Holy Grail</a></h2>

    <pre><code>{"import sHolyGrail from 'ynnub/layout/holygrail.scss';"}</code></pre>

    <Code render={RenderCode}>
      <div className={sHolyGrail.container} style={{ minHeight: '300px'}}>
        <header>header</header>
        <div className={sHolyGrail.body}>
          <main className={sHolyGrail.content}>main</main>
          <aside className={sHolyGrail.aside} style={{ flexBasis: '40px' }}>aside</aside>
        </div>
        <footer>footer</footer>
      </div>
    </Code>
  </div>
)