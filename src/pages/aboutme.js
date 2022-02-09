import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

function aboutme({ data }) {
  const { markdownRemark } = data

  return (
    <Layout>
      <div className="grid grid-cols-4 ">
        <div className="col-span-1">
          <StaticImage
            src="../images/me.jpeg"
            alt="bio picture"
            imgStyle={{ borderRadius: "100%" }}
          />
        </div>

        <div className="col-span-3">
          <article
            className=" flex-auto prose max-w-screen-md mx-auto"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default aboutme

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      html
    }
  }
`
