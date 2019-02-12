module.exports = {
    "extends": [ "eslint:recommended", "plugin:react/recommended" ],
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "detect", // React version. "detect" automatically picks the version you have installed.
                               // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
          // "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ]
      },
      "plugins": [ "react", "jsx-a11y" ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "rules": {
        "jsx-a11y/rule-name": 2
      }
};
// "airbnb", , "plugin:jsx-a11y/recommended"