import Code from 'babel-plugin-jsx-code/Component';
import Layout, { RenderCode } from '../../../components/Layout';
import typography from 'ynnub/text/typography';

export default () => (
  <Layout>
    <h1 className={typography.title}>Typography</h1>

    <pre><code>{"import typography from 'ynnub/text/typography';"}</code></pre>

    <Code render={RenderCode}>
      <div>
        <div className={typography.display4}>Display 4</div>
        <div className={typography.display3}>Display 3</div>
        <div className={typography.display2}>Display 2</div>
        <div className={typography.display1}>Display 1</div>
        <div className={typography.headline}>Headline</div>
        <div className={typography.title}>Title <span className={typography.caption}>Caption.</span></div>
        <div className={typography.subheading2}>Subheading 2</div>
        <div className={typography.subheading1}>Subheading 1</div>
        <div className={typography.body1}>Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        <div className={typography.body2}>Body 2 text, calling something out.</div>
      </div>
    </Code>
  </Layout>
)
