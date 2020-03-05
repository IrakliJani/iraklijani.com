import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from "rebass"

import Layout from "../components/layout"
import Bio from "../components/Bio"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />

      <Bio />

      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <small>{post.frontmatter.date}</small>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <Flex as="nav" justifyContent="space-between">
        <Box>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </Box>

        <Box>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
