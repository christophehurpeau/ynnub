const path = require('path');
const babelPresetPobEnv = require('babel-preset-pob-env');
const babelPresetPobReact = require('babel-preset-pob-react');
const babelPluginJSXCode = require('babel-plugin-jsx-code');
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
        [babelPresetPobReact, { production }],
        [
          babelPresetPobEnv,
          { production, target: 'node', version: 'current', flow: true, modules: false, exportDefaultName: false },
        ],
      ],
      plugins: [
        babelPluginJSXCode.default,
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
