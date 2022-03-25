import React from "react"
import PropTypes from "prop-types"
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
              as="img"
              __css={{
                width: ["100%", null, 416],
                overflow: "hidden",
              }}
              src={item.image.src}
              alt={item.image.alt}
            />
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
