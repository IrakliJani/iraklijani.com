import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link, Divider, Badge } from "@chakra-ui/react"

interface ArticleItemProps {
  path: string
  title: string
  date: string
  descriptionHTML: string
}

const ArticleItem: React.FC<ArticleItemProps> = ({ path, title, date, descriptionHTML }) => {
  return (
    <Box as="article">
      <Divider marginBottom={3} />

      <Heading as="h4" fontSize="large" marginBottom={2}>
        <Link as={GatsbyLink} to={path}>
          {title}
        </Link>
      </Heading>

      <Badge backgroundColor="yellow.50" marginBottom={3}>
        {date}
      </Badge>

      <Text as="section" dangerouslySetInnerHTML={{ __html: descriptionHTML }} marginBottom={3} />
    </Box>
  )
}

export default ArticleItem
