<h3 align="center">
  ynnub
</h3>

<p align="center">
  A css module framework in less. Written for `react` and `webpack` with css modules.
</p>

<p align="center">
  <a href="https://npmjs.org/package/ynnub"><img src="https://img.shields.io/npm/v/ynnub.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/ynnub?path=packages/ynnub"><img src="https://david-dm.org/christophehurpeau/ynnub.svg?path=packages/ynnub?style=flat-square"></a>
</p>

## What does `ynnub` means ?

It's bunny, reversed !

## How to use

### Button

```js
import Button from 'ynnub';

export default () => (
  <Button href="/" label="Home" />
)
```

## Webpack Configuration

```bash
yarn add ynnub
yarn add --dev ynnub-webpack-config extract-text-webpack-plugin css-loader postcss-loader sass-loader optimize-css-assets-webpack-plugin
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { createModuleRules } = require('ynnub-webpack-config');

module.exports = {
  moduleRules: [
    // js/jsx rule
    { test: /jsx?$/ ... },

    // css modules scss rule
    ...createModuleRules({
      MiniCssExtractPlugin,
      // optional: global: true|false,
      // optional: production: true|false,
      // optional: themeFile: string,
      // optional: plugins: Array
      plugins: [
        // example: require('autoprefixer'),
        // example: require('precss'),
      ],
      includePaths: [path.resolve('./node_modules')],
    }),
  ],

  plugins: [
     new MiniCssExtractPlugin({
      // disable: target === 'node',
      filename: `styles.css`,
    }),

    new OptimizeCssAssetsPlugin(),
  ]
}

```
