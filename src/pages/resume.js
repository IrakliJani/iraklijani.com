import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import Job from "../components/Job"

const ResumeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const jobs = data.allJobsJson.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <Bio mb={7} />

      {jobs.map(job => {
        return <Job {...job} mb={6} />
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allJobsJson {
      nodes {
        id
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
          id
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default ResumeIndex
