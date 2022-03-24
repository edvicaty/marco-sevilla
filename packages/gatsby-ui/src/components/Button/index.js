import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Link } from "gatsby"

const Button = ({ to, children, variant, ...props }) => {
  const variants = {
    transparent: {
      color: "pureWhite",
      border: "2px solid white",
      bg: "transparent",
    },
  }

  return (
    <Box
      __css={{
        a: {
          py: "small",
          px: "medium",
          display: "inline-block",
          "&:hover": {
            boxShadow: "primary",
            transition: "primary",
          },
          ...variants[variant],
        },
      }}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </Box>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  variant: PropTypes.string,
}

Button.defaultProps = {
  children: undefined,
  to: undefined,
  variant: "transparent",
}

export default Button
