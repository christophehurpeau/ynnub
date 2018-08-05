const path = require('path');
const babelPresetFlow = require('@babel/preset-flow');
const babelPresetReact = require('@babel/preset-react');
const babelPresetPobEnv = require('babel-preset-pob-env');
const babelPluginJSXCode = require('babel-plugin-jsx-code');
const babelPluginReactRequire = require('babel-plugin-react-require');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { createModuleRules, createExtractPlugin } = require('ynnub/webpack-config');

module.exports = function (config, options) {
  const production = config.env === 'production';
  const webpackConfig = config({
    ...options,

    includeModules: ['ynnub'],
    includePaths: [
      path.resolve('../ynnub')
    ],

    babel: {
      presets: [
        // flow
        babelPresetFlow,
        // add react preset with jsx
        [babelPresetReact, { development: !production, useBuiltIns: true }],
        [
          babelPresetPobEnv,
          {
            production,
            typescript: false,
            exportDefaultName: false,
            optimizations: true,
            target: 'node',
            version: 'current',
            loose: true,
            modules: false,
           },
        ],
      ],
      plugins: [
        babelPluginJSXCode.default,
        babelPluginReactRequire,
      ],
    },

    moduleRules: [
      ...createModuleRules({
        MiniCssExtractPlugin,
        production,
        themeFile: './src/theme.scss',
        plugins: [require('autoprefixer')],
        includePaths: [
          path.resolve('./node_modules'),
          path.resolve('../../node_modules'),
          path.resolve('../ynnub/node_modules'),
        ],
      }),
    ],

    plugins: [
      createExtractPlugin(MiniCssExtractPlugin, {
        filename: `../public/[name].css`,
      }),
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

  webpackConfig.cache = false;
  return webpackConfig;
};
