/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

/***___SOURCE_MAP____***/
const JS_SOURCE_MAP = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" };
/***___SCSS_SOURCE_MAP__ ***/
/*
const SCSS_SOURCE_MAP = { test: /\.scss$/, 
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader",  options: { sourceMap: true } },
    { loader: "sass-loader", options: { sourceMap: true } }
  ]
}
require('autoprefixer')({...options}),
require('stylelint')({"extends": "stylelint-config-recommended"}),
========================================================================================
cssnano = { 
  "preset": [ "advanced", { "discardComments": {"removeAll": true} } ]
}
const options = {
  cssnano,
  'postcss-preset-env': {
    stage: 3,
    autoprefixer: { grid: true },
    features: {
    'nesting-rules': true,
    'color-mod-function': { unresolved: 'warn' }
    }
  },
 }
const POSTCSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    ident: 'postcss',
    plugins: (loader) => [
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-preset-env')(options['postcss-preset-env']),
      require('cssnano')(options.cssnano),      
    ]
  }
}
const SCSS_SOURCE_MAP = {
  test: /\.scss$/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: true } },
    { loader: 'css-loader',     options: { sourceMap: true } },
    POSTCSS_LOADER,
    { loader: 'sass-loader',    options: { sourceMap: true } }
  ]
}
*/

/***___SCSS_SOURCE_MAP__ ***/
const SCSS_SOURCE_MAP = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: true } },
    { loader: 'css-loader',     options: { sourceMap: true } },
    { loader: 'postcss-loader', options: { sourceMap: true, 
        ident: 'postcss',
        plugins: () => [
          require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true} }] }),
        ]
      }
    },
    { loader: 'sass-loader',    options: { sourceMap: true } }
  ]
}
/***___CSS_LOADER___***/
const CSS_SOURCE_MAP = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader',   options: { sourceMap: true } },
    { loader: 'css-loader',     options: { sourceMap: true, importLoaders: 1 } },
    { loader: 'postcss-loader', options: { sourceMap: true,
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
          require('cssnano')({ "preset": "advanced" }),
        ]
      } 
    }
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
    rules: [ JS_SOURCE_MAP, SCSS_SOURCE_MAP, CSS_SOURCE_MAP ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false,
    usedExports: true
  }
});
global.console.clear()
const devMode = process.env.NODE_ENV !== 'production';
global.console.log('DEV_MODE:', devMode)