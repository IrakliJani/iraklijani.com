import * as React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Flex, Box, Link, Container, Spacer } from "@chakra-ui/react"

interface QueryResult {
  site: {
    siteMetadata: {
      author: {
        name: string
        title: string
      }
    }
  }
}

const HEADER_QUERY = graphql`
  query {
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

const Header: React.FC = () => {
  const data = useStaticQuery<QueryResult>(HEADER_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box as="header" backgroundColor="black">
      <Container as="nav">
        <Flex height={16} alignItems="center">
          <Link as={GatsbyLink} to="/" fontWeight="bold" color="white">
            {author.name}
          </Link>

          <Spacer />

          <Link as={GatsbyLink} to="/blog" color="white">
            Blog
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
