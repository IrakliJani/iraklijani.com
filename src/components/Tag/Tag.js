import React from "react"
import { Flex } from "rebass"

const Tag = ({ children, ...boxProps }) => {
  return (
    <Flex alignItems="center" px={3} height={3} fontSize={2} color="black" backgroundColor="blueLightest" {...boxProps}>
      {children}
    </Flex>
  )
}

export default Tag
