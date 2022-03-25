import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const RichText = ({ children, ...props }) => {
  if (typeof children === "string") {
    return <Box {...props} dangerouslySetInnerHTML={{ __html: children }} />
  }

  return <div {...props}>{children}</div>
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RichText
