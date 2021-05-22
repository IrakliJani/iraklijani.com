import * as React from "react"
import { Box, Container } from "@chakra-ui/react"

import Header from "./Header"
import Footer from "./Footer"

interface LayputProps {
  children: React.ReactNode
}

const Layout: React.FC<LayputProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Box as="main" py={7} overflow="hidden">
        <Container>
          {children}

          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Layout
