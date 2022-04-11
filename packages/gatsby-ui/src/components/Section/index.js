import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Section = ({ children, ...props }) => {
  return (
    <Box as="section" __css={{ mx: "small", my: "large" }} {...props}>
      {children}
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

Section.defaultProps = {
  children: undefined,
}

export default Section
