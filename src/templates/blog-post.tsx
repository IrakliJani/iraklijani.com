import * as React from "react"
import { navigate, graphql, PageProps } from "gatsby"
import { Flex, Box, Link, Heading, Text, Tag } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

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

interface PageQueryResult {
  markdownRemark: {
    excerpt: string
    html: string
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
}

interface PostNode {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      published?: boolean
      path: string
      title: string
    }
  }
}

interface PageContext {
  slug: string
  next?: PostNode
  prev?: PostNode
}

const BlogPostTemplate: React.FC<PageProps<PageQueryResult, PageContext>> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext

  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const description = post.frontmatter.description || post.excerpt
  const postHTML = post.html

  return (
    <Layout>
      <Seo title={title} description={description} />

      <Box as="article" mb={3}>
        <Box as="header" textAlign="center">
          <Heading as="h1" fontSize={["x-large", "xx-large"]} mb={3}>
            {title}
          </Heading>

          <Tag>{date}</Tag>
        </Box>

        <Text as="section" pt={4} variant="markdown" dangerouslySetInnerHTML={{ __html: postHTML }} />
      </Box>

      <PageNavigation prev={prev} next={next} />
    </Layout>
  )
}

interface PageNavigationProps {
  prev?: PostNode
  next?: PostNode
}

const PageNavigation: React.FC<PageNavigationProps> = ({ prev, next }) => {
  if (!prev && !next) return null

  return (
    <Flex as="nav" flexDirection="row">
      <Box width="50%">{prev && <NavigationLink post={prev} prefix="← " />}</Box>

      {prev && next ? <Box width="1px" bg="black" opacity={0.25} /> : null}

      <Box width="50%">{next && <NavigationLink post={next} suffix=" →" />}</Box>
    </Flex>
  )
}

interface NavigationLinkProps {
  post: PostNode
  prefix?: string
  suffix?: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ prefix, post, suffix }) => {
  return (
    <Link
      display="block"
      px={6}
      py={5}
      onClick={() => navigate(post.node.frontmatter.path)}
      cursor="pointer"
      userSelect="none"
      borderRadius="none"
    >
      {prefix}

      {post.node.frontmatter.title}

      {suffix}
    </Link>
  )
}

export default BlogPostTemplate
