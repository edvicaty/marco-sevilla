import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box } from "theme-ui"

const Hero = ({ children, image, ...props }) => {
  return (
    <Box
      __css={{
        display: "grid",
        position: "relative",
        height: [200, 300, 400, 500],
        mx: [0, 0, 0, "medium"],
        color: "pureWhite",
        fontSize: ["xl", "2xl", "3xl"],
        textAlign: "center",
      }}
      {...props}
    >
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        formats={["auto", "webp", "avif"]}
        {...image}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
          zIndex: 10,
        }}
      >
        {children}
      </div>
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
