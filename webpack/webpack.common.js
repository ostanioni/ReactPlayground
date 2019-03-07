/* eslint-disable */ 
/*****************************__COMMON_LOADERS__*****************************************/
/***___BABEL_LOADER___ ***/
const BABEL = { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" };
/***___TSX_LOADER___***/
const TSX = { test: /\.tsx$/, loader: "awesome-typescript-loader" };
/***___TS_LOADER___***/
const TS = { test: /\.ts$/, loader: "ts-loader" };
/***___IMAGES_LOADER___***/
const IMAGES = { test: /\.(png|svg|jpg|gif)$/,  use: [ { loader: 'file-loader', options: { name(file) { if (process.env.NODE_ENV === 'development') { return '[path][name].[ext]'; } return '[hash].[ext]';},},},]};
/***___WORKER_LOADER___***/
const WORKER_LOADER = { test: /\.worker\.js$/,  use: { loader: 'worker-loader' } };
/***___CSS_LOADER___
const CSS = { test: /\.css$/, use: [ 'style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader' ]};
CSS_LOADER configuration is located in webpack.dev.js and webpack.prod.js
***/
/***__FONT_LOADER___***/
const FONT = { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] };
/***__XML_LOADER___***/
const XML = { test: /\.xml$/, use: [ 'xml-loader'  ] };
/***__CSV_LOADER___***/
const CSV = { test: /\.(csv|tsv)$/, use: [ 'csv-loader' ] };
/***__MD_LOADER___***/
const MD = { test: /\.md$/, use: [{ loader: "raw-loader" }, { loader: "markdown-loader", options: { } }] };
// const MD = { test: /\.md$/, use: [{ loader: "html-loader" }, { loader: "markdown-loader", options: { } }] };
/***__RAW_LOADER___***/
const RAW = { test: /\.txt$/i, use: 'raw-loader'};
/***__HTML_LOADER___***/
// const HTML = { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } }};
/***__ESLINT_LOADER___***/
const ESLINT = { test: /\.(js|mjs|jsx)$/, enforce: 'pre', use: [ { options: { formatter: require.resolve('react-dev-utils/eslintFormatter'), eslintPath: require.resolve('eslint'), }, loader: require.resolve('eslint-loader'), }, ] }; //, include: paths.appSrc };
  
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/** CONTEXT */
const CONTEXT = path.resolve(__dirname, '../');

module.exports = {
  context: CONTEXT,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[hash].js',
    path: `${CONTEXT}/dist`
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json', "ts", "tsx" ],
    alias: {
      pages:      `${CONTEXT}/src/pages`,
      layouts:    `${CONTEXT}/src/layouts`,
      components: `${CONTEXT}/src/components`,
      resources:  `${CONTEXT}/src/resources`,
      tables:     `${CONTEXT}/src/tables`,
      stores:     `${CONTEXT}/src/stores`,
      styled:     `${CONTEXT}/src/styled`,
      ts:         `${CONTEXT}/src/typescript`,
      css:        `${CONTEXT}/src/public/css`,
      imgs:       `${CONTEXT}/src/public/imgs`,
    },
  },
  module: {
    rules: [ BABEL, FONT, TS, TSX, IMAGES, WORKER_LOADER, MD, RAW, ESLINT]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${CONTEXT}/src/public/index.html`,
    }),
    new CopyWebpackPlugin(
      [
        { 
          from: 'src/public/css/*',
          to: '../dist/css/[name].[ext]',
          // toType: 'dir',
          ignore: [ '*.js' ],
          force: true,
          context: `${CONTEXT}`
        },
        { 
          from: 'src/public/imgs',
          to: '../dist/imgs',  
          // [name].[ext]',
          toType: 'dir',
          ignore: [ '*.js' ],
          force: true,
          context: `${CONTEXT}`
        },
      ], 
      { debug: 'info' }
    )
  ],
};