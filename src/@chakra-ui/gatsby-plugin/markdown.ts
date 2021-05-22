import { Theme } from "@chakra-ui/theme"

export const markdownStyles = {
  "a:not(.anchor):not(.gatsby-resp-image-link)": (theme: Theme) => theme.components.Link.baseStyle,

  p: (theme: Theme) => ({
    fontSize: theme.fontSizes.md,
    marginTop: 4,
  }),

  h1: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["4xl"],
  }),

  h2: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["3xl"],
  }),

  h3: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["2xl"],
  }),

  h4: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["xl"],
  }),

  h5: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["lg"],
  }),

  h6: (theme: Theme) => ({
    ...theme.components.Heading.baseStyle,
    fontSize: theme.fontSizes["md"],
  }),

  hr: (theme: Theme) => theme.components.Divider.baseStyle,

  ol: (theme: Theme) => {
    // TODO implement
  },

  ul: (theme: Theme) => {
    // TODO implement
  },

  img: {
    maxWidth: "100%",
  },

  // TODO sync with code
  blockquote: {
    backgroundColor: "blackAlpha.100",
    borderLeftColor: "blackAlpha.700",
    borderLeftWidth: 4,
    borderLeftStyle: "solid",
    paddingX: 6,
    paddingY: 4,
    marginY: 5,
    marginX: -10,

    p: {
      marginTop: 0,
    },
  },
}
