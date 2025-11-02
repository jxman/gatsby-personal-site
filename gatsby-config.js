/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// Load environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title:
      process.env.GATSBY_SITE_TITLE ||
      "John Xanthopoulos - IT Executive & Developer",
    titleTemplate: "%s | John Xanthopoulos",
    description:
      process.env.GATSBY_SITE_DESCRIPTION ||
      "IT Executive by day, developer on weekends. Sharing insights on software development, cloud architecture, and technology leadership. AWS, React, Terraform, and more.",
    keywords:
      "John Xanthopoulos, IT Executive, Software Developer, AWS, React, Terraform, Cloud Architecture, Technology Leadership, Full Stack Developer, JavaScript, Web Development",
    author: "John Xanthopoulos",
    url: process.env.GATSBY_SITE_URL || "https://www.synepho.com", // No trailing slash allowed!
    siteUrl: process.env.GATSBY_SITE_URL || "https://www.synepho.com", // No trailing slash allowed!
    image: "/social-image.png", // Optimized social media image for Open Graph
    twitterUsername: "@jxmam",
    linkedinUsername: "johnx",
    githubUsername: "jxman",
    lang: "en",
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `none`,
          quality: 95,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID || "G-2HLT4VSZHW", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude:
            process.env.NODE_ENV === "development"
              ? ["/preview/**", "/do-not-track/me/too/"]
              : [],
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404/", "/404.html", "/dev-404-page/"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
                pageContext
              }
            }
          }
        `,
        serialize: ({ path }) => {
          // Set custom priorities for different page types
          let priority = 0.7
          let changefreq = "monthly"

          if (path === "/") {
            priority = 1.0
            changefreq = "weekly"
          } else if (path.includes("/blog/")) {
            priority = 0.8
            changefreq = "weekly"
          } else if (
            ["/aboutme/", "/projects/", "/resume/", "/contact/"].includes(path)
          ) {
            priority = 0.9
            changefreq = "monthly"
          } else if (path.includes("/blog")) {
            priority = 0.8
            changefreq = "weekly"
          }

          return {
            url: path,
            changefreq,
            priority,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_SITE_URL || "https://www.synepho.com",
        sitemap: `${process.env.GATSBY_SITE_URL || "https://www.synepho.com"}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Xanthopoulos - IT Executive & Developer`,
        short_name: `JX Portfolio`,
        description: `Personal website of John Xanthopoulos, IT Executive and Cloud Technology Developer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4A90E2`,
        display: `standalone`,
        icon: `src/images/me.jpeg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
}
