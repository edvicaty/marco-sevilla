import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Navigation } from "gatsby-ui"

const Layout = ({ children, ...props }) => {
  return (
    <Box __css={{ bg: "white" }} {...props}>
      <Navigation sx={{ mb: "medium" }} />

      <Box
        __css={{
          m: "0 auto",
          width: "100%",
          maxWidth: "maxW",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
