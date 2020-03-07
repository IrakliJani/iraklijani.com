export default {
  colors: {
    black: "black",
    white: "white",
    blueLightest: "#EDF4FA",
    yellowLightest: "#FAF7E8",
  },

  space: [0, 2, 4, 8, 16, 32, 48, 64, 96],
  sizes: [0, 8, 16, 24, 32, 48, 64, 96, 128, 192],

  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48],
  fonts: {
    heading: "SpaceGrotesk",
    body: "HKGrotesk",
  },

  heading: {
    color: "black",
  },
  fontWeight: {
    heading: 600,
  },
  lineHeight: {
    heading: "normal",
  },

  variants: {
    link: {
      textDecoration: "none",
      color: "black",
      "&:hover": {
        color: "white",
        backgroundColor: "black",
      },
    },
  },
}
