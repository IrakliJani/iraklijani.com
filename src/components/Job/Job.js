import React from "react"
import Image from "gatsby-image"
import { Flex, Box, Heading, Text, Link as ExternalLink } from "rebass"

import Tag from "./../Tag"

const Job = ({ logo, title, website, role, isRemote, hq, startDate, endDate, description, skills, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Flex>
        <Box flexShrink={0} mr={4}>
          <Image fixed={logo.childImageSharp.fixed} />
        </Box>

        <Box>
          <Heading as="h3" fontSize={5}>
            {title}
          </Heading>

          <Box mt={1}>
            {/* TODO: external link url */}
            <ExternalLink href={website} target="_blank" fontSize={1}>
              {website}
            </ExternalLink>
          </Box>

          <Flex mt={3 + 1} fontSize={2}>
            <Text>{role}</Text>
            <TextSeparator />
            <Text>{isRemote ? "Remote" : hq}</Text>
            <TextSeparator />
            <Text>{hq}</Text>
            <TextSeparator />
            <Text>
              {startDate} - {endDate}
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Box
        my={4}
        pl={4}
        fontSize={3}
        sx={{
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderLeftColor: "yellowLightest",
        }}
      >
        {description}
      </Box>

      <Flex>
        {skills.map((skill) => (
          <Tag mr={3} bg="blueLightest">
            {skill}
          </Tag>
        ))}
      </Flex>
    </Box>
  )
}

const TextSeparator = () => {
  return (
    <Text mx={3} sx={{ userSelect: "none" }}>
      ·
    </Text>
  )
}

export default Job
