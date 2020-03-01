/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text } from "rebass"

import Avatar from "./../Avatar"

const Bio = () => {
  const data = useStaticQuery(BIO_QUERY)

  const { author } = data.site.siteMetadata

  return (
    <Flex>
      <Box flexShrink={0} mr={5}>
        <Avatar />
      </Box>

      <Box>
        <Heading mb={1}>{author.name}</Heading>
        <Heading as="h3" mb={5} color="gray">
          {author.title}
        </Heading>
        <Text>{author.bio}</Text>
      </Box>
    </Flex>
  )
}

const BIO_QUERY = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          title
          bio
        }
      }
    }
  }
`

export default Bio
