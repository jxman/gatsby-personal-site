/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Personal Websit",
    titleTemplate: "%s ·  My Personal Website",
    description: "Welcome to where my site where I talk a little about myself.",
    url: "https://www.synepho.com", // No trailing slash allowed!
    image: "/mainImg.pngg", // Path to the image placed in the 'static' folder, in the project's root directory.
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
  ],
}
