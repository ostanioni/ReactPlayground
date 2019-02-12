const RUNTIME =  [
  "@babel/plugin-transform-runtime",
  {
    "corejs": false,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }
];
const PROPOSAL = "@babel/plugin-proposal-class-properties";
module.exports = {
  "presets": [ "@babel/preset-env", "@babel/preset-react", "minify" ],
  "plugins": [ PROPOSAL, RUNTIME ],
};
 