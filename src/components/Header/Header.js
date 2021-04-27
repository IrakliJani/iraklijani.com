import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Flex, Box, Link, Text } from "@chakra-ui/react"

const Header = () => {
  const data = useStaticQuery(HEADER_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box as="header" backgroundColor="black" color="white">
      <Box variant="contentWrapper" as="nav">
        <Flex height={6} alignItems="center">
          <Link as={GatsbyLink} to="/">
            <Text fontFamily="SpaceGrotesk" fontWeight="bold" color="white">
              {author.name}
            </Text>

            <Text fontFamily="SpaceGrotesk" fontWeight="bold" color="white">
              {author.title}
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

const HEADER_QUERY = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        author {
          name
          title
        }
      }
    }
  }
`

export default Header
