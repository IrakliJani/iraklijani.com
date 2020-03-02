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

const Bio = ({ ...boxProps }) => {
  const data = useStaticQuery(BIO_QUERY)

  const { author } = data.site.siteMetadata

  return (
    <Flex {...boxProps}>
      <Box flexShrink={0} mr={6}>
        <Avatar />
      </Box>

      <Box>
        <Heading mb={1} fontSize={6}>
          {author.name}
        </Heading>

        <Heading as="h3" mb={5} color="gray" fontFamily="avenirRegular">
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
