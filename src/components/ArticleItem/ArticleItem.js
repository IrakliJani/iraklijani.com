import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link } from "rebass"

const ArticleItem = ({ title, slug, date, descriptionHTML }) => {
  return (
    <Box as="article" mb={5}>
      <Box as="header">
        <Heading fontSize={5}>
          <Link as={GatsbyLink} to={slug}>
            {title}
          </Link>
        </Heading>

        <Text fontSize={1}>{date}</Text>
      </Box>

      <Text as="section" py={3} dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </Box>
  )
}

export default ArticleItem
