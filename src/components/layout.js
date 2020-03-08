import React from "react"
import { Global, css } from "@emotion/core"
import { Box } from "rebass"

import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      <Global styles={globalCSS} />

      <Box height="2px" backgroundColor="black" />

      <Box fontFamily="body" lineHeight="body" fontSize={3} color="black">
        {showHeader && <Header ContentWrapper={ContentWrapper} />}

        <Box maxWidth="1190px" mx="auto">
          <Box as="main" py={[3, 4, 5, 6]}>
            <ContentWrapper>
              {children}

              {showFooter && <Footer />}
            </ContentWrapper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

const ContentWrapper = ({ children, ...extraBoxProps }) => {
  return (
    <Box px={[5, 6, 7, 8]} {...extraBoxProps}>
      {children}
    </Box>
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
