const maxWidth = "1360px"

const bBreakpoints = [`640px`, `896px`, `1280px`]

const bColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
}

const bFontSizes = {
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
}

const bLineHeights = {
  body: 1.5,
  heading: 1.125,
}

const bSpaces = {
  none: 0,
  tiny: "4px",
  xsmall: "8px",
  small: "16px",
  medium: "32px",
  large: "64px",
  xlarge: "128px",
}

const bfontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

const bFonts = {
  body: "Verdana, sans-serif",
  heading: "Verdana, sans-serif",
  monospace: "Courier, monospace",
}

const colors = {
  text: bColors.black,
  background: bColors.transparent,
  primary: bColors.black,
  secondary: bColors.white,
}

export default {
  colors,
  breakpoints: bBreakpoints,
  fonts: bFonts,
  fontWeights: bfontWeights,
  lineHeights: bLineHeights,
  fontSizes: bFontSizes,
  space: bSpaces,
  styles: {
    root: {
      body: { fontSize: "base", fontFamily: "body" },
    },
  },
}
