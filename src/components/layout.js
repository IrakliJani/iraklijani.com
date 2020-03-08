import React from "react"
import { Global, css } from "@emotion/core"
import { Box } from "rebass"

import Footer from "./../components/Footer"

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      <Global styles={globalCSS} />

      <Box height="2px" backgroundColor="black" />

      {/* TODO: nav */}
      {showHeader && (
        <header>
          <nav></nav>
        </header>
      )}

      <Box
        maxWidth="1190px"
        mx="auto"
        px={[5, 6, 7, 8]}
        py={[3, 4, 5, 6]}
        fontFamily="body"
        lineHeight="body"
        fontSize={3}
        color="black"
      >
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
    min-height: 100vh;
    background-color: ${theme.colors.white};
    line-height: ${theme.lineHeight.body};
  }
`

export default Layout
