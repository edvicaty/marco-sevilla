import * as React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import uuid from "react-uuid"
import Layout from "../components/Layout"
import { componentResolver } from "../utils/component-resolver"

const Page = ({ data }) => {
  const components = componentResolver(data.page.components)
  return (
    <Layout>
      {components?.length &&
        components.map(item => {
          return <React.Fragment key={uuid()}>{item}</React.Fragment>
        })}
    </Layout>
  )
}

export default Page

Page.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      components: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query page($id: String!) {
    page: contentfulLandingPage(id: { eq: $id }) {
      components {
        ... on ContentfulHero {
          __typename
          id
          body {
            childMarkdownRemark {
              html
            }
          }
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
          cta: components {
            url
            linkText
          }
        }
        ... on ContentfulImageGallery {
          __typename
          id
          images {
            gatsbyImageData(placeholder: BLURRED)
            description
          }
        }
        ... on ContentfulTextBlock {
          __typename
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
