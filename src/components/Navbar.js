import React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn"
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              to="/aboutme"
              className="btn btn-ghost btn-sm rounded-btn"
              activeStyle={{ textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="btn btn-ghost btn-sm rounded-btn"
              activeStyle={{ textDecoration: "underline" }}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="btn btn-ghost btn-sm rounded-btn"
              activeStyle={{ textDecoration: "underline" }}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="btn btn-ghost btn-sm rounded-btn"
              activeStyle={{ textDecoration: "underline" }}
            >
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
