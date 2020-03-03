import React from "react"
import { Box } from "rebass"

const Footer = () => {
  return (
    <Box as="footer" py={5}>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://iraklijani.com">iraklijani.com</a>
    </Box>
  )
}

export default Footer
