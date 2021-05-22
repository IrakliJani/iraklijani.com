import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Bio from "../components/Bio"
import ArticleItem from "../components/ArticleItem"

type PostNode = {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      path: string
      date: string
      title: string
      description: string
    }
  }
}

interface DataProps {
  allMarkdownRemark: {
    edges: PostNode[]
  }
  site: {
    siteMetadata: {
      siteName: string
    }
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="All posts" />

      <Bio />

      {posts.map(({ node }) => {
        const slug = node.fields.slug
        const { path, title, date, description } = node.frontmatter
        const descriptionHTML = description || node.excerpt

        return <ArticleItem key={slug} path={path} title={title} date={date} descriptionHTML={descriptionHTML} />
      })}
    </Layout>
  )
}

export default IndexPage
