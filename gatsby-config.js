/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// Load environment variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE || "My Personal Website",
    titleTemplate: "%s ·  My Personal Website",
    description: process.env.GATSBY_SITE_DESCRIPTION || "Welcome to my site where I talk a little about myself.",
    url: process.env.GATSBY_SITE_URL || "https://www.synepho.com", // No trailing slash allowed!
    siteUrl: process.env.GATSBY_SITE_URL || "https://www.synepho.com", // No trailing slash allowed!
    image: "/mainImg.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@jxmam",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID || "G-2HLT4VSZHW", // Google Analytics / GA
        ],
        pluginConfig: {
          // Only load in production
          head: false,
          respectDNT: true,
          exclude: process.env.NODE_ENV === 'development' ? ['/preview/**', '/do-not-track/me/too/'] : [],
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_SITE_URL || "https://www.synepho.com",
        sitemap: `${process.env.GATSBY_SITE_URL || "https://www.synepho.com"}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
