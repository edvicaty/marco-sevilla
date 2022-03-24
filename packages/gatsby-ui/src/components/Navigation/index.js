import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box } from "theme-ui"

const Navigation = ({ sx }) => {
  return (
    <Box
      as="nav"
      __css={{
        bg: "whiteSmoke",
        boxShadow: "primary",
        fontSize: ["lg", "xl"],
        ...sx,
      }}
    >
      <Box
        as="ul"
        __css={{
          display: "flex",
          ml: ["medium", "large"],
          py: "medium",
          a: {
            p: ["small", "medium"],
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
  )
}

Navigation.propTypes = {
  sx: PropTypes.shape({}),
}

Navigation.defaultProps = {
  sx: undefined,
}

export default Navigation
