import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Component = ({ children, ...props }) => {
  return (
    <Box as="section" {...props}>
      {children}
    </Box>
  )
}

Component.propTypes = {
  children: PropTypes.node,
}

Component.defaultProps = {
  children: undefined,
}

export default Component
