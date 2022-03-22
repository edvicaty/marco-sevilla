module.exports = {
  siteMetadata: {
    title: `Marco Sevilla`,
    description: `Marco Sevilla website`,
    author: `edvicaty`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-marco-sevilla`,
      options: {
        root: __dirname,
      },
    },
  ],
}
