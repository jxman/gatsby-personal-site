import React from "react"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"

function lawn() {
  return (
    <>
      <Seo 
        title="Lawn Care & Landscaping Project - Personal Transformation Gallery"
        description="View John Xanthopoulos' lawn care and landscaping transformation project. Browse before and after photos showcasing dedication to excellence in all endeavors."
      />
      <a href="/projects/" className="btn btn-outline">
        Back to Projects
      </a>
      <div className="relative w-full carousel">
        <div id="slide1" className="relative w-full  carousel-item">
          <StaticImage
            className="w-full"
            src="../images/lawn1.jpeg"
            alt="aws hosting image"
            layout="constrained"
            aspectRatio={4 / 3}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="../lawn#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="../lawn#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full  carousel-item">
          <StaticImage
            className="w-full"
            src="../images/lawn2.jpeg"
            alt="aws hosting image"
            layout="constrained"
            aspectRatio={4 / 3}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="../lawn#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="../lawn#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full  carousel-item">
          <StaticImage
            className="w-full"
            src="../images/lawn3.jpeg"
            alt="aws hosting image"
            layout="constrained"
            aspectRatio={4 / 3}
          />{" "}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="../lawn#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="../lawn#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default lawn
