import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

function awssite() {
  return (
    <>
      <Seo
        title="AWS Multi-Region Hosting Architecture - Cloud Infrastructure Project"
        description="Explore John Xanthopoulos' AWS multi-region hosting solution featuring Terraform automation, CloudFront distribution, geo-load balancing, and automated failover capabilities."
      />
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back button */}
          <div className="mb-6">
            <a href="/projects/" className="btn btn-outline btn-sm sm:btn-md">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </a>
          </div>

          <AnimatedSection animation="fadeInUp">
            <div className="card bg-base-100 shadow-xl">
              {/* Header */}
              <div className="card-body">
                <h1 className="card-title text-2xl sm:text-3xl lg:text-4xl font-bold text-center justify-center mb-6">
                  AWS Multi-Region Hosted Site
                </h1>

                {/* Architecture Diagram */}
                <figure className="mb-8 flex justify-center">
                  <img
                    className="w-full max-w-4xl rounded-2xl shadow-2xl"
                    src="/architecture-diagram.svg"
                    alt="AWS Multi-Region Hosting Architecture Diagram"
                  />
                </figure>

                {/* Details Section */}
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-center">
                    Platform Design Details
                  </h2>

                  <ul className="space-y-4 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        All AWS resources are managed and configured with
                        Terraform code and fully automated. (See my GitHub repo
                        for more details)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        The primary site is hosted in US-East-1 with real-time
                        data replication to the US-West-1 region.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        All web traffic is fronted by a geo-load balanced
                        CloudFront distribution endpoint.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Traffic is automatically routed to the secondary West
                        region should the primary East region fail for any
                        reason.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        DNS and TLS/SSL certificates are automatically managed
                        by AWS Route53 and ACM.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Layout>
    </>
  )
}

export default awssite
