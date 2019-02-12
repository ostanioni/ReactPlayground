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
module.exports = {
  "presets": [ "@babel/preset-env", "@babel/preset-react", "minify" ],
  "plugins": [ DECORATOR, PROPOSAL, RUNTIME ],
};
 