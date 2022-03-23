module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter`,
    author: `edvicaty`,
    siteUrl: `https://github.com/edvicaty/`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-integrations`,
      options: {
        root: __dirname,
      },
    },
  ],
}
