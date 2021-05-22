import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

interface QueryResult {
  site: {
    siteMetadata: {
      author: {
        name: string
      }
    }
  }
}

const FOOTER_QUERY = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`

const Footer: React.FC = () => {
  const data = useStaticQuery<QueryResult>(FOOTER_QUERY)
  const { author } = data.site.siteMetadata

  const startYear = 2020
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer">
      <Box height="1px" mb={4} backgroundColor="black" opacity={1 / 3} />

      <Text fontSize="sm">
        © {startYear === currentYear ? currentYear : `${startYear}-${currentYear}`} {author.name}
      </Text>
    </Box>
  )
}

export default Footer
