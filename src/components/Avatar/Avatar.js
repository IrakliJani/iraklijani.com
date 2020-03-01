import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Avatar = () => {
  const data = useStaticQuery(AVATAR_QUERY)

  return <StyledImage fixed={data.avatar.childImageSharp.fixed} />
}

const AVATAR_QUERY = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/me.jpeg/" }) {
      childImageSharp {
        fixed(width: 192, height: 192) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const StyledImage = styled(Image)`
  border-radius: ${props => props.theme.sizes[1]}px;
`

export default Avatar
