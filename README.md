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
yarn add ynnub extract-text-webpack-plugin css-loader postcss-loader sass-loader
```

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { createModuleRule, createExtractPlugin } = require('ynnub/webpack-config');

module.exports = {
  moduleRules: [
    // js/jsx rule 
    { test: /jsx?$/ ... },

    // scss rule
    createModuleRule(ExtractTextPlugin, {
      // optional: production: true|false,
      // optional: themeFile: string,
      // optional: plugins: Array
      plugins: [
        // example: require('precss'),
      ]
    })
  ],
  
  plugins: [
    createExtractPlugin(ExtractTextPlugin, {
    }),
  ]    
}

```
