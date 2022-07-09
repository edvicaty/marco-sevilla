import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const HeroTwoColumns = ({ children, image, rightImage, ...props }) => {
  return (
    <Box
      as="section"
      __css={{
        display: "flex",
        justifyContent: "space-between",
        gap: "medium",
        flexDirection: [
          "column",
          null,
          null,
          rightImage ? "row-reverse" : "row",
        ],
      }}
      {...props}
    >
      <Box __css={{ width: ["100%", null, null, "65%"] }}>
        <GatsbyImage {...image} />
      </Box>
      <Box
        __css={{
          width: ["100%", null, null, "35%"],
          textAlign: ["center", null, null, "left"],
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

HeroTwoColumns.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
  rightImage: PropTypes.bool,
}

HeroTwoColumns.defaultProps = {
  rightImage: "false",
}

export default HeroTwoColumns
