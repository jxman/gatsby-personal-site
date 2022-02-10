import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function awssite() {
  return (
    <div>
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <h2 class="card-title">AWS Multi-region Hosted Site</h2>

          <StaticImage
            class="max-w-xl rounded-2xl shadow-2xl"
            src="../images/aws-site.png"
            alt="aws hosting image"
          />
        </figure>
        <div class="card-body">
          {/* <h2 class="card-title">AWS Multi-region Hosted Site</h2> */}
          <p className="text-xl font-bold">Platform Design Details:</p>

          <ul className="text-xl text-justify list-disc list-inside">
            <li>
              All AWS resources are managed and configured with Terraform code
              and full automated. (See my github repo for more details)
            </li>
            <li>
              The primary site is hosted in US-East-1 with real-time data
              replication to the US-West-1 region.
            </li>
            <li>
              All web traffic is fronted by a geo-load balanced CloudFront
              Distortion endpoint.
            </li>
            <li>
              Traffic is automatically routed to the secondary West region
              should the primary East region fail for any reason.
            </li>
            <li>
              DNS and TLS/SSL certificates are automatically managed by AWS
              Route53 and ACM.
            </li>
          </ul>

          <div class="justify-center card-actions"></div>
        </div>
      </div>
    </div>
  )
}

export default awssite
