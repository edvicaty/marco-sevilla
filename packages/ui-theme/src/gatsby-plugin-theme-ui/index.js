
const bColors = {
  transparent: "transparent",
  blackDeprecated: "#000",
  black: "#1B2944",
  white: "#fff",
  beige: "#EECF8E",
  darkCyan: "#2F5D66",
  lightBlue: "#9AA99D",
  darkRed: "#8B1D02",
  darkGray: "#2C292A",
  gray: "#353535",
  blueGreen: "#015C69",
  brightRed: "#C2240C",
  whiteSmoke: "#f2f2f2",
  oxfordGray: "#1B2944",
  lightGray: "#757575",
  translucidBlack: "rgba(0, 0, 0, 0.6)",
}

const maxWidth = "1360px"

const bFontSizes = {
  huge: "40px",
  xxxl: "30px",
  xxl: "25px",
  xl: "20px",
  lg: "18px",
  base: "15px",
  tiny: "13px",
}

const bLineHeights = {
  xlarge: "50px",
  large: "35px",
  medium: "30px",
  small: "25px",
  base: "20px",
}

const bSpaces = {
  xhuge: "150px",
  huge: "90px",
  xxxlarge: "60px",
  xxlarge: "50px",
  xlarge: "40px",
  large: "30px",
  medium: "15px",
  small: "10px",
  xsmall: "5px",
}

const bSizes = {
  huge: "250px",
  xxxlarge: "200px",
  xxlarge: "150px",
  xlarge: "100px",
  xl: "60px",
  large: "30px",
  medium: "25px",
  small: "20px",
}

export default {
  colors: { ...bColors },
  fontSizes: { ...bFontSizes },
  lineHeights: { ...bLineHeights },
  sizes: { ...bSizes },
  space: { ...bSpaces },
  breakpoints: ["426px", "800px", "1280px", "1440px"],
  styles: {
    root: {
      fontFamily: "base",
      fontSize: "base",
      lineHeight: "base",
      h1: {
        fontFamily: "title",
        fontSize: ["xl", "xxxl", "huge"],
        lineHeight: "1.35",
        color: "black",
      },
      h2: {
        fontFamily: "title",
        fontSize: ["lg", "xxl", "xxxl"],
        lineHeight: "1.35",
        color: "black",
      },
      h3: {
        fontSize: ["base", "xl", "xxl"],
        lineHeight: "1.35",
        color: "black",
      },
      p: { color: "black" },
      strong: { color: "black" },
      img: {
        maxWidth: "100%",
        height: "auto",
      },
      iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },
      ".iframe-wrapper": {
        position: "relative",
        pb: "56.25%",
        height: 0,
        overflow: "hidden",
      },
      ".caption": {
        textAlign: "center",
      },
    },
    a: {
      textDecoration: "none",
      color: "brightRed",
    },
    hr: {
      m: "0",
    },
  },

}
