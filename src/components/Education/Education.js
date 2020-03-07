import React from "react"
import Image from "gatsby-image"
import { Flex, Box, Heading, Text } from "rebass"

const Education = ({ logo, title, location, startDate, endDate, description, ...boxProps }) => {
  return (
    <Flex alignItems="center" {...boxProps}>
      <Box>
        <Heading fontSie={4}>{title}</Heading>

        <Flex mt={3} color="gray" fontSize={2}>
          <Text>{location}</Text>
          <TextSeparator />
          <Text>
            {startDate} - {endDate}
          </Text>
        </Flex>

        <Box mt={4} fontSize={3}>
          {description}
        </Box>
      </Box>
    </Flex>
  )
}

const TextSeparator = () => {
  return <Text mx={3}>·</Text>
}

export default Education
