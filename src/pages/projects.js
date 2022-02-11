import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

function projects({ data }) {
  const {
    allProjectsJson: { nodes: projectslist },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <Layout>
        {projectslist.map(project => {
          return (
            <div className="card lg:card-side card-bordered">
              <figure>
                <div className="border mockup-window bg-base-300 ">
                  <div className="flex justify-center  border-t border-base-300 ">
                    <GatsbyImage
                      image={project.image.childImageSharp.gatsbyImageData}
                      alt={project.name}
                    />
                  </div>
                </div>
              </figure>

              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.text}</p>
                <div className="card-actions">
                  <a
                    href={project.demo_link}
                    className="btn btn-outline btn-primary"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github_link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        name
        text
        demo_link
        github_link
        image {
          childImageSharp {
            gatsbyImageData(
              width: 400
              height: 200
              layout: FIXED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default projects
