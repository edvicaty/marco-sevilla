module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-props-no-spreading": "off",
  },
}
