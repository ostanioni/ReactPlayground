/* eslint-disable */ 
/*****************************__COMMON_LOADERS__*****************************************/
/***___BABEL_LOADER___ ***/
const BABEL = { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" };
/***___TSX_LOADER___***/
const TSX = { test: /\.tsx?$/, loader: "awesome-typescript-loader" };
/***___IMAGES_LOADER___***/
const IMAGES = { test: /\.(png|svg|jpg|gif)$/,  use: [ { loader: 'file-loader', options: { name(file) { if (process.env.NODE_ENV === 'development') { return '[path][name].[ext]'; } return '[hash].[ext]';},},},]};
/***___WORKER_LOADER___***/
const WORKER_LOADER = { test: /\.worker\.js$/,  use: { loader: 'worker-loader' } };
/***___CSS_LOADER___***/
const CSS = { test: /\.css$/, use: [ 'style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader' ]};
/***__FONT_LOADER___***/
const FONT = { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] };
/***__XML_LOADER___***/
const XML = { test: /\.xml$/, use: [ 'xml-loader'  ] };
/***__CSV_LOADER___***/
const CSV = { test: /\.(csv|tsv)$/, use: [ 'csv-loader' ] };
  
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    //app: './src/index.tsx'
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json' ],
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
      Components: path.resolve(__dirname, 'src/components/'),
      '@' : path.resolve(__dirname, 'src/')
    },
  },
  module: {
    rules: [ BABEL, IMAGES, CSS, WORKER_LOADER]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: true,
    }),
    new CopyWebpackPlugin(
      [
        { 
          from: 'src/css/*',
          to: '../dist/css/[name].[ext]',
          // toType: 'dir',
          ignore: [ '*.js' ],
          force: true,
          context: path.resolve(__dirname, '../' )
        },
        { 
          from: 'src/img/*',
          to: '../dist/img/[name].[ext]',
          // toType: 'dir',
          ignore: [ '*.js' ],
          force: true,
          context: path.resolve(__dirname, '../' )
        },
      ], 
      { debug: 'info' }
    )
  ],
};