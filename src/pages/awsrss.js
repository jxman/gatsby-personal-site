import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

function awsrss() {
  return (
    <>
      <Seo
        title="AWS RSS Status Check System - Cloud Monitoring Solution"
        description="AWS RSS status monitoring system built by John Xanthopoulos. Features real-time health checks, automated notifications, and comprehensive AWS service status tracking."
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
                  AWS RSS Status Check Site
                </h1>

                {/* System Screenshot */}
                <figure className="mb-8 flex justify-center">
                  <StaticImage
                    className="w-full max-w-4xl rounded-2xl shadow-2xl"
                    src="../images/awsrss.png"
                    alt="AWS RSS Status Check System Interface"
                  />
                </figure>

                {/* Details Section */}
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-center">
                    System Design Details
                  </h2>

                  <ul className="space-y-4 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Node.js application running on AWS Lambda with DynamoDB
                        backend using the Serverless Framework for deployment
                        and management.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Automatically scans a configurable list of 3rd party
                        vendor RSS status pages for outage and maintenance
                        notifications.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Real-time alert system sends notifications to
                        pre-defined webhooks when vendor issues are detected or
                        resolved.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        DynamoDB table manages alert state tracking to prevent
                        duplicate notifications and ensure proper alert
                        lifecycle management.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Scheduled execution using CloudWatch Events for
                        continuous monitoring with configurable check intervals.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        React-based web frontend (in development) for
                        administrative control and real-time status
                        visualization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Serverless architecture ensures cost-effective operation
                        with automatic scaling based on monitoring demand.
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

export default awsrss
