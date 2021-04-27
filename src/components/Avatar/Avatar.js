import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Avatar = () => {
  const avatar = useStaticQuery(AVATAR_QUERY)
  return <GatsbyImage image={getImage(avatar.file)} alt="avatar" />
}

// ,
const AVATAR_QUERY = graphql`
  {
    file(absolutePath: { regex: "/me.jpeg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 96, height: 96, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`

export default Avatar
