const workingSince = new Date(2012, 7, 1)

const yearsOfExperience = ((workingSince) => {
  const diff = Date.now() - workingSince
  const date = new Date(diff)
  return Math.abs(date.getUTCFullYear() - 1970)
})(workingSince)

module.exports = {
  siteMetadata: {
    title: "Irakli Janiashvili",
    author: {
      name: "Irakli Janiashvili",
      title: "Software Engineer",
      bio: `Hey, I’m Irakli, Full-Stack Software Engineer from Tbilisi, Georgia 🇬🇪. I have ${yearsOfExperience} years of experience working on web and mobile apps for multiple successful companies.`,
      email: "hey@iraklijani.com",
      phone: "+995 (514) 111-001",
      social: {
        github: "https://github.com/IrakliJani",
        linkedin: "https://linkedin.com/in/IrakliJani",
        twitter: "https://twitter.com/IrakliJani",
      },
    },
    description: "Irakli Janiashvili (@IrakliJani) Software Engineer",
    siteUrl: "https://iraklijani.com/",
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-68715161-4",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        portalZIndex: 40,
      },
    },
  ],
}
