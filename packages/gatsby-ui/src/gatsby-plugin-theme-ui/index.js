// const maxWidth = "1360px"

const bBreakpoints = ["400px", `640px`, `896px`, `1280px`]

const bColors = {
  transparent: "transparent",
  black: "#1a2421",
  gray: "#353839",
  white: "#FFFAFA",
  pureWhite: "#FFFFFF",
  whiteSmoke: "#F5F5F5",
  translucidBlack: "rgba(0, 0, 0, 0.5)",
}

const bFontSizes = {
  tiny: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "30px",
  "3xl": "40px",
  "4xl": "50px",
  "5xl": "60px",
}

const bLineHeights = {
  body: 1.5,
  heading: 1.125,
}

const bshadows = {
  primary: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
  secondary: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;",
  tertiary: "rgba(17, 17, 26, 0.5) 0px 0px 16px",
}

const btransitions = {
  primary: "all 0.2s ease-in-out",
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
  150: "150px",
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
  heading: "Newsreader, sans-serif",
  monospace: "Courier, monospace",
}

const colors = {
  ...bColors,
  text: bColors.black,
  background: bColors.white,
  primary: bColors.black,
  secondary: bColors.white,
}

const bHeadings = {
  base: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    my: "xsmall",
  },
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

      a: { textDecoration: "none", color: "text" },
      h1: {
        ...bHeadings.base,
        fontSize: ["4xl", null, "5xl"],
      },
      h2: {
        ...bHeadings.base,
        fontSize: ["3xl", null, "4xl"],
      },
      h3: {
        ...bHeadings.base,
        fontSize: ["2xl", null, "3xl"],
      },
      h4: {
        ...bHeadings.base,
        fontSize: ["base", null, "2xl"],
      },
      h5: {
        ...bHeadings.base,
        fontSize: ["tiny", null, "base"],
      },
      h6: {
        ...bHeadings.base,
        fontSize: "tiny",
      },
    },
  },
}
