/* eslint-disable */ 
 // const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  
}

/*
parser: 'post-scss',
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

 module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.scss' ? 'scss' : false,
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-preset-env': options['postcss-preset-env'] ? options['postcss-preset-env'] : false,
    'cssnano': env === 'production' ? options.cssnano : false
  }
})
*/
