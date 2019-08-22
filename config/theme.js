const color = {
  primary: "#44523E",
  primaryLighter: "#546E49",
  primaryLightest: "#9FB695",

  primaryDarker: "#39261D",
  accent: "#1B4117",
  accentLighter: "#496546",
  accentMuted: "#3C4C3B",
  paperLighter: "#ffffff",
  paper: "#BDAB9E",
  paperInverse: "#5C5047",
  text: "#2C2E31",
  textMuted: "#31353D",
  border: "#b1a49a",
  white: "#fff",
};

const spacing = 20;


const fontSize = {
  body: "100%", // 16px
  main: "1em", // 16px
  h1: "2em", // 32px
  h2: "1.625em", // 26px
  h3: "1.375em", // 22px
  h4: "1.125em" // 18px
};

const lineHeight = {
  body: "1.25em",
  main: "1.25em", // 20px
  h1: "1.25em", // 40px
  h2: "1.25em", // 40px
  h3: "1.25em", // 40px
  h4: "1.25em" // 20px
  // h1: "2.5em", // 40px
  // h2: "2.5em", // 40px
  // h3: "2.5em", // 40px
  // h4: "1.25em" // 20px
};

const bodyFont = "'Merriweather', serif";
const headlineFont = "'Magra', sans-serif";

const fontFamily = {
  body: bodyFont,
  headline: headlineFont,
}

const typography = {
  body: {
    fontFamily: bodyFont,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body
  },
  h1: {
    fontFamily: headlineFont,
    fontSize: fontSize.h1,
    lineHeight: lineHeight.h1,
    marginTop: spacing,
    marginBottom: spacing / 4,
  },
  h2: {
    fontFamily: headlineFont,
    fontSize: fontSize.h2,
    lineHeight: lineHeight.h2,
    marginTop: spacing,
    marginBottom: spacing / 4,
  },
  h3: {
    fontFamily: headlineFont,
    fontSize: fontSize.h3,
    lineHeight: lineHeight.h3,
    marginTop: spacing,
    marginBottom: spacing / 4,
  },
  h4: {
    fontFamily: headlineFont,
    fontSize: fontSize.h4,
    lineHeight: lineHeight.h4,
    marginTop: spacing,
    marginBottom: spacing / 4,
  }
};

const global = {
  "html, body": {
    fontSize: "100%",
    fontFamily: bodyFont,
    height: "100%",
    margin: 0,
    padding: 0,
    color: color.text,
    backgroundColor: color.paperLighter,
    // background: `${color.paper} url("/static/wood.jpg")`,
    backgroundSize: "25%"
  }
};

const shadow = {
  low: `rgba(0, 0, 0, 0.15) 0px 2px 4px 0px`,
  middle: `rgba(0, 0, 0, 0.25) 0px 4px 8px 0px`,
  high: `rgba(0, 0, 0, 0.4) 0px ${spacing}px ${spacing / 2}px 0px`
};

export const reset = {
  appearance: "none",
  backgroundColor: "transparent",
  border: 0,
  outline: 0,
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  padding: 0,
  margin: 0,
  listStyle: "none"
};

export default {
  color,
  fontSize,
  fontFamily,
  lineHeight,
  typography,
  spacing,
  global,
  shadow
};
