import React from "react"
import { Button, Hero, Section, RichText, Gallery } from "gatsby-ui"

export const resolve = entity => {
  if (entity.__typename.endsWith(`ContentfulTextBlock`)) {
    return (
      <Section>
        <RichText>{entity?.body?.childMarkdownRemark.html}</RichText>
      </Section>
    )
  }
  if (entity.__typename.endsWith(`ContentfulHero`)) {
    return (
      <Hero image={{ image: entity.image.gatsbyImageData, alt: "" }}>
        <RichText>{entity?.body?.childMarkdownRemark.html}</RichText>
        {entity?.cta?.url && (
          <Button sx={{ my: "medium" }} to={entity?.cta?.url}>
            {entity?.cta?.linkText}
          </Button>
        )}
      </Hero>
    )
  }
  if (entity.__typename.endsWith(`ContentfulImageGallery`)) {
    const images = entity.images?.map(item => {
      return {
        image: item.gatsbyImageData,
        text: item.description,
      }
    })
    return (
      <Section>
        <Gallery items={images} />
      </Section>
    )
  }

  return <></>
}

export const componentResolver = data => {
  const components = []
  if (data) {
    data.forEach(item => {
      components.push(resolve(item))
    })
  }

  return components
}
