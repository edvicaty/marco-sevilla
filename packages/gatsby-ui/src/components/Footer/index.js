import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box } from "theme-ui"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import RichText from "../RichText"

const Footer = ({ sx, ...props }) => {
  return (
    <Box
      __css={{ bg: "gray", boxShadow: "primary", mt: "medium", pb: "medium" }}
    >
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
          __css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            p: 0,
            py: "medium",
            color: "white",
            a: {
              p: "small",
            },
          }}
        >
          <RichText>
            <p>2022 © Marco Sevilla</p>
            <p>All rights reserved</p>
          </RichText>
          <Box>
            <Link to="https://www.instagram.com/marco_sevilla10/?fbclid=IwAR0WtkABFX2O_otmAZB5np9_3ty2YcSk1xPgdsHx9Ox3vzP087dLyWTp-aU">
              <FaInstagram style={{ color: "white" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  sx: PropTypes.shape({}),
}

Footer.defaultProps = {
  sx: undefined,
}

export default Footer
