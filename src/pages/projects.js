import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

function Projects({ data }) {
  const {
    allProjectsJson: { nodes: projectslist },
  } = data


  return (
    <>
      <Seo
        title="Projects"
        description="Explore my portfolio of web development projects featuring AWS, React, Terraform, and modern cloud architecture solutions."
      />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Page Header */}
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-base-content mb-4">
              My Projects
            </h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              A collection of personal and professional projects showcasing my
              experience with modern web technologies, cloud architecture, and
              full-stack development.
            </p>
          </AnimatedSection>

          {/* Projects List */}
          <div className="space-y-12">
            {projectslist && projectslist.length > 0 ? (
              projectslist.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <div className="card lg:card-side card-bordered shadow-xl bg-base-100 hover:shadow-2xl transition-shadow duration-300">
                    <figure className="lg:w-1/2">
                      <div className="mockup-window border bg-base-300">
                        <div className="flex justify-center px-4 py-16 bg-base-200">
                          {project.demo_link ? (
                            <a
                              href={project.demo_link}
                              {...(project.demo_link.startsWith('http') ? {
                                target: "_blank",
                                rel: "noopener noreferrer"
                              } : {})}
                              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
                              aria-label={`View demo of ${project.name}`}
                            >
                              {project.image.extension === 'svg' || !project.image.childImageSharp ? (
                                <img
                                  src={project.image.publicURL}
                                  alt={`Screenshot of ${project.name} project`}
                                  className="max-w-full h-auto"
                                />
                              ) : (
                                <GatsbyImage
                                  image={
                                    project.image.childImageSharp.gatsbyImageData
                                  }
                                  alt={`Screenshot of ${project.name} project`}
                                  className="max-w-full h-auto"
                                />
                              )}
                            </a>
                          ) : (
                            <>
                              {project.image.extension === 'svg' || !project.image.childImageSharp ? (
                                <img
                                  src={project.image.publicURL}
                                  alt={`Screenshot of ${project.name} project`}
                                  className="max-w-full h-auto"
                                />
                              ) : (
                                <GatsbyImage
                                  image={
                                    project.image.childImageSharp.gatsbyImageData
                                  }
                                  alt={`Screenshot of ${project.name} project`}
                                  className="max-w-full h-auto"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </figure>

                    <div className="card-body lg:w-1/2">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="card-title text-2xl font-bold text-base-content">
                          {project.name}
                        </h2>
                        {project.id <= 4 && (
                          <div className="badge badge-primary badge-sm">
                            Tech Project
                          </div>
                        )}
                        {project.id === 5 && (
                          <div className="badge badge-success badge-sm">
                            Personal
                          </div>
                        )}
                      </div>
                      <p className="text-base-content/70 leading-relaxed mb-6">
                        {project.text}
                      </p>
                      <div className="card-actions justify-end gap-3">
                        {project.demo_link && (
                          <a
                            href={project.demo_link}
                            className="btn btn-primary"
                            {...(project.demo_link.startsWith('http') ? {
                              target: "_blank",
                              rel: "noopener noreferrer"
                            } : {})}
                            aria-label={`View live demo of ${project.name}`}
                          >
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                        )}
                        {project.github_link && (
                          <a
                            href={project.github_link}
                            className="btn btn-outline btn-secondary"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label={`View source code for ${project.name} on GitHub`}
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-base-content/60 text-lg">
                  No projects found. Check console for debug information.
                </p>
                <p className="text-base-content/50 text-sm mt-2">
                  Expected {projectslist ? projectslist.length : 0} projects
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        id
        name
        text
        demo_link
        github_link
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 400
              placeholder: BLURRED
              quality: 95
            )
          }
          publicURL
          extension
        }
      }
    }
  }
`

export default Projects
