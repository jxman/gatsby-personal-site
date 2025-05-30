import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

function Resume({ data }) {
  const { markdownRemark } = data

  return (
    <>
      <Seo title="Resume" />
      <Layout>
        <div>
          <article
            className="prose prose-lg max-w-screen-lg mx-auto"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </div>
      </Layout>
    </>
  )
}

export default Resume

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/resume.md/" }) {
      html
    }
  }
`
