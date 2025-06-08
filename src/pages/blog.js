import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Blog"
        description="Technology insights, development practices, and my journey with AI-powered development. Exploring AWS, React, Terraform, and modern software engineering."
      />
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-base-content mb-4">Blog</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Insights on technology leadership, development practices, and my
              journey with AI-powered development
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="badge badge-primary">Featured</div>
                  <div className="badge badge-outline">Latest</div>
                </div>

                <h2 className="card-title text-2xl mb-4">
                  <Link
                    to="/blog/lawnsmartapp-release"
                    className="hover:text-primary transition-colors"
                  >
                    From Weekend Lawn Care to Zone-Intelligent App: Releasing
                    Lawn.Smart
                  </Link>
                </h2>

                <p className="text-base-content/70 mb-4 leading-relaxed">
                  How my passion for lawn care and AI-powered development led to
                  creating a comprehensive USDA zone-customized lawn management
                  application. From "vibe coding" with Claude to launching at
                  lawnsmartapp.com — the story of building something genuinely
                  useful.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-base-content/60">
                    <span>Published: January 7, 2025</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>

                  <Link
                    to="/blog/lawnsmartapp-release"
                    className="btn btn-primary"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-base-content mb-6">
              Previous Posts
            </h3>
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body">
                <h4 className="card-title text-xl mb-3">
                  <Link
                    to="/blog/ai-pair-programming-journey"
                    className="hover:text-primary transition-colors"
                  >
                    From Coding Challenges to Real-World Solutions: My Journey
                    with AI Pair Programming
                  </Link>
                </h4>

                <p className="text-base-content/70 mb-4 leading-relaxed">
                  Exploring how AI pair programming tools like Claude Code and
                  GitHub Copilot have transformed my development workflow, from
                  solving complex coding challenges to building production
                  applications.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-base-content/60">
                    <span>Published: December 16, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>

                  <Link
                    to="/blog/ai-pair-programming-journey"
                    className="btn btn-outline btn-sm"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-base-content/90 mb-4">
              More Posts Coming Soon
            </h3>
            <p className="text-base-content/70 mb-8">
              I'm working on more content covering cloud architecture, team
              leadership, and development best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-200 border-2 border-dashed border-gray-300">
                <div className="card-body text-center">
                  <h4 className="font-semibold text-base-content/70">
                    Building High-Performance Teams
                  </h4>
                  <p className="text-sm text-base-content/60">
                    Leadership strategies for technology teams
                  </p>
                  <div className="badge badge-ghost">Coming Soon</div>
                </div>
              </div>

              <div className="card bg-base-200 border-2 border-dashed border-gray-300">
                <div className="card-body text-center">
                  <h4 className="font-semibold text-base-content/70">
                    Cloud Architecture Patterns
                  </h4>
                  <p className="text-sm text-base-content/60">
                    Lessons from $400M+ platform responsibility
                  </p>
                  <div className="badge badge-ghost">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-base-content/70 mb-6">
              Get notified when I publish new articles about technology
              leadership and development.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Me for Updates
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogPage
