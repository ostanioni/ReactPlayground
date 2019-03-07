/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/***___SCSS_LOADER_WITHOUT_SOURCE_MAP__ ***/
const SCSS = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: false } },
    { loader: 'css-loader',     options: { sourceMap: false } },
    { loader: 'postcss-loader', options: { sourceMap: false, 
        ident: 'postcss',
        plugins: () => [
          require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true} }] } ),
        ]
      }
    },
    { loader: 'sass-loader',    options: { sourceMap: false } }
  ]
}
/***___CSS_LOADER_WITHOUT_SOURCE_MAP___***/
const CSS = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: false } },
    { loader: 'css-loader',     options: { sourceMap: false, importLoaders: 1 } },
    { loader: 'postcss-loader', options: { sourceMap: false,
        ident: 'postcss',
        plugins: [
          require('postcss-import')(),
          require('postcss-preset-env')({ 
            stage: 3,
            autoprefixer: { grid: true },
            features: {
            'nesting-rules': true,
            'color-mod-function': { unresolved: 'warn' }
            }
          }),
          require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true} }] } ),
        ]
      } 
    }
  ]
}

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [ SCSS, CSS ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 'async'
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});
/*
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ]
 */
