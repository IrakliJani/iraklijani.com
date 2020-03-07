import React from "react"
import { graphql } from "gatsby"
import { Box, Link, Text } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import Job from "../components/Job"
import Education from "../components/Education"
import FancyHeading from "../components/FancyHeading"

const ResumeIndex = ({ data, location }) => {
  const author = data.site.siteMetadata.author
  const jobs = data.allJobsJson.nodes
  const educations = data.allEducationJson.nodes

  return (
    <Layout location={location} showFooter={false}>
      <SEO title="Résumé" />

      <Bio mb={7} />

      <FancyHeading mb={5} fontSize={6}>
        Work History
      </FancyHeading>

      {jobs.map(job => {
        return <Job {...job} mb={6} />
      })}

      <FancyHeading mb={4} fontSize={6}>
        Education
      </FancyHeading>

      {educations.map(education => {
        return <Education {...education} />
      })}

      <FancyHeading mb={4} fontSize={6}>
        Contact
      </FancyHeading>

      <Contact email={author.email} phone={author.phone} linkedinUrl={author.social.linkedin} />
    </Layout>
  )
}

const Contact = ({ email, phone, linkedinUrl }) => {
  return (
    <Box>
      <Link href={`mailto:${email}`} fontSize={4} fontWeight={600}>
        {email}
      </Link>

      <Text mt={4} mb={3}>
        {phone}
      </Text>

      <Link href={linkedinUrl} target="_blank">
        {linkedinUrl}
      </Link>
    </Box>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          email
          phone
          social {
            linkedin
          }
        }
      }
    }
    allJobsJson {
      nodes {
        title
        website
        role
        type
        hq
        startDate
        endDate
        description
        skills
        logo {
          childImageSharp {
            fixed(width: 96, height: 96) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    allEducationJson {
      nodes {
        title
        location
        startDate
        endDate
        description
      }
    }
  }
`

export default ResumeIndex
