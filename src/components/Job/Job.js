/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"
import { Flex, Box, Heading, Text, Link as ExternalLink } from "rebass"
import styled from "@emotion/styled"

const Job = ({ logo, title, website, role, type, hq, startDate, endDate, description, skills, ...boxProps }) => {
  return (
    <Flex {...boxProps}>
      <Box flexShrink={0} mr={5}>
        <StyledImage fixed={logo.childImageSharp.fixed} />
      </Box>

      <Box>
        <ExternalLink href={website} target="_blank">
          <Heading fontSie={4}>{title}</Heading>
        </ExternalLink>

        <Flex mt={3} color="gray" fontSize={2}>
          <Text>{role}</Text>
          <TextSeparator />
          <Text>{type}</Text>
          <TextSeparator />
          <Text>{hq}</Text>
          <TextSeparator />
          <Text>
            {startDate} - {endDate}
          </Text>
        </Flex>

        <Box my={4} fontSize={3}>
          {description}
        </Box>

        <Flex>
          {skills.map(skill => {
            return <Tag mr={3}>{skill}</Tag>
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

const Tag = ({ children, ...boxProps }) => {
  return (
    <Flex
      alignItems="center"
      px={3}
      height={3}
      color="primary"
      backgroundColor="primaryLighter"
      fontSize={2}
      sx={{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "primaryLight",
        borderRadius: 2,
      }}
      {...boxProps}
    >
      {children}
    </Flex>
  )
}

const TextSeparator = () => {
  return <Text mx={3}>·</Text>
}

const StyledImage = styled(Image)`
  border-radius: 5px;
`

export default Job
