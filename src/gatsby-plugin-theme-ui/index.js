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

const prismColors = {
  char: "#D8DEE9",
  comment: "#B2B2B2",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#88C6BE",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e",
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

// PRISM
export const prismStyles = {
  ".gatsby-highlight": {
    my: 5,
    mx: -6,
    px: 6,
    fontSize: 2,
    color: COLORS.white,
    background: COLORS.black,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
  },
  ".gatsby-highlight-code-line": {
    backgroundColor: hex2rgba(COLORS.white, 0.15),
    display: "block",
    mx: -6,
    px: 6,
  },
  [`.gatsby-highlight > code[class*="gatsby-code-"],
  .gatsby-highlight > pre[class*="gatsby-code-"],
  .gatsby-highlight > pre.prism-code`]: {
    height: "auto !important",
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  ".token.attr-name": {
    color: prismColors.keyword,
  },
  [`.token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata`]: {
    color: prismColors.comment,
  },
  [`.token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted`]: {
    color: prismColors.primitive,
  },
  ".token.boolean": {
    color: prismColors.boolean,
  },
  ".token.tag": {
    color: prismColors.tag,
  },
  ".token.string": {
    color: prismColors.string,
  },
  ".token.punctuation": {
    color: prismColors.punctuation,
  },
  [`.token.selector,
  .token.char,
  .token.builtin,
  .token.inserted`]: {
    color: prismColors.char,
  },
  ".token.function": {
    color: prismColors.function,
  },
  [`.token.operator,
  .token.entity,
  .token.url,
  .token.variable`]: {
    color: prismColors.variable,
  },
  ".token.attr-value": {
    color: prismColors.string,
  },
  ".token.keyword": {
    color: prismColors.keyword,
  },
  [`.token.atrule,
  .token.class-name`]: {
    color: prismColors.className,
  },
  ".token.important": {
    fontWeight: 400,
  },
  ".token.bold": {
    fontWeight: 700,
  },
  ".token.italic": {
    fontStyle: "italic",
  },
  ".token.entity": {
    cursor: "help",
  },
  ".namespace": {
    opacity: 0.7,
  },
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

export default {
  colors: COLORS,

  space: [0, 2, 4, 8, 16, 32, 48, 64, 96],
  sizes: [0, 8, 16, 24, 32, 48, 64, 96, 128, 192],

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
  fonts: {
    heading: "SpaceGrotesk",
    body: "HKGrotesk",
  },

  heading: {
    color: "black",
    fontWeight: 600,
  },
  lineHeight: {
    body: "normal",
    heading: "normal",
  },

  variants: {
    contentWrapper: {
      maxWidth: "1190px",
      mx: "auto",
      px: [4, 5, 6, 7],
    },
  },

  link: importedStyles.link,
  linkNoUnderline: {
    ...importedStyles.link,
    borderBottomWidth: "0px",
  },

  markdown: importedStyles.markdown,
}
