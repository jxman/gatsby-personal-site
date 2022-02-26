/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Personal Websit",
    titleTemplate: "%s ·  My Personal Website",
    description: "Welcome to my site where I talk a little about myself.",
    url: "https://www.synepho.com", // No trailing slash allowed!
    siteUrl: "https://www.synepho.com", // No trailing slash allowed!
    image: "/mainImg.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@jxmam",
    siteUrl: "https://www.example.com",
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
          "G-2HLT4VSZHW", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.synepho.com",
        protocol: "https",
        hostname: "www.synepho.com",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.synepho.com",
        sitemap: "https://www.synepho.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
