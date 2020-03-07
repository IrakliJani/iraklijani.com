import React from "react"
import { Box, Heading, Text } from "rebass"

const FancyHeading = ({ children, ...extraHeadingProps }) => {
  return (
    <Heading display="inline-block" {...extraHeadingProps} sx={{ position: "relative" }}>
      <Text sx={{ position: "relative", zIndex: 1 }}>{children}</Text>
      <Box
        backgroundColor="redLightest"
        sx={{ position: "absolute", width: "100%", height: "50%", zIndex: 0, top: "40%", right: "5%" }}
      />
    </Heading>
  )
}

export default FancyHeading
