const path = require(`path`)
const CopyWebpackPlugin = require("copy-webpack-plugin")

// workaround to force Storybook to use Emotion 11, which
// the newer version of theme-ui uses. This is temporal,
// since this PR will solve the problem: https://github.com/storybookjs/storybook/pull/13300
const resolveModule = (p) => path.join(process.cwd(), "../../", p)

module.exports = {
  stories: ["../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]

    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../../../assets"),
            to: "assets",
          },
        ],
      })
    )

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    config.resolve.alias = {
      ...config.resolve.alias,
      ui: path.resolve(__dirname, "../src/components"),
      blocks: path.resolve(__dirname, "../src/blocks"),
      "@emotion/core": resolveModule("node_modules/@emotion/react"),
      "@emotion/styled": resolveModule("node_modules/@emotion/styled"),
      "emotion-theming": resolveModule("node_modules/@emotion/react"),
    }

    return config
  },
}
