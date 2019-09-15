import React from 'react';
import { Typography } from 'antd';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Typography.Title>ynnub</Typography.Title>
    <p>
      A css module framework in scss. Written for <code>react</code> and{' '}
      <code>webpack</code> with css modules.
    </p>
    <Typography.Title level={2}>Getting started</Typography.Title>
    <Typography.Title level={3}>Installation</Typography.Title>
    <pre>
      <code>
        {`
npm install --save ynnub
yarn add ynnub
    `.trim()}
      </code>
    </pre>
    <Typography.Title level={3}>Setup</Typography.Title>
    Create a new webpack/react project. (TODO: steps with create-react-app)
    <pre>
      <code>
        {`
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { createModuleRules } = require('ynnub-webpack-config');

module.exports = {
  module: {
    rules: [
      ...createModuleRules({
        extractLoader: {
          loader: MiniCssExtractPlugin.loader as any,
          options: { hmr: false },
        },
        plugins: [
          require('autoprefixer'),
        ],
        includePaths: [path.resolve('./node_modules')],
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // disable: target === 'node',
      filename: \`styles.css\`,
    }),
    new OptimizeCssAssetsPlugin(),
  ]
}
    `.trim()}
      </code>
    </pre>
  </Layout>
);
