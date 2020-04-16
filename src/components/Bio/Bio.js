import React from "react"
import { useStaticQuery } from "gatsby"
import { Flex, Box, Heading, Text, Link } from "rebass"

import Avatar from "./../Avatar"

const Bio = ({ ...boxProps }) => {
  const data = useStaticQuery(BIO_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box {...boxProps}>
      <Flex flexDirection={["column", "row"]}>
        <Box flexShrink={0} mr={5}>
          <Avatar />
        </Box>

        <Box>
          <Heading as="h2" fontSize={[5, 7]}>
            {author.name}
          </Heading>

          <Heading as="h3" fontSize={[3, 5]}>
            {author.title}
          </Heading>
        </Box>
      </Flex>

      <Text fontSize={[2, 3]} py={[4, 5]}>
        {author.bio}
        <Box height={3}></Box>
        Say hi at: <Link href={`mailto:${author.email}`}>{author.email}</Link>
        <Box height={3}></Box>
        <Heading>Social:</Heading>
        <Box as="ul">
          {["github", "twitter", "linkedin"].map((social) => (
            <Box key={social} as="li" py={2} sx={{ textTransform: "capitalize" }}>
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
