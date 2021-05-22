import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />

      <h1>Not Found</h1>

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
