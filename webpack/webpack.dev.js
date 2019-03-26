/* eslint-disable */
/*tslint:disabled*/
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');
const webpack = require('webpack');
const path    = require('path');

const CONTEXT = path.resolve(__dirname, '../');
const SRC = `${CONTEXT}/src`

/***___SOURCE_MAP____***/
// const JS_SOURCE_MAP = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" };
const JS_SOURCE_MAP = {
  test: /\.(js|jsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        formatter: require.resolve('react-dev-utils/eslintFormatter'),
        eslintPath: require.resolve('eslint'),
      },
      loader: require.resolve('eslint-loader'),
    },
    {
      loader: "source-map-loader",
    }
  ],
  include: SRC,
}

/***___SCSS_SOURCE_MAP__ ***/
const SCSS_SOURCE_MAP = {
  test: /\.scss$/,
  // exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: true, } },
    { loader: 'css-loader',     options: { sourceMap: true, importLoaders: 1, } },
    { loader: 'sass-loader',    options: { sourceMap: true, } }
  ],
  sideEffects: true,
}
/***___CSS_LOADER___***/
const CSS_SOURCE_MAP = {
  test: /\.css$/,
  // exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: true, } },
    { loader: 'css-loader',     options: { sourceMap: true, importLoaders: 1, } },
    { loader: 'postcss-loader' },
  ],
  sideEffects: true,
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    host: '127.0.0.7',
    port: 3001
  },
  devtool: 'source-map',
  module: {
    rules: [ JS_SOURCE_MAP, SCSS_SOURCE_MAP, CSS_SOURCE_MAP ]
  },
  optimization: {
    minimize: false,
    usedExports: true
  }
});

/*
======================================================================
require('autoprefixer')({...options}),
require('stylelint')({"extends": "stylelint-config-recommended"}),
======================================================================
*/