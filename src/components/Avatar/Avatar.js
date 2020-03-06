import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
  const { avatar } = useStaticQuery(AVATAR_QUERY)
  return <Image fixed={avatar.childImageSharp.fixed} />
}

const AVATAR_QUERY = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/me.jpeg/" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default Avatar
