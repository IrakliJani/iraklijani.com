import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
  const data = useStaticQuery(FOOTER_QUERY)
  const { author } = data.site.siteMetadata

  const startYear = 2020
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer">
      <Box height="1px" mb={4} backgroundColor="black" opacity={1 / 3} />

      <Text fontSize={1}>
        © {startYear === currentYear ? currentYear : `${startYear}-${currentYear}`} {author.name}
      </Text>
    </Box>
  )
}

const FOOTER_QUERY = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`

export default Footer
