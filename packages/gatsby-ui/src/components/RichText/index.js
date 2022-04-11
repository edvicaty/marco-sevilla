import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const RichText = ({ children, ...props }) => {
  const styles = { img: { maxWidth: "100%" } }
  if (typeof children === "string") {
    return (
      <Box
        __css={styles}
        {...props}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    )
  }

  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RichText
