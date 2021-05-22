import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Bio from "../components/Bio"
import ArticleItem from "../components/ArticleItem"
import { Heading } from "@chakra-ui/layout"

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
      <Seo />

      <Bio />

      <Heading as="h3" fontSize="x-large" textAlign="center" marginBottom={4}>
        Recent Blogs
      </Heading>

      {posts.map((post) => {
        return (
          <ArticleItem
            key={post.node.fields.slug}
            descriptionHTML={post.node.frontmatter.description || post.node.excerpt}
            {...post.node.frontmatter}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
