/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require('postcss-safe-parser');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const $SOURCE_MAP = true

/***___SCSS_LOADER_WITHOUT_SOURCE_MAP__ ***/
const SCSS = {
  test: /\.scss$/,
  // exclude: /node_modules/,
  use: [
    // { loader: 'style-loader', options: { attrs: { id: 'id' }, sourceMap: $SOURCE_MAP } },
    { loader: MiniCssExtractPlugin.loader },
    { loader: 'css-loader',     options: { sourceMap: $SOURCE_MAP, importLoaders: 1, /* minimize: true, */ } },
    { loader: 'postcss-loader', options: { sourceMap: $SOURCE_MAP, 
        ident: 'postcss',
        plugins: [ require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true} }] } ), ]
      }
    },
    { loader: 'sass-loader',    options: { sourceMap: $SOURCE_MAP } }
  ]
}
/***___CSS_LOADER_WITHOUT_SOURCE_MAP___***/
const CSS = {
  test: /\.css$/,
  // exclude: /node_modules/,
  use: [
    // {loader: 'style-loader'},
    { loader: MiniCssExtractPlugin.loader },
    { loader: 'css-loader',     options: { sourceMap: $SOURCE_MAP, importLoaders: 1, minimize: true, } },
    { loader: 'postcss-loader', options: { sourceMap: $SOURCE_MAP,
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
          require('postcss-flexbugs-fixes')(),
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
  plugins: $SOURCE_MAP? []: [
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
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: $SOURCE_MAP,
        },
        // filename: "[name].css",
        // chunkFilename: "[id].css"
        filename: '[contenthash].css',
        chunkFilename: '[contenthash].chunk.css',
    }),
    $SOURCE_MAP?'':
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: $SOURCE_MAP?{}:{
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
