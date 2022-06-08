import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const RichText = ({ children, ...props }) => {
  const styles = {
    img: { maxWidth: ["100%", null, "60%"] },
    iframe: {
      display: "block",
      mx: "auto",
      my: "medium",
      width: "100%",
      height: ["200px", "500px", "600px"],
    },
  }
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
