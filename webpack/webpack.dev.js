/* eslint-disable */ 
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

/***___SOURCE_MAP____***/
const JS_SOURCE_MAP = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" };
/***___SCSS_SOURCE_MAP__ ***/
const SCSS_SOURCE_MAP = { test: /\.scss$/, 
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader",  options: { sourceMap: true } },
    { loader: "sass-loader", options: { sourceMap: true } }
  ]
}
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001
  },
  devtool: 'source-map',
  module: {
    rules: [ JS_SOURCE_MAP, SCSS_SOURCE_MAP ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false
  }
});