const path = require("path")
const dotenv = require("dotenv")

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  //   const status = process.env.NODE_ENV === "production" ? '["1"]' : '["0", "1"]'

  return graphql(`
    {
      allContentfulLandingPage {
        nodes {
          slug
          id
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create main pages.
    const pages = result.data.allContentfulLandingPage.nodes
    pages.forEach(page => {
      createPage({
        path: page.slug,
        component: path.resolve(`${__dirname}/src/templates/page.js`),
        context: {
          id: page.id,
        },
      })
    })
  })
}
