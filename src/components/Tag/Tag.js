import React from "react"
import { Box } from "rebass"

const Tag = ({ children, ...boxProps }) => {
  return (
    <Box px={3} fontSize={2} color="black" bg="lightestBlue" {...boxProps}>
      {children}
    </Box>
  )
}

export default Tag
