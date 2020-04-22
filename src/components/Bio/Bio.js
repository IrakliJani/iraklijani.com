import React from "react"
import { useStaticQuery } from "gatsby"
import { Flex, Box, Heading, Text, Link } from "rebass"

import Avatar from "./../Avatar"

const Bio = ({ ...boxProps }) => {
  const data = useStaticQuery(BIO_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box {...boxProps}>
      <Avatar />

      <Box height={3} />

      <Heading as="h2" fontSize={[3, 5]}>
        {author.name}
      </Heading>

      <Heading as="h3" fontSize={[2, 3]} fontWeight="normal">
        {author.title}
      </Heading>

      <Text as="section" variant="markdown" py={[4, 5]}>
        {author.bio}

        <Box height={3} />

        <Text>
          Email me at <Link href={`mailto:${author.email}`}>{author.email}</Link>
        </Text>

        <Box height={3} />

        <Heading as="h5">Social:</Heading>

        <Box as="ul">
          {["github", "twitter", "linkedin"].map((social) => (
            <Box key={social} as="li" sx={{ textTransform: "capitalize" }}>
              <Link href={author.social[social]} target="_blank">
                {social}
              </Link>
            </Box>
          ))}
        </Box>
      </Text>
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
          email
          social {
            github
            twitter
            linkedin
          }
        }
      }
    }
  }
`

export default Bio
