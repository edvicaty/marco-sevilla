import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Hero = ({ children, image, ...props }) => {
  return (
    <Box
      __css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: [200, 300, 400, 500],
        overflow: "hidden",
      }}
      as="section"
      {...props}
    >
      {/* children */}
      <Box
        __css={{
          zIndex: 10,
          position: "absolute",
          color: "pureWhite",
          fontSize: ["2xl", "3xl"],
        }}
      >
        {children}
      </Box>
      {/* Image and overlay */}
      <Box as="img" __css={{ width: "100%" }} {...image} />
      <Box
        __css={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bg: "translucidBlack",
        }}
      />
    </Box>
  )
}

Hero.propTypes = {
  children: PropTypes.node,
  image: PropTypes.shape({}),
}

Hero.defaultProps = {
  children: undefined,
  image: undefined,
}

export default Hero
