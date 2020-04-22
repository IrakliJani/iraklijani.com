import React from "react"
import { Global } from "@emotion/core"
import { Box } from "rebass"

import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      <Global styles={globalCSS} />

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

const globalCSS = (theme) => ({
  "::selection": {
    backgroundColor: theme.colors.selection,
  },
  html: {
    backgroundColor: theme.colors.black,
  },
  body: {
    minHeight: "100vh",
    backgroundColor: theme.colors.white,
    lineHeight: theme.lineHeight.body,
  },
})

export default Layout
