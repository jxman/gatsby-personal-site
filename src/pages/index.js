import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <div className="hero ">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-4 text-5xl font-bold">John Xanthopoulos</h1>
              <p className="mb-1 text-2xl">IT Executive by Day ...</p>
              <p className="mb-4 text-2xl">... Developer on the Weekend</p>
              <StaticImage
                class="max-w-sm rounded-lg shadow-2xl"
                src="../images/me3.jpeg"
                alt="bio picture"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
