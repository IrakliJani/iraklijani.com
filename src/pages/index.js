import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/Tag"

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

const ArticleItem = ({ path, title, date, descriptionHTML }) => {
  return (
    <Box as="article" mb={5}>
      <Box as="header">
        <Heading fontSize={6} mb={2}>
          <Link as={GatsbyLink} to={path}>
            {title}
          </Link>
        </Heading>

        <Tag display="inline-block" bg="redLightest">
          {date}
        </Tag>
      </Box>

      <Text as="section" py={3} dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </Box>
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
