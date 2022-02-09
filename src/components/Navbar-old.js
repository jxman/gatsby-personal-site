import React, { useState } from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

function Navbar({ title }) {
  const [isExpanded, toggleExpansion] = useState(false)

  const linkStyle = `
  btn btn-ghost btn-sm rounded-btn
  `

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        {/* wider screen menu bar */}
        <div className="hidden md:flex flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              to="/aboutme"
              className={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* mobile menu button */}
        <div className="block lg:hidden ">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow ">
            <Link to={`/`} className={mobileStyle}>
              Home
            </Link>
            <Link to={`/aboutme`} className={mobileStyle}>
              About
            </Link>
            <Link to={`/projects`} className={mobileStyle}>
              Projects
            </Link>
            <Link to={`/resume`} className={mobileStyle}>
              Resume
            </Link>
            <Link to={`/contact`} className={mobileStyle}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Welcome to my Personal Site",
}

Navbar.propTypes = {
  title: propTypes.string,
}

export default Navbar
