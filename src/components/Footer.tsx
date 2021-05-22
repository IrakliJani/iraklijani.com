import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Divider, Text } from "@chakra-ui/react"

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
      <Divider marginBottom={4} />

      <Text fontSize="sm">
        © {startYear === currentYear ? currentYear : `${startYear}-${currentYear}`} {author.name}
      </Text>
    </Box>
  )
}

export default Footer
