import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import { Box } from "rebass"

const Layout = ({ title, children }) => {
  return (
    <>
      <Global styles={globalCSS} />

      <Box height="3px" backgroundColor="#6273CB" />

      <Box maxWidth="768px" mx="auto" px="3">
        <header>
          <h1>
            <Link style={{}} to={`/`}>
              {title}
            </Link>
          </h1>
        </header>

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://iraklijani.com">iraklijani.com</a>
        </footer>
      </Box>
    </>
  )
}

const globalCSS = css`
  html {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;

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
