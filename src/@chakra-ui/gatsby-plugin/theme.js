import { extendTheme } from "@chakra-ui/react"
import hex2rgba from "hex2rgba"

const COLORS = {
  black: "#000000",
  white: "#FFFFFF",
  blueLightest: "#EDF4FA",
  yellowLightest: "#FAF7E8",
  redLightest: "#FAEDEF",

  selection: "#FDF4AA",

  // TODO: imported
  text: "#1a1a1a", // very dark grey / black substitute
  divider: "#ececec", // very light grey
  note: "#ffe564", // yellow
}

// TODO: imported...
const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
}

const media = {
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].min - 1}px)`
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`
  },

  size(key) {
    const size = SIZES[key]

    if (size.min == null) {
      return media.lessThan(key)
    } else if (size.max == null) {
      return media.greaterThan(key)
    } else {
      return media.between(key, key)
    }
  },
}

const linkStyle = {
  color: COLORS.text,
  bg: hex2rgba(COLORS.black, 0.05),
  textDecoration: "none",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: hex2rgba(COLORS.black, 0.2),

  ":hover": {
    backgroundColor: hex2rgba(COLORS.black, 0.1),
    borderBottomWidth: "1px",
    borderBottomColor: COLORS.text,
  },
}

const contentBounds = [4, 5, 6, 7]

