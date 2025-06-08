import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

function awshealth() {
  return (
    <>
      <Seo
        title="AWS Health Notifications Architecture - Cloud Monitoring Project"
        description="Explore John Xanthopoulos' AWS Health Event notification system featuring Terraform automation, EventBridge integration, Lambda processing, and multi-environment deployment capabilities."
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
                  AWS Health Notifications Architecture
                </h1>

                {/* Architecture Diagram */}
                <figure className="mb-8">
                  <div className="w-full overflow-x-auto">
                    <img
                      className="w-full max-w-none sm:max-w-full h-auto rounded-2xl shadow-2xl min-w-[800px] sm:min-w-0"
                      src="/aws-architecture-official-icons.svg"
                      alt="AWS Health Notifications Architecture Diagram"
                    />
                  </div>
                </figure>

                {/* Details Section */}
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-center">
                    Architecture Design Details
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
                        AWS Health Dashboard events are automatically captured
                        and processed through EventBridge with custom event
                        rules and patterns.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Lambda function provides enhanced event formatting with
                        emojis, rich notifications, and comprehensive error
                        handling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Multi-environment deployment supports both development
                        and production environments with separate infrastructure
                        stacks.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        SNS topic distributes formatted notifications to
                        multiple endpoints including email, SMS, and other
                        subscriber types.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Comprehensive monitoring and logging through CloudWatch
                        with proper IAM roles and security policies.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>
                        Built using AWS SDK v3 with Node.js 20.x runtime for
                        optimal performance and modern JavaScript features.
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

export default awshealth
