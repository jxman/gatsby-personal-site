import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

function resume({ data }) {
  const { markdownRemark } = data

  return (
    <>
      <Seo title="Resume" />
      <Layout>
        <div>
          <article
            className="prose max-w-screen-md mx-auto"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </div>
      </Layout>
    </>
  )
}

export default resume

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/resume.md/" }) {
      html
    }
  }
`
