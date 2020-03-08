import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import { Flex, Box, Link, Heading, Text } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const description = post.frontmatter.description || post.excerpt
  const postHTML = post.html

  return (
    <Layout location={location}>
      <SEO title={title} description={description} />

      <Box as="article" mb={6}>
        <Box as="header">
          <Heading as="h1" fontSize={6}>
            {title}
          </Heading>

          <Text fontSize={1}>{date}</Text>
        </Box>

        <Text as="section" dangerouslySetInnerHTML={{ __html: postHTML }} />
      </Box>

      <PageNavigation previous={previous} next={next} mt={5} />
    </Layout>
  )
}

const PageNavigation = ({ previous, next, ...extraBoxProps }) => {
  if (!previous && !next) return null

  return (
    <Flex as="nav" justifyContent="space-between" {...extraBoxProps}>
      <Box>
        {previous && (
          <Link as={GatsbyLink} to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </Box>

      <Box>
        {next && (
          <Link as={GatsbyLink} to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </Box>
    </Flex>
  )
}

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

export default BlogPostTemplate
