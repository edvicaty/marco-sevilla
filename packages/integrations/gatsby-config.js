

module.exports = {
  siteMetadata: {
    title: `Marco Sevilla`,
    description: `Marco Sevilla`,
    author: `edvicaty`,
    url: process.env.GATSBY_URL,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Marco Sevilla",
        short_name: "Marco Sevilla",
        start_url: "/",
        icon: "static/favicon.png",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-client-side-redirect`,
    `ui-theme`,
  ],
}
