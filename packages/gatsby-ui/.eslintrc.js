const path = require("path")

const rootConfigPath = path.resolve(__dirname, "../../.eslintrc.js")

/**
 * @type {import("eslint").Linter.BaseConfig}
 */
const config = {
  extends: [rootConfigPath],
  rules: {
    "import/no-useless-path-segments": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
}

module.exports = config
