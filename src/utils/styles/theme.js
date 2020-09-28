const theme = {
  colors: {
    primary: "#FCD06B",
    dark: "#595C5B",
    blue: "#383c50",
    bluelight: "rgba(56, 60, 80, 0.6)",
    lighter: "#eef1f2",

    lightTheme: {
      text: "#575757",
      textHighlight: "#333",
      background: "#fff",
    },
    darkTheme: {
      text: "#dadada",
      textHighlight: "#F0F0F0",
      background: "#212121",
    },
  },
  mediaQueries: {
    micro: `only screen and (max-width:20em)`,
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 34.37em)", // 550px
    small: "only screen and (max-width: 48em)", //768px
    medium: "only screen and (max-width: 56.25em)", //900px
    large: "only screen and (max-width: 62.5em)", //1000px
    larger: "only screen and (max-width: 80em)",
    largest: "only screen and (max-width: 90em)",
  },
}

export default theme
