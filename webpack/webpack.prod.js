/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require('postcss-safe-parser');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

const $SOURCE_MAP = true
const CONTEXT = path.resolve(__dirname, '../');
//const MINI_CSS_EXTRACT = {
 // loader: MiniCssExtractPlugin.loader,
  // options: { publicPath: '..//' },
//}

/***___SCSS_LOADER_WITHOUT_SOURCE_MAP__ ***/
const SCSS = {
  test: /\.scss$/,
  use: [
    //{ loader: 'style-loader', options: { attrs: { id: 'id' }, sourceMap: $SOURCE_MAP } },
     MiniCssExtractPlugin.loader,
    { loader: 'css-loader',     options: { sourceMap: $SOURCE_MAP, importLoaders: 1, } },
    'postcss-loader',
    { loader: 'sass-loader',    options: { sourceMap: $SOURCE_MAP, importLoaders: 2, }, }
  ],
  sideEffects: true,
}
/***___CSS_LOADER_WITHOUT_SOURCE_MAP___***/

const CSS = {
  test: /\.css$/,
  use: [
    // {loader: 'style-loader', options: { attrs: { id: 'id' }, sourceMap: $SOURCE_MAP }},
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1, } },
    'postcss-loader'
  ]
}

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [ SCSS, CSS ]
  },
  plugins: [
    new TerserPlugin({
      terserOptions: {
        parse: {
         ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: $SOURCE_MAP,
    }),
    new MiniCssExtractPlugin({
        //cssProcessorOptions: {
          //parser: safePostCssParser,
          //map: $SOURCE_MAP,
        // },
        // filename: "[name].css",
        // chunkFilename: "[id].css"
        filename: 'css/[contenthash].css',
        chunkFilename: 'css/[contenthash].chunk.css',
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
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
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true,
  }
});
