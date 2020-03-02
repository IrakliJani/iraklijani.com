import React from "react"
import { Global, css } from "@emotion/core"
import { Box } from "rebass"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalCSS} />

      <Box height="3px" backgroundColor="#6273CB" />

      <Box maxWidth="1190px" mx="auto" px={8} pt={6} fontFamily="body" fontSize={3} color="black">
        {/* <header>nav...</header> */}

        <main>{children}</main>

        <Box as="footer" py={5}>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://iraklijani.com">iraklijani.com</a>
        </Box>
      </Box>
    </>
  )
}

const globalCSS = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #6273cb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    background-color: white;
    min-height: 100vh;
  }
`

export default Layout