// PRISM
export const prismStyles = {
  ".gatsby-highlight": {
    my: [2, 3, 4, 5],
    mx: contentBounds.map((n) => -n),
    px: contentBounds,
    fontSize: [0, 1, 2, 2],
    fontFamily: "mono",
    color: COLORS.white,
    background: COLORS.black,
    overflow: "visible",
    WebkitOverflowScrolling: "touch",
  },
  ".gatsby-highlight-code-line": {
    backgroundColor: hex2rgba(COLORS.white, 0.1),
    display: "block",
    mx: contentBounds.map((n) => -n),
    px: contentBounds,
  },
  [`.gatsby-highlight > code[class*="gatsby-code-"],
  .gatsby-highlight > pre[class*="gatsby-code-"],
  .gatsby-highlight > pre.prism-code`]: {
    height: "auto !important",
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },

  "code[class*=language-],pre[class*=language-]": {
    fontFamily: "JetBrains Mono",
    color: "#d6deeb",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  "code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection": {
    textShadow: "none",
    background: "rgba(29,59,83,.99)",
  },
  "code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection": {
    textShadow: "none",
    background: "rgba(29,59,83,.99)",
  },

  "pre[class*=language-]": {
    padding: "1em",
    margin: ".5em 0",
  },
  ":not(pre)>code[class*=language-],pre[class*=language-]": {
    color: "#fff",
    background: COLORS.black,
  },
  ":not(pre)>code[class*=language-]": {
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  ".token.cdata,.token.comment,.token.prolog": {
    color: "#637777",
    fontStyle: "italic",
  },
  ".token.punctuation": { color: "#c792ea" },
  ".namespace": { color: "#b2ccd6" },
  ".token.deleted": { color: "rgba(239,83,80,.56)", fontStyle: "italic" },
  ".token.property,.token.symbol": { color: "#80cbc4" },
  ".token.keyword,.token.operator,.token.tag": { color: "#7fdbca" },
  ".token.boolean": { color: "#ff5874" },
  ".token.number": { color: "#f78c6c" },
  ".token.builtin,.token.char,.token.constant,.token.function": {
    color: "#82aaff",
  },
  ".token.doctype,.token.selector": { color: "#c792ea", fontStyle: "italic" },
  ".token.attr-name,.token.inserted": { color: "#addb67", fontStyle: "italic" },
  ".language-css .token.string,.style .token.string,.token.entity,.token.string,.token.url": {
    color: "#addb67",
  },
  ".token.atrule,.token.attr-value,.token.class-name": { color: "#ffcb8b" },
  ".token.important,.token.regex,.token.variable": { color: "#d6deeb" },
  ".token.bold,.token.important": { fontWeight: "700" },
  ".token.italic": { fontStyle: "italic" },
}

const importedStyles = {
  link: linkStyle,

  markdown: {
    lineHeight: "25px",

    ...prismStyles,

    "& a:not(.anchor):not(.gatsby-resp-image-link)": linkStyle,

    "& > p:first-child": {
      fontSize: 4,
      lineHeight: "32px",
    },

    "& p": {
      mt: 4,
      fontSize: 3,
      lineHeight: "26px",

      "&:first-of-type": {
        mt: 3,
      },

      "&:first-child": {
        mt: 0,
      },
    },

    "& h3 + p, & h3 + p:first-of-type": {
      marginTop: 20,
    },

    "& p > code, & li > code": {
      background: hex2rgba(COLORS.note, 0.2),
      color: COLORS.text,
    },

    "& p > code, & li > code, & p > a > code, & li > a > code": {
      padding: "0 3px",
      fontSize: "0.94em", // 16px on 17px text, smaller in smaller text
      wordBreak: "break-word",
    },

    "& hr": {
      height: 1,
      marginBottom: -1,
      border: "none",
      borderBottom: `1px solid ${COLORS.divider}`,
      marginTop: 40,

      ":first-child": {
        marginTop: 0,
      },
    },

    "& h1": {
      lineHeight: 1.2,

      [media.size("xsmall")]: {
        fontSize: 30,
      },

      [media.between("small", "large")]: {
        fontSize: 45,
      },

      [media.greaterThan("xlarge")]: {
        fontSize: 60,
      },
    },

    "& h2": {
      borderTop: `1px solid ${COLORS.divider}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,

      ":first-child": {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0,
      },

      [media.lessThan("large")]: {
        fontSize: 20,
      },
      [media.greaterThan("xlarge")]: {
        fontSize: 35,
      },
    },

    "& hr + h2": {
      borderTop: 0,
      marginTop: 0,
    },

    "& h3": {
      paddingTop: 45,

      [media.lessThan("small")]: {
        overflowWrap: "break-word",
        wordBreak: "break-word",
      },

      [media.greaterThan("xlarge")]: {
        fontSize: 25,
        lineHeight: 1.3,
      },
    },

    "& h2 + h3, & h2 + h3:first-of-type": {
      paddingTop: 30,
    },

    "& h4": {
      fontSize: 20,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400,
    },

    "& h4 + p": {
      marginTop: 20,
    },

    "& ol, & ul": {
      marginTop: 20,
      fontSize: 16,
      color: COLORS.text,
      paddingLeft: 20,

      "& p, & p:first-of-type": {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2,
      },

      "& li": {
        marginTop: 10,
      },

      "& li.button-newapp": {
        marginTop: 0,
      },

      "& ol, & ul": {
        marginLeft: 20,
        marginTop: 10,
      },
    },

    "& img": {
      maxWidth: "100%",
    },

    "& ol": {
      listStyle: "decimal",
    },

    "& ul": {
      listStyle: "disc",
    },

    "& blockquote": {
      backgroundColor: hex2rgba("#ffe564", 0.3),
      borderLeftColor: COLORS.note,
      borderLeftWidth: 9,
      borderLeftStyle: "solid",
      padding: "20px 45px 20px 26px",
      marginBottom: 30,
      marginTop: 20,
      marginLeft: -30,
      marginRight: -30,

      [media.lessThan("small")]: {
        marginLeft: -20,
        marginRight: -20,
      },

      "& p": {
        marginTop: 15,

        "&:first-of-type": {
          fontWeight: 700,
          marginTop: 0,
        },

        "&:nth-of-type(2)": {
          marginTop: 0,
        },
      },
    },

    "& .gatsby-highlight + blockquote": {
      marginTop: 40,
    },
  },
}

const theme = {
  styles: {
    global: {
      "::selection": {
        backgroundColor: "selection",
      },
      html: {
        backgroundColor: "black",
      },
      body: {
        minHeight: "100vh",
        backgroundColor: "white",
      },
    },
  },
  // colors: COLORS,
  // space: [0, 2, 4, 8, 16, 32, 48, 64, 96],
  // sizes: [0, 8, 16, 24, 32, 48, 64, 96, 128, 192],
  // fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
  // fonts: {
  //   heading: "SpaceGrotesk",
  //   body: "HKGrotesk",
  // },
  // heading: {
  //   color: "black",
  //   fontWeight: 600,
  // },
  // variants: {
  //   contentWrapper: {
  //     maxWidth: "1190px",
  //     mx: "auto",
  //     px: contentBounds,
  //   },
  // },
  // link: importedStyles.link,
  // linkNoUnderline: {
  //   ...importedStyles.link,
  //   borderBottomWidth: "0px",
  // },
  // markdown: importedStyles.markdown,
}

export default extendTheme(theme)
