import React from "react"
import { navigate, graphql } from "gatsby"
import { Flex, Box, Link, Heading, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/Seo"
import Tag from "../components/Tag"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const description = post.frontmatter.description || post.excerpt
  const postHTML = post.html

  return (
    <Layout location={location}>
      <Seo title={title} description={description} />

      <Box as="article" mb={3}>
        <Box as="header">
          <Heading as="h1" fontSize={[6, 7]} mb={3}>
            {title}
          </Heading>

          <Tag display="inline-block" bg="blueLightest">
            {date}
          </Tag>
        </Box>

        <Text as="section" pt={4} variant="markdown" dangerouslySetInnerHTML={{ __html: postHTML }} />
      </Box>

      <PageNavigation previous={previous} next={next} mt={5} />
    </Layout>
  )
}

const PageNavigation = ({ previous, next, ...extraBoxProps }) => {
  if (!previous && !next) return null

  return (
    <Flex as="nav" flexDirection={["column-reverse", "column-reverse", "row", "row"]} {...extraBoxProps}>
      <Box width={[null, null, 1 / 2, 1 / 2]}>{previous && <NavigationLink post={previous} prefix="← " />}</Box>

      {previous && next ? (
        <Box
          width={["auto", "auto", "1px", "1px"]}
          height={["1px", "1px", "auto", "auto"]}
          bg="black"
          opacity={1 / 4}
        />
      ) : null}

      <Box width={[null, null, 1 / 2, 1 / 2]}>
        {next && <NavigationLink post={next} suffix=" →" textAlign="right" />}
      </Box>
    </Flex>
  )
}

const NavigationLink = ({ prefix, post, suffix, ...boxProps }) => {
  return (
    <Link
      display="block"
      fontFamily="heading"
      fontSize={[2, 2, 3, 4]}
      px={[3, 4, 5, 6]}
      py={[3, 3, 4, 5]}
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
