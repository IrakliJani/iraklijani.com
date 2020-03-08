import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Text } from "rebass"

const Footer = () => {
  const data = useStaticQuery(FOOTER_QUERY)
  const { author } = data.site.siteMetadata

  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" pt={5}>
      <Text fontSize={1}>
        © {currentYear} {author.name}
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
