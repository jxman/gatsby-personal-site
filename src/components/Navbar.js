import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Transition } from "@headlessui/react"

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = `
  btn btn-ghost btn-sm rounded-btn 
  `
  const mobileStyle = `
  btn btn-ghost btn-xs rounded-btn 
  `

  return (
    <div>
      <nav className="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        {/* <nav className="bg-gray-800"> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-lg font-bold align-middle">
                  {title}
                </Link>
              </div>
              {/* main desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/aboutme/"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    About
                  </Link>
                  <Link
                    to="/projects/"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/blog"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/resume/"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Resume
                  </Link>
                  <Link
                    to="/contact/"
                    className={linkStyle}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            {/* responvie menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <Link
                  to="/"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Home
                </Link>
                <Link
                  to="/aboutme/"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  About
                </Link>
                <Link
                  to="/projects/"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Projects
                </Link>
                <Link
                  to="/blog"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Blog
                </Link>
                <Link
                  to="/resume/"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Resume
                </Link>
                <Link
                  to="/contact/"
                  className={mobileStyle}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

Navbar.defaultProps = {
  title: "Welcome to my Personal Site",
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
