import { CSSObject } from "@chakra-ui/styled-system"

const contentBound = 10

export const prismStyles: CSSObject = {
  ".gatsby-highlight": {
    marginY: 5,
    marginX: -contentBound,
    paddingX: contentBound,
    fontFamily: "mono",
    color: "white",
    background: "black",
    overflow: "visible",
    WebkitOverflowScrolling: "touch",
  },
  ".gatsby-highlight-code-line": {
    backgroundColor: "whiteAlpha.300",
    display: "block",
    marginX: -contentBound,
    paddingX: contentBound,
  },
  [`.gatsby-highlight > code[class*="gatsby-code-"],
  .gatsby-highlight > pre[class*="gatsby-code-"],
  .gatsby-highlight > pre.prism-code`]: {
    height: "auto !important",
    lineHeight: "20paddingX",
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
  "code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection":
    {
      textShadow: "none",
      background: "rgba(29,59,83,.99)",
    },
  "code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection":
    {
      textShadow: "none",
      background: "rgba(29,59,83,.99)",
    },

  "pre[class*=language-]": {
    padding: "1em",
    margin: ".5em 0",
  },
  ":not(pre)>code[class*=language-],pre[class*=language-]": {
    color: "#fff",
    background: "black",
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
