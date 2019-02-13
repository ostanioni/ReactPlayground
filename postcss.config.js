/* eslint-disable */ 
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': { 
      "preset": [ "advanced", { "discardComments": {"removeAll": true} } ]
    }
  }
}