import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import Job from "../components/Job"
import Education from "../components/Education"

const ResumeIndex = ({ data, location }) => {
  const jobs = data.allJobsJson.nodes
  const educations = data.allEducationJson.nodes

  return (
    <Layout location={location} showFooter={false}>
      <SEO title="Résumé" />

      <Bio mb={7} />

      {jobs.map(job => {
        return <Job {...job} mb={6} />
      })}

      {educations.map(education => {
        return <Education {...education} />
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
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
            fixed(width: 100, height: 100) {
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
        logo {
          childImageSharp {
            fixed(width: 100, height: 130) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default ResumeIndex
