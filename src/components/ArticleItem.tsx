import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link, Tag } from "@chakra-ui/react"

interface ArticleItemProps {
  path: string
  title: string
  date: string
  descriptionHTML: string
}

const ArticleItem: React.FC<ArticleItemProps> = ({ path, title, date, descriptionHTML }) => {
  return (
    <Box as="article" mb={5}>
      <Box as="header">
        <Heading fontSize="large" mb={3}>
          <Link as={GatsbyLink} to={path}>
            {title}
          </Link>
        </Heading>

        <Tag bg="">{date}</Tag>
      </Box>

      <Text as="section" pt={4} dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </Box>
  )
}

export default ArticleItem
