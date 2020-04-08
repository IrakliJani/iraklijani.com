import React from "react"
import { PDFViewer, Page, Text, Link, View, Image, Document, StyleSheet, Font } from "@react-pdf/renderer"
import { graphql } from "gatsby"

import HKGroteskRegular from "./../fonts/HKGrotesk/TTF/HKGrotesk-Regular.ttf"
import HKGroteskBold from "./../fonts/HKGrotesk/TTF/HKGrotesk-Bold.ttf"

import SpaceGroteskRegular from "./../fonts/SpaceGrotesk/ttf/SpaceGrotesk-Regular.ttf"
import SpaceGroteskBold from "./../fonts/SpaceGrotesk/ttf/SpaceGrotesk-Bold.ttf"

Font.register({
  family: "HKGrotesk",
  fonts: [{ src: HKGroteskRegular }, { src: HKGroteskBold, fontWeight: 700 }],
})

Font.register({
  family: "SpaceGrotesk",
  fonts: [{ src: SpaceGroteskRegular }, { src: SpaceGroteskBold, fontWeight: 700 }],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: "16mm",
    paddingVertical: "12mm",
    fontFamily: "HKGrotesk",
    fontWeight: "normal",
    fontSize: 10,
  },
  heading: {
    fontFamily: "SpaceGrotesk",
    fontWeight: "bold",
    fontSize: 10,
  },
  picture: {
    width: 32,
    height: 32,
  },
  link: {
    paddingHorizontal: 1,
    color: "black",
    textDecoration: "none",
    // backgroundColor: "#EDF4FA",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#CECECE",
  },
})

const Resume = ({ data, location }) => {
  // const profilePic = data.avatar
  const author = data.site.siteMetadata.author
  const siteUrl = data.site.siteMetadata.siteUrl
  const jobs = data.allJobsJson.nodes
  const education = data.allEducationJson.nodes[0]

  return (
    <PDFViewer width="100%" height="1000px">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ flexDirection: "row" }}>
            <Bio {...author} />

            <Contact siteUrl={siteUrl} {...author} />
          </View>

          <View style={{ height: 24 }} />
          <Text style={[styles.heading, { fontSize: 14 }]}>Employment History</Text>
          <View style={{ height: 16 }} />

          {jobs.map((job, index) => (
            <Job key={job.title} index={index} {...job} />
          ))}

          <View style={{ height: 24 }} />
          <Text style={[styles.heading, { fontSize: 16 }]}>Education</Text>
          <View style={{ height: 8 }} />

          <Education {...education} />
        </Page>
      </Document>
    </PDFViewer>
  )
}

const Bio = ({ name, title, bio }) => (
  <View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      {/* <Image src={profilePic.childImageSharp.fixed.src} style={styles.picture} /> */}
      <View>
        <Text style={[styles.heading, { fontSize: 24 }]}>{name}</Text>
        <Text style={[styles.heading, { fontSize: 12 }]}>{title}</Text>
      </View>
    </View>

    <View style={{ height: 8 }} />

    <Text style={{ fontSize: 10 }}>{bio}</Text>
  </View>
)

const Contact = ({ siteUrl, email, phone, social }) => (
  <View style={{ alignItems: "flex-start" }}>
    <Text>{phone}</Text>

    <View style={{ height: 4 }} />

    <Link src={`mailto:${email}`} style={[styles.link, { fontSize: 12 }]}>
      {email}
    </Link>

    <View style={{ height: 4 }} />

    <View style={{ flexDirection: "row" }}>
      {Object.entries({ blog: siteUrl, ...social }).map(([name, url], index) => (
        <React.Fragment key={name}>
          {index > 0 && <View style={{ marginLeft: 4 }} />}

          <Link href={url} style={[styles.link, { textTransform: "capitalize" }]}>
            {name}
          </Link>
        </React.Fragment>
      ))}
    </View>
  </View>
)

const Job = ({ index, logo, title, website, isRemote, hq, role, startDate, endDate, achievements }) => (
  <>
    {index > 0 && <View style={{ height: 16 }} />}

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image src={logo.childImageSharp.fixed.src} style={[styles.picture]} />

      <View style={{ width: 8 }} />

      <View style={{ flexGrow: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.heading, { fontSize: 12 }]}>{role}</Text>

            <Text style={[styles.heading, { fontSize: 12, marginHorizontal: 5, opacity: 0.5, fontWeight: "normal" }]}>
              at
            </Text>

            <Link src={website} style={[styles.heading, styles.link, { fontSize: 12 }]}>
              {title}
            </Link>
          </View>

          <Tag>
            {startDate} – {endDate}
          </Tag>
        </View>

        <View style={{ height: 4 }} />

        {achievements.map((achievement) => (
          <Text key={achievement}>– {achievement}</Text>
        ))}

        {/* 
        <View style={{ flexDirection: "row" }}>
          {skills.map((skill, index) => (
            <React.Fragment key={skill}>
              {index > 0 && <Text style={{ color: "white" }}>, </Text>}
              <Tag>{skill}</Tag>
            </React.Fragment>
          ))}
        </View>
        */}
      </View>
    </View>
  </>
)

const Education = ({ title, description }) => (
  <View>
    <Text style={[styles.heading, { fontSize: 12 }]}>
      {description} at {title}
    </Text>
  </View>
)

const Tag = ({ children }) => (
  <Text
    style={{
      backgroundColor: "#EDF4FA",
      paddingHorizontal: 4,
      paddingVertical: 1,
      fontSize: 10,
    }}
  >
    {children}
  </Text>
)

export const pageQuery = graphql`
  query {
    # avatar: file(absolutePath: { regex: "/me.jpeg/" }) {
    #   childImageSharp {
    #     fixed(width: 96, height: 96) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
    site {
      siteMetadata {
        author {
          name
          title
          bio
          email
          phone
          social {
            github
            linkedin
            twitter
          }
        }
        siteUrl
      }
    }
    allJobsJson {
      nodes {
        title
        website
        role
        isRemote
        hq
        startDate
        endDate
        # description
        # skills
        achievements
        logo {
          childImageSharp {
            fixed(width: 96, height: 96) {
              ...GatsbyImageSharpFixed
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

export default Resume
