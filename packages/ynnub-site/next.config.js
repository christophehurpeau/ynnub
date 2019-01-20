const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const cssnano = require('cssnano');

module.exports = {
  pageExtensions: ['ts', 'tsx'],
  assetPrefix: process.env.NEXTJS_DEPLOY ? '/ynnub' : '',

  exportPathMap(defaultPathMap) {
    if (defaultPathMap['/404']) {
      defaultPathMap['/404.html'] = defaultPathMap['/404'];
      delete defaultPathMap['/404'];
    }

    return defaultPathMap;
  },

  webpack: (config, { buildId, dir, dev, isServer, defaultLoaders }) => {
    config.devtool = dev ? 'source-map' : false;
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.mainFields = [
      dev && 'browser-dev',
      'browser',
      'module',
      'main',
    ].filter(Boolean);

    config.resolve.alias['pob-babel'] = isServer
      ? require.resolve('./pob-babel/server')
      : require.resolve('./pob-babel/browser');

    config.externals = config.externals.map((external) => {
      if (typeof external !== 'function') return external;
      return (ctx, req, cb) =>
        req.startsWith('ynnub/') ? cb() : external(ctx, req, cb);
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [dir, path.resolve(dir, '../ynnub')],
      exclude: [
        path.resolve(dir, 'node_modules'),
        path.resolve(dir, '../ynnub/node_modules'),
      ],
      use: defaultLoaders.babel,
    });

    const themeFile = './src/theme.scss';
    const sassLoaderOptions = {
      outputStyle: !dev && 'compressed',
      data: `$env: ${process.env.NODE_ENV};${
        themeFile ? `@import '${path.resolve(themeFile)}';` : ''
      }`,
      includePaths: [
        path.resolve('./node_modules'),
        path.resolve('../../node_modules'),
        path.resolve('../ynnub/node_modules'),
      ],
    };

    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        path: require.resolve('./postcss.config'),
      },
    };

    const sassLoader = {
      loader: 'sass-loader',
      options: sassLoaderOptions,
    };

    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        {
          test: /\.global\.scss$/,
          use: cssLoaderConfig(config, {
            extensions: ['scss'],
            cssModules: false,
            cssLoaderOptions: undefined,
            postcssLoaderOptions: undefined,
            dev,
            isServer,
            loaders: [postcssLoader, sassLoader],
          }),
        },
        {
          use: cssLoaderConfig(config, {
            extensions: ['scss'],
            cssModules: true,
            cssLoaderOptions: undefined,
            postcssLoaderOptions: undefined,
            dev,
            isServer,
            loaders: [
              {
                // enforce: 'pre',
                loader: 'typed-css-modules-loader',
                options: { noEmit: true },
              },
              postcssLoader,
              sassLoader,
            ],
          }),
        },
      ],
    });

    config.plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        cssProcessorOptions: {
          zindex: false,
          normalizeUrl: false,
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          autoprefixer: false,
        },
      }),
    );

    return config;
  },
};
