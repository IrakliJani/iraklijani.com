import React from "react"
import { Box } from "@chakra-ui/react"

import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      <Box height="2px" backgroundColor="black" />

      <Box fontFamily="body" lineHeight="body" fontSize={3} color="black">
        {showHeader && <Header />}

        <Box as="main" py={[4, 4, 4, 5]} sx={{ overflowX: "hidden" }}>
          <Box variant="contentWrapper">
            {children}

            {showFooter && <Footer />}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Layout
