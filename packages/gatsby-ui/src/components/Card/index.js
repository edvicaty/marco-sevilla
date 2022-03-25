import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import RichText from "../RichText"

const Card = ({ image, children, ...props }) => {
  return (
    <Box {...props}>
      <img {...image} alt="" />
      <RichText>{children}</RichText>
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.shape({}).isRequired,
}

Card.defaultProps = {
  children: undefined,
}

export default Card
