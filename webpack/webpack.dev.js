/* eslint-disable */ 
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

/***___SOURCE_MAP____***/
const SOURCE_MAP = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" };

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001
  },
  devtool: 'source-map',
  module: {
    rules: [ SOURCE_MAP ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false
  }
});