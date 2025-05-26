import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

function AboutMe({ data }) {
  const { markdownRemark } = data

  return (
    <>
      <Seo title="About" />
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 flex justify-center">
            <StaticImage
              src="../images/me.jpeg"
              alt="Portrait photo of John Xanthopoulos"
              imgStyle={{ borderRadius: "100%" }}
              className="w-48 h-48 lg:w-full lg:h-auto"
            />
          </div>

          <div className="lg:col-span-3">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutMe

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      html
    }
  }
`
