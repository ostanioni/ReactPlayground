/* eslint-disable */
/*tslint:disabled*/
 const devMode = process.env.NODE_ENV !== 'production'
 let $SOURCEMAP = devMode ? true : false
  
module.exports = {
  sourceMap: $SOURCEMAP,
  // importLoaders: 2,
  ident: 'postcss',
  plugins: [
    require('postcss-import')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-preset-env')({
      stage: 3,
      autoprefixer: { flexbox: 'no-2009', grid: true, },
      features: {
      'nesting-rules': true,
      'color-mod-function': { unresolved: 'warn', }
      }
    }),
    require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true,} }], } ),
  ],  
}

/*
require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true,} }], } ),
options: {
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
  sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
},*/