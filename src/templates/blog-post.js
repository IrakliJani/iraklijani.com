import React from "react"
import { navigate, graphql } from "gatsby"
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
          <Heading as="h1" fontSize={[6, 7]}>
            {title}
          </Heading>

          <Text fontSize={1}>{date}</Text>
        </Box>

        <Text as="section" marginTop={5} variant="markdown" dangerouslySetInnerHTML={{ __html: postHTML }} />
      </Box>

      <PageNavigation previous={previous} next={next} mt={5} />
    </Layout>
  )
}

const PageNavigation = ({ previous, next, ...extraBoxProps }) => {
  if (!previous && !next) return null

  return (
    <Flex as="nav" justifyContent="space-between" {...extraBoxProps}>
      <Box width={1 / 2}>{previous && <NavigationLink post={previous} prefix="← " />}</Box>

      {previous && next ? <Box width="1px" bg="black" opacity={1 / 3} /> : null}

      <Box width={1 / 2}>{next && <NavigationLink post={next} suffix=" →" textAlign="right" />}</Box>
    </Flex>
  )
}

const NavigationLink = ({ prefix, post, suffix, ...boxProps }) => {
  return (
    <Link
      display="block"
      p={5}
      onClick={() => navigate(post.node.frontmatter.path)}
      sx={{ cursor: "pointer", userSelect: "none", borderBottom: "none" }}
      {...boxProps}
    >
      {prefix}
      {post.node.frontmatter.title}
      {suffix}
    </Link>
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
