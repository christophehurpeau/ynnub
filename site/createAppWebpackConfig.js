const path = require('path');
const babelPresetPob = require('babel-preset-pob');
const babelPresetReact = require('babel-preset-pob-react');
const babelPresetStages = require('babel-preset-pob-stages');
const babelPluginJSXCode = require('babel-plugin-jsx-code');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { createModuleRules, createExtractPlugin } = require('../webpack-config');

module.exports = function (config, options) {
  const production = config.env === 'production';
  return config({
    ...options,

    aliases: {
      'ynnub': path.resolve('..'),
    },
    includePaths: [
      path.resolve('../components'),
      path.resolve('../form'),
      path.resolve('../grid'),
      path.resolve('../text'),
      path.resolve('../utils'),
      path.resolve('../Head'),
    ],

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
      ...createModuleRules({
        ExtractTextPlugin,
        production,
        publicPath: path.resolve('public'),
        themeFile: './src/theme.scss',
        plugins: [require('autoprefixer')],
        includePaths: [path.resolve('../node_modules')],
      }),
    ],

    plugins: [
      createExtractPlugin(ExtractTextPlugin, { filename: '../public/styles.css' }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          zindex: false,
          normalizeUrl: false,
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          autoprefixer: false,
        }
      }),
    ],
  });
};
