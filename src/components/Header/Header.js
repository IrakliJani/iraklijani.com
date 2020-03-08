import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Flex, Box, Link } from "rebass"

const Header = ({ ContentWrapper }) => {
  return (
    <Box as="header" backgroundColor="black" color="white">
      <ContentWrapper as="nav">
        <Flex height={6} alignItems="center">
          <Link as={GatsbyLink} to="/" fontFamily="SpaceGrotesk" color="white">
            Irakli Jani
          </Link>
        </Flex>
      </ContentWrapper>
    </Box>
  )
}

export default Header
