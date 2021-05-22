import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Text, Link, List, ListItem } from "@chakra-ui/react"

interface QueryResult {
  site: {
    siteMetadata: {
      author: {
        name: string
        title: string
        bio: string
        email: string
        social: {
          github: string
          twitter: string
          linkedin: string
        }
      }
    }
  }
}

const BIO_QUERY = graphql`
  query {
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

type SocialKeys = "github" | "twitter" | "linkedin"

const Bio: React.FC = () => {
  const data = useStaticQuery<QueryResult>(BIO_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <Box>
      <Heading as="h2" fontSize={["x-large", "xx-large"]}>
        {author.name}
      </Heading>

      <Heading as="h3" fontSize={["medium", "large"]} fontWeight="normal">
        {author.title}
      </Heading>

      <Text as="section" variant="markdown" py={[4, 5]}>
        {author.bio}

        <Box height={3} />

        <Text>
          Email me at <Link href={`mailto:${author.email}`}>{author.email}</Link>
        </Text>

        <Box height={3} />

        <Heading as="h5" size="large">
          Social:
        </Heading>

        <List>
          {(["github", "twitter", "linkedin"] as Array<SocialKeys>).map((social) => (
            <ListItem key={social} textTransform="capitalize">
              <Link href={author.social[social]} isExternal>
                {social}
              </Link>
            </ListItem>
          ))}
        </List>
      </Text>
    </Box>
  )
}

export default Bio
