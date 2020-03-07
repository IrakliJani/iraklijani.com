module.exports = {
  siteMetadata: {
    title: "Irakli Jani",
    author: {
      name: "Irakli Janiashvili",
      title: "Full-Stack Software Engineer",
      bio: `Hey, I’m Irakli, Software Engineer from Tbilisi, Georgia. I have 7 years of experience working on scalable apps for EU, US and Georgian companies On-Site and Remotely. Looking forward to joining a team of talented people.`,
      email: "hey@iraklijani.com",
      phone: "+995 (514) 111-001",
      social: {
        twitter: "https://twitter.com/IrakliJani",
        linkedin: "https://linkedin.com/in/IrakliJani",
        github: "https://github.com/IrakliJani",
      },
    },
    description: "Irakli Jani's Personal Website",
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
        path: `${__dirname}/content/resume`,
        name: "resume",
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
        //TODO: trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      // TODO: test this...
      options: {
        name: "Irakli Jani's Blog",
        short_name: "IrakliJani",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
