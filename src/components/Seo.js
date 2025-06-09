import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title = null, description = null, image = null, article = false }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    keywords,
    author,
    linkedinUsername,
    githubUsername,
    lang,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang }}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="image" content={seo.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={seo.url} />

      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#4A90E2" />

      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:site_name" content="John Xanthopoulos" />
      <meta property="og:locale" content="en_US" />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {!article && <meta property="og:type" content="website" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:width" content="1200" />}
      {seo.image && <meta property="og:image:height" content="630" />}
      {seo.image && <meta property="og:image:type" content="image/png" />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:site" content={twitterUsername} />
      )}
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "John Xanthopoulos",
          jobTitle: "IT Executive",
          description: seo.description || "",
          url: seo.url || "",
          image: seo.image || "",
          email: "mailto:john@synepho.com",
          sameAs: [
            linkedinUsername ? `https://www.linkedin.com/in/${linkedinUsername}/` : "",
            githubUsername ? `https://github.com/${githubUsername}` : "",
            twitterUsername ? `https://twitter.com/${twitterUsername.replace("@", "")}` : "",
          ].filter(Boolean),
          knowsAbout: [
            "Software Development",
            "IT Management",
            "AWS",
            "Terraform",
            "React",
            "Cloud Architecture",
            "JavaScript",
            "Web Development",
            "Technology Leadership",
          ],
          alumniOf: {
            "@type": "Organization",
            name: "University of Massachusetts",
          },
          worksFor: {
            "@type": "Organization",
            name: "Technology Company",
          },
          hasOccupation: {
            "@type": "Occupation",
            name: "IT Executive",
            occupationLocation: {
              "@type": "Country",
              name: "United States",
            },
          },
        })}
      </script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}


const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        keywords
        author
        linkedinUsername
        githubUsername
        lang
      }
    }
  }
`
