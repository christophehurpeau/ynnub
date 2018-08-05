/* eslint-disable no-nested-ternary */
const path = require('path');

const defaultResolveLoader = loader => loader;

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
  { miniCssExtractPluginLoader, global = false, plugins, production, themeFile, includePaths = [], resolveLoader = defaultResolveLoader } = {},
) {
  return {
    test: global ? /\.global\.scss$/ : /^((?!\.global).)*\.scss$/,
    use: [
      miniCssExtractPluginLoader,
      !global ? {
        loader: resolveLoader('typings-for-css-modules-loader'),
        options: {
          namedExports: true,
          ...cssLoaderOptions(2, global, production),
        }
      } : {
        loader: resolveLoader('css-loader'),
        options: cssLoaderOptions(2, global, production),
      },
      {
        loader: resolveLoader('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: false,
          plugins: () => plugins,
        },
      },
      {
        loader: resolveLoader('sass-loader'),
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
  };
};

const createCssModuleRule = function({ miniCssExtractPluginLoader, global = false, plugins, production, resolveLoader = defaultResolveLoader } = {}) {
  return {
    test: /\.css$/,
    use: [
      miniCssExtractPluginLoader,
      {
        loader: resolveLoader('typings-for-css-modules-loader'),
        options: {
          namedExports: true,
          ...cssLoaderOptions(1, global, production),
        },
      },
      {
        loader: resolveLoader('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: false,
          plugins: () => plugins,
        },
      },
    ].filter(Boolean),
  };
};

exports.createModuleRules = function(
  { MiniCssExtractPlugin, plugins, production, themeFile, includePaths, resolveLoader = defaultResolveLoader } = {},
) {
  return [
    createScssModuleRule({
      miniCssExtractPluginLoader: MiniCssExtractPlugin.loader,
      global: true,
      plugins,
      production,
      themeFile,
      includePaths,
      resolveLoader,
    }),

    createScssModuleRule({
      miniCssExtractPluginLoader: MiniCssExtractPlugin.loader,
      global: false,
      plugins,
      production,
      themeFile,
      includePaths,
      resolveLoader,
    }),

    createCssModuleRule({
      miniCssExtractPluginLoader: MiniCssExtractPlugin.loader,
      global: false,
      plugins,
      production,
      resolveLoader,
    }),
  ];
};

exports.createExtractPlugin = function(MiniCssExtractPlugin, options) {
  return new MiniCssExtractPlugin(options);
};
