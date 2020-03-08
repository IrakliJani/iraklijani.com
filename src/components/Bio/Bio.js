/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text } from "rebass"

import FancyHeading from "./../FancyHeading"
import Avatar from "./../Avatar"

const Bio = ({ ...boxProps }) => {
  const data = useStaticQuery(BIO_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box {...boxProps}>
      <Flex mb={4}>
        <Box flexShrink={0} mr={5}>
          <Avatar />
        </Box>
        <Box>
          <FancyHeading as="h2" fontSize={7}>
            {author.name}
          </FancyHeading>

          <Heading as="h3" fontSize={5}>
            {author.title}
          </Heading>
        </Box>
      </Flex>

      <Text fontSize={4}>{author.bio}</Text>
    </Box>
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
