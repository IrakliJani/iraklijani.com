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

      <Box as="main" paddingY={7}>
        <Container>
          {children}

          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Layout
