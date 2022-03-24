// const maxWidth = "1360px"

const bBreakpoints = ["400px", `640px`, `896px`, `1280px`]

const bColors = {
  transparent: "transparent",
  black: "#000",
  white: "#FFFAFA",
  pureWhite: "#FFFFFF",
  whiteSmoke: "#F5F5F5",
  translucidBlack: "rgba(0, 0, 0, 0.5)",
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

const bshadows = {
  primary: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
}

const btransitions = {
  primary: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
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

const bSizes = {
  100: "100px",
  200: "200px",
  300: "300px",
  400: "400px",
  500: "500px",
  maxW: "1360px",
}

const bfontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

const bFonts = {
  body: "Newsreader, serif",
  heading: "Verdana, sans-serif",
  monospace: "Courier, monospace",
}

const colors = {
  ...bColors,
  text: bColors.black,
  background: bColors.white,
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
  shadows: bshadows,
  transitions: btransitions,
  sizes: bSizes,
  styles: {
    root: {
      body: { fontSize: "lg", fontFamily: "body", bg: "background" },
      ul: {
        listStyle: "none",
        p: 0,
      },
      a: { textDecoration: "none", color: "text" },
    },
  },
}
