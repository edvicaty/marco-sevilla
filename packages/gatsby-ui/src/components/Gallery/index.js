import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box } from "theme-ui"

const Gallery = ({ items, ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
      {...props}
    >
      {items?.map(item => {
        return (
          <Box __css={{ m: "xsmall" }}>
            <Box
              __css={{
                width: ["100%", null, 300],
                height: ["100%", null, 200],
                overflow: "hidden",
              }}
            >
              <GatsbyImage image={item.image} />
            </Box>

            <Box __css={{ fontSize: "base", fontStyle: "italic" }}>
              {item.text}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

Gallery.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

Gallery.defaultProps = {
  children: undefined,
}

export default Gallery
