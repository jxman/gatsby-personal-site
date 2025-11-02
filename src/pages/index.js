import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Home"
        description="John Xanthopoulos - IT Executive by day, developer on weekends. Sharing insights on AWS, React, Terraform, and technology leadership."
      />
      <Layout>
        {/* Hero Section */}
        <div className="hero min-h-[80vh] bg-gradient-to-br from-base-100 to-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto px-4">
            {/* Profile Image */}
            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="flex-shrink-0">
                <StaticImage
                  src="../images/me2.jpeg"
                  alt="Professional headshot of John Xanthopoulos"
                  className="max-w-sm rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  placeholder="none"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  width={384}
                  height={512}
                />
              </div>
            </AnimatedSection>

            {/* Hero Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <AnimatedSection animation="fadeInLeft">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium rounded-full text-sm mb-4">
                    Welcome to my digital space
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-base-content mb-6 leading-tight">
                  Building Tomorrow's
                  <span className="block text-primary">
                    Technology Solutions
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fadeInLeft" delay={100}>
                <div className="text-xl lg:text-2xl text-base-content/80 mb-6 space-y-1">
                  <p className="font-medium">
                    IT Executive by Day • Developer on Weekends
                  </p>
                  <p className="text-base-content/60 text-lg">
                    20+ years architecting the future of technology
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInLeft" delay={200}>
                <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                  Passionate technology leader with 20+ years of experience
                  driving digital transformation, building high-performing
                  teams, and architecting cloud-native solutions. When I'm not
                  leading strategic initiatives, you'll find me coding personal
                  projects and exploring the latest technologies.
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/aboutme"
                    className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
                    aria-label="Learn more about John's background and experience"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    About Me
                  </Link>
                  <Link
                    to="/projects"
                    className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-200"
                    aria-label="View John's portfolio of projects"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    View Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline btn-secondary btn-lg hover:scale-105 transition-transform duration-200"
                    aria-label="Get in touch with John"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <AnimatedSection animation="fadeInUp" className="py-16 bg-base-100">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-base-content mb-4">
                Experience Highlights
              </h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Two decades of technology leadership driving innovation and
                results
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="stat bg-base-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="stat-value text-primary">20+</div>
                  <div className="stat-title">Years Experience</div>
                  <div className="stat-desc">Technology Leadership</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="stat bg-base-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="stat-value text-secondary">$400M+</div>
                  <div className="stat-title">Revenue Impact</div>
                  <div className="stat-desc">Platform Responsibility</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="stat bg-base-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="stat-value text-accent">60%</div>
                  <div className="stat-title">Cost Reduction</div>
                  <div className="stat-desc">Through Innovation</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="stat bg-base-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="stat-value text-info">42</div>
                  <div className="stat-title">Team Members</div>
                  <div className="stat-desc">Global Leadership</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills & Technologies */}
        <AnimatedSection
          animation="fadeInUp"
          className="py-16 bg-gradient-to-br from-base-200 to-base-100"
        >
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-base-content mb-4">
                Core Technologies
              </h2>
              <p className="text-base-content/70">
                Modern tools and platforms I work with regularly
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "AWS", icon: "☁️" },
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "🟢" },
                { name: "Terraform", icon: "🏗️" },
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "⚓" },
              ].map((tech, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideInUp"
                  delay={index * 100}
                >
                  <div className="text-center p-4 bg-base-100 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl mb-2 animate-pulse">
                      {tech.icon}
                    </div>
                    <div className="font-semibold text-base-content/90">
                      {tech.name}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Recent Blog Post Section */}
        <AnimatedSection animation="fadeInUp" className="py-16 bg-base-100">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-base-content mb-4">
                Latest Blog Post
              </h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Recent insights on technology, leadership, and development
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary/10">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="badge badge-primary">New</div>
                      <div className="badge badge-outline">AWS</div>
                      <div className="badge badge-accent">AI Development</div>
                    </div>

                    <h3 className="card-title text-2xl mb-4">
                      <Link
                        to="/blog/aws-services-dashboard-release"
                        className="hover:text-primary transition-colors"
                      >
                        Building AWS Services Dashboard: A Modular Architecture
                        Journey with AI-Assisted Development
                      </Link>
                    </h3>

                    <p className="text-base-content/70 mb-6 leading-relaxed">
                      How strategic planning and modular serverless architecture
                      led to a production-ready AWS monitoring platform, built
                      entirely with Claude Code. Learn why design sessions
                      matter more than rushing to code when working with AI
                      assistants.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-base-content/60">
                        <span>Published: October 24, 2025</span>
                        <span className="hidden sm:inline">•</span>
                        <span>8 min read</span>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          to="/blog/aws-services-dashboard-release"
                          className="btn btn-primary hover:scale-105 transition-transform duration-200"
                        >
                          Read More
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
                        <Link
                          to="/blog"
                          className="btn btn-outline btn-secondary hover:scale-105 transition-transform duration-200"
                        >
                          View All Posts
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </Layout>
    </>
  )
}

export default IndexPage
