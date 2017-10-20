/* eslint-disable no-nested-ternary */
const path = require('path');

const cssLoaderOptions = function(importLoaders, global, production) {
  return {
    sourceMap: false,
    modules: !global,
    minimize: production !== false,
    importLoaders,
    localIdentName: global
      ? undefined
      : production !== false ? '[hash:base64]' : '[name]__[local]___[hash:base64:5]',
    discardComments: {
      removeAll: production !== false,
    },
  };
};

const createScssModuleRule = function(
  { extract, global = false, plugins, publicPath, production, themeFile, includePaths = [] } = {},
) {
  return {
    test: global ? /\.global\.scss$/ : /^((?!\.global).)*\.scss$/,
    loader: extract({
      publicPath,
      use: [
        {
          loader: 'css-loader',
          options: cssLoaderOptions(2, global, production),
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            plugins: () => plugins,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            outputStyle: production !== false && 'compressed',
            data: `$env: ${process.env.NODE_ENV};${themeFile
              ? `@import '${path.resolve(themeFile)}';`
              : ''}`,
            includePaths,
          },
        },
      ].filter(Boolean),
    }),
  };
};

const createCssModuleRule = function({ extract, global = false, plugins, publicPath, production } = {}) {
  return {
    test: /\.css$/,
    loader: extract({
      publicPath,
      use: [
        {
          loader: 'css-loader',
          options: cssLoaderOptions(1, global, production),
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            plugins: () => plugins,
          },
        },
      ].filter(Boolean),
    }),
  };
};

exports.createModuleRules = function(
  { ExtractTextPlugin, plugins, publicPath, production, themeFile, includePaths } = {},
) {
  const extract = ExtractTextPlugin ? ExtractTextPlugin.extract.bind(ExtractTextPlugin) : x => x;
  return [
    createScssModuleRule({
      extract,
      global: true,
      plugins,
      publicPath,
      production,
      themeFile,
      includePaths,
    }),

    createScssModuleRule({
      extract,
      global: false,
      plugins,
      publicPath,
      production,
      themeFile,
      includePaths,
    }),

    createCssModuleRule({
      extract,
      global: false,
      plugins,
      publicPath,
      production,
    }),
  ];
};

exports.createExtractPlugin = function(ExtractTextPlugin, options) {
  return new ExtractTextPlugin(Object.assign({}, { allChunks: true }, options));
};
