import React from "react"
import { Text } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"

const AboutMe = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About me" />

      <Bio />
    </Layout>
  )
}

export default AboutMe
