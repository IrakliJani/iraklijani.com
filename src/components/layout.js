import React from "react"
import { Link } from "gatsby"

const Layout = ({ title, children }) => {
  return (
    <>
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
    </>
  )
}

export default Layout
