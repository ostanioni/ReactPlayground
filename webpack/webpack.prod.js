/* eslint-disable */ 
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/***___SCSS_SOURCE_MAP__ ***/
const SCSS = { test: /\.scss$/, 
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader",  options: { sourceMap: false } },
    { loader: "sass-loader", options: { sourceMap: false } }
  ]
}

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [ SCSS ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
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
  },
});