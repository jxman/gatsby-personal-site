import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

function AboutMe({ data }) {
  const { markdownRemark } = data

  return (
    <>
      <Seo
        title="About Me"
        description="Learn about John Xanthopoulos - IT Executive and developer with expertise in cloud architecture, software development, and technology leadership."
      />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Profile Image Section */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <StaticImage
                src="../images/me.jpeg"
                alt="Portrait photo of John Xanthopoulos"
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl"
                width={256}
                height={256}
                placeholder="none"
                quality={95}
                formats={["auto", "webp", "avif"]}
              />
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-blue max-w-none prose-headings:text-base-content prose-p:text-base-content/70 prose-li:text-base-content/70 prose-strong:text-base-content">
                <div
                  dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />
              </article>
            </div>
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
