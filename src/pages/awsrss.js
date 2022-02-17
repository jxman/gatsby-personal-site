import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

function awsrss() {
  return (
    <>
      <Seo title="AWS RSS Project" />

      <a href="/projects/" className="btn btn-outline">
        Back to Projects
      </a>

      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <h2 class="card-title">AWS RSS Status Check Site</h2>

          <StaticImage
            class="max-w-xl rounded-2xl shadow-2xl"
            src="../images/awsrss.png"
            alt="aws hosting image"
          />
        </figure>
        <div class="card-body">
          {/* <h2 class="card-title">AWS Multi-region Hosted Site</h2> */}
          {/* <p className="text-xl font-bold">Platform Design Details:</p> */}

          <div class="justify-center card-actions"></div>
        </div>
      </div>
    </>
  )
}

export default awsrss
