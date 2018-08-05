const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { createModuleRules, createExtractPlugin } = require('ynnub/webpack-config');
const webpack = require('webpack');

module.exports = function (config, options) {
  const production = config.env === 'production';
  const webpackConfig = config({
    ...options,

    typescript: true,

    entries: [
      { key: 'index', path: 'index.ts' }
    ],

    includeModules: ['ynnub'],
    includePaths: [
      path.resolve('../ynnub')
    ],

    babel: {
      presets: [
        [require.resolve('@babel/preset-react'), { development: !production, useBuiltIns: true }],
        [
          require.resolve('babel-preset-pob-env'),
          {
            production,
            typescript: true,
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
        require.resolve('babel-plugin-react-require'),
        require.resolve('babel-plugin-jsx-code'),
        require.resolve('babel-plugin-inline-classnames-babel7'),
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
