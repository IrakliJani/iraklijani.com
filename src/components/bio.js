/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(BIO_QUERY)

  const { author } = data.site.siteMetadata

  return (
    <>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
      <br />
      <strong>{author.name}</strong>
      <br />
      <a href={`https://twitter.com/${author.social.twitter}`}>@{author.social.twitter}</a>
    </>
  )
}

const BIO_QUERY = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me.jpeg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          social {
            twitter
          }
        }
      }
    }
  }
`

export default Bio
