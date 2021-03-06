import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Flex, Box, Link } from "rebass"

const Header = () => {
  return (
    <Box as="header" backgroundColor="black" color="white">
      <Box variant="contentWrapper" as="nav">
        <Flex height={6} alignItems="center" justifyContent="space-between">
          <Link as={GatsbyLink} to="/" fontFamily="SpaceGrotesk" fontWeight="bold" color="white">
            Irakli Jani
          </Link>

          <Link as={GatsbyLink} to="/about-me" fontFamily="SpaceGrotesk" fontSize={2} color="white">
            About me
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default Header
