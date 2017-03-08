const path = require('path');
const babelPresetPob = require('babel-preset-pob');
const babelPresetReact = require('babel-preset-pob-react');
const babelPresetStages = require('babel-preset-pob-stages');
const babelPluginJSXCode = require('babel-plugin-jsx-code');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { createModuleRule, createExtractPlugin } = require('../webpack-config');

module.exports = function (config, options) {
  const production = config.env === 'production';
  const webpackConfig = config(Object.assign({}, options, {
    babel: {
      presets: [
        require('pobpack-node/babel').default,
        [babelPresetPob, { production }],
        [babelPresetReact, { production }],
        babelPresetStages,
      ],
      plugins: [
        babelPluginJSXCode.default,
      ],
    },

    moduleRules: [
      createModuleRule(ExtractTextPlugin, {
        production,
        publicPath: path.resolve('public'),
        themeFile: './src/theme.scss',
        plugins: [
          require('autoprefixer'),
        ].filter(Boolean)
      }),
    ],

    plugins: [
      createExtractPlugin(ExtractTextPlugin, { filename: '../public/styles.css' }),
    ]
  }));

  webpackConfig.resolve.alias = {
    'ynnub': path.resolve('..'),
  };

  return webpackConfig;
};
