import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box } from "theme-ui"

const Navigation = ({ sx, ...props }) => {
  return (
    <Box __css={{ bg: "whiteSmoke", boxShadow: "primary" }}>
      <Box
        as="nav"
        __css={{
          fontSize: ["lg", "xl"],
          maxWidth: "maxW",
          m: "0 auto",
          ...sx,
        }}
        {...props}
      >
        <Box
          as="ul"
          __css={{
            display: "flex",
            py: "medium",
            a: {
              px: "medium",
              py: "medium",
              "&:hover": {
                color: "text",
                boxShadow: "primary",
                transition: "primary",
              },
            },
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </Box>
      </Box>
    </Box>
  )
}

Navigation.propTypes = {
  sx: PropTypes.shape({}),
}

Navigation.defaultProps = {
  sx: undefined,
}

export default Navigation
