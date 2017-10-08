# ynnub

A css module framework in less. Written for `react` and `webpack` with css modules.

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
yarn add ynnub extract-text-webpack-plugin css-loader postcss-loader sass-loader optimize-css-assets-webpack-plugin
```

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { createModuleRules, createExtractPlugin } = require('ynnub/webpack-config');

module.exports = {
  moduleRules: [
    // js/jsx rule 
    { test: /jsx?$/ ... },

    // css modules scss rule
    ...createModuleRules({
      ExtractTextPlugin,
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
    createExtractPlugin(ExtractTextPlugin, {
    }),
    new OptimizeCssAssetsPlugin(),
  ]    
}

```
