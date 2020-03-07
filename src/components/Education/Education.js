import React from "react"
import { Flex, Box, Heading, Text } from "rebass"

const Education = ({ logo, title, location, startDate, endDate, description, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Heading as="h3" fontSize={5}>
        {title}
      </Heading>

      <Flex mt={3} fontSize={2}>
        <Text>{description}</Text>
        <TextSeparator />
        <Text>{location}</Text>
        <TextSeparator />
        <Text>
          {startDate} - {endDate}
        </Text>
      </Flex>
    </Box>
  )
}

const TextSeparator = () => {
  return <Text mx={3}>·</Text>
}

export default Education
