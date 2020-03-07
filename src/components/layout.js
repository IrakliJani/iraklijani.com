import React from "react"
import { Global, css } from "@emotion/core"
import { Box } from "rebass"

import Footer from "./../components/Footer"

const Layout = ({ children, showFooter = true }) => {
  return (
    <>
      <Global styles={globalCSS} />

      <Box height="2px" backgroundColor="black" />

      <Box maxWidth="1190px" mx="auto" px={8} py={6} fontFamily="body" fontSize={3} color="black">
        {/* TODO: add navbar */}
        {/* <header>nav...</header> */}

        <main>{children}</main>

        {showFooter && <Footer />}
      </Box>
    </>
  )
}

const globalCSS = theme => css`
  html {
    background-color: ${theme.colors.black};
  }

  body {
    background-color: ${theme.colors.white};
    min-height: 100vh;
  }
`

export default Layout
