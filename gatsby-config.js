module.exports = {
  siteMetadata: {
    title: "Irakli Jani",
    author: {
      name: "Irakli Janiashvili",
      title: "Full-stack Software Engineer",
      bio: `Hey 👋, I’m Irakli, software engineer from Tbilisi, Georgia. I have 7 years of experience working on scalable web and mobile apps for EU, US and Georgian companies. Looking forward to joining a team of talented people.`,
      social: {
        twitter: "IrakliJani",
      },
    },
    description: "Irakli Jani's Personal Website",
    siteUrl: "https://iraklijani.com/",
  },
  plugins: [
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //TODO: trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    "gatsby-plugin-feed",
    "gatsby-plugin-emotion",
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
    "gatsby-plugin-theme-ui",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
