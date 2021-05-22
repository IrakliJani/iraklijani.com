import { extendTheme, ThemeOverride } from "@chakra-ui/react"

import { markdownStyles } from "./markdown"
import { prismStyles } from "./_prism"

const theme: ThemeOverride = {
  styles: {
    global: {
      "::selection": {
        backgroundColor: "yellow.200",
      },
      html: {
        backgroundColor: "black",
      },
      body: {
        minHeight: "100vh",
        backgroundColor: "white",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontFeatureSettings: `"liga" off, "calt" on`,
        fontFeatureSettings: `"liga" off, "calt" on`,
        fontVariantLigatures: "none",
      },
      ...prismStyles,
    },
  },
  config: {
    cssVarPrefix: "c",
  },
  components: {
    Text: {
      variants: {
        markdown: markdownStyles,
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
        color: "black",
        backgroundColor: "blackAlpha.50",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "blackAlpha.200",

        _hover: {
          textDecoration: "none",
          backgroundColor: "blackAlpha.200",
          borderBottomWidth: "1px",
          borderBottomColor: "blackAlpha.800",
        },
      },
    },
  },
}

export default extendTheme(theme)
