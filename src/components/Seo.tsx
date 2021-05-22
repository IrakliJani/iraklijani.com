import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface QueryResult {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: {
        social: {
          twitter: string
        }
      }
    }
  }
}

const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          social {
            twitter
          }
        }
      }
    }
  }
`

interface MetaProp {
  name: string
  content: string
}

interface SeoProps {
  description?: string
  lang?: string
  meta?: MetaProp[]
  title?: string
}

const Seo: React.FC<SeoProps> = ({ description, lang, meta: extraMeta, title }) => {
  const { site } = useStaticQuery<QueryResult>(SITE_QUERY)

  const fullTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const meta = [
    {
      name: `viewport`,
      content: `width=device-width,user-scalable=no`,
    },
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: fullTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author.social.twitter,
    },
    {
      name: `twitter:title`,
      content: fullTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return <Helmet htmlAttributes={{ lang }} title={fullTitle} meta={extraMeta ? meta.concat(extraMeta) : meta} />
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default Seo
