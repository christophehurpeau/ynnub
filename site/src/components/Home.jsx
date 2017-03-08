import sHeadings from 'ynnub/text/headings.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>ynnub</h1>

    <p>
    A css module framework in scss. Written for <code>react</code> and <code>webpack</code> with css modules.
    </p>

    <h2 className={sHeadings.textTitle}>Getting started</h2>

    <h3 className={sHeadings.textParagraphTitle}>Installation</h3>

    <pre><code>{`
npm install --save ynnub
yarn add ynnub
    `.trim()}</code></pre>

    <h3 className={sHeadings.textParagraphTitle}>Setup</h3>

    Create a new webpack/react project. (TODO: steps with create-react-app)

    <pre><code>{`
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { createModuleRule, createExtractPlugin } = require('../webpack-config');

module.exports = {
  module: {
    rules: [
      createModuleRule(ExtractTextPlugin, {
        plugins: [
          require('autoprefixer'),
          process.env.NODE_ENV === 'production' && require('cssnano'),
        ].filter(Boolean)
      }),
    ],
  },

  plugins: [
    createExtractPlugin(ExtractTextPlugin, '../public/styles.css'),
  ]
}
    `.trim()}</code></pre>

    <h3 className={sHeadings.textParagraphTitle}>Layout</h3>

    Import only the global things you need in your layout:

    <pre><code>{`
import 'ynnub/reset.global.scss';
import 'ynnub/layout/page.global.scss';
import 'ynnub/interactions/interactions.global.scss';
import sHolyGrail from 'ynnub/layout/holygrail.scss';
import { content as contentClassName } from 'ynnub/layout/content.scss';
import Sidebar from './Sidebar';

export default ({ content }) => (
  <html>
    <head>
    </head>
    <body className={[sHolyGrail.container, sHolyGrail.body].join(' ')}>
      <Sidebar className={sHolyGrail.aside} />
      <div className={[sHolyGrail.content, contentClassName].join(' ')} dangerouslySetInnerHTML={{ __html: content }} />
    </body>
  </html>
);
    `.trim()}</code></pre>

  </div>
)
