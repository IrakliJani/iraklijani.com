import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About me" />

      <Bio />
    </Layout>
  )
}

export default BlogIndex
