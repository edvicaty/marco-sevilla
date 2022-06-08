import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Section = ({ children, margin, ...props }) => {
  return (
    <Box
      as="section"
      __css={{
        my: "large",
        width: "100%",
        maxWidth: "maxW",
        mx: "auto",
        px: "small",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.bool,
}

Section.defaultProps = {
  children: undefined,
  margin: true,
}

export default Section
