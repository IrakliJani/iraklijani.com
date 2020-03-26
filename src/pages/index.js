import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleItem from "../components/ArticleItem"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="All posts" />

      {posts.map(({ node }) => {
        const slug = node.fields.slug
        const { path, title, date, description } = node.frontmatter
        const descriptionHTML = description || node.excerpt

        return <ArticleItem key={slug} path={path} title={title} date={date} descriptionHTML={descriptionHTML} />
      })}
    </Layout>
  )
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

export default BlogIndex
