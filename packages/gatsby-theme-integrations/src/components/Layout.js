import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Navigation, Footer } from "gatsby-ui"

const Layout = ({ children, ...props }) => {
  return (
    <Box __css={{ bg: "white" }} {...props}>
      <Navigation />
      <Box
        __css={{
          m: "0 auto",
          width: "100%",
          maxWidth: "maxW",
          minHeight: "80vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
