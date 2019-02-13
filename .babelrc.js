const RUNTIME =  [
  "@babel/plugin-transform-runtime",
  {
    "corejs": false,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }
];
const DECORATOR = ["@babel/plugin-proposal-decorators", { "legacy": true }];
const PROPOSAL = ["@babel/plugin-proposal-class-properties", { "loose" : true }];
const PRISM = [
  "prismjs", 
  {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers"],
      "theme": "tomorrow",
      "css": true
  }
];
const STYLED = [ 
  "babel-plugin-styled-components", 
  { 
    "fileName": false,
    "displayName": false,
    "ssr": false,
    "minify": false,
    "pure": true,
    "transpileTemplateLiterals": true
  } 
];
module.exports = {
  "presets": [ "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", "minify" ],
  "plugins": [ DECORATOR, PROPOSAL, RUNTIME, PRISM, STYLED ],
};
 