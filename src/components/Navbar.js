import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Transition } from "@headlessui/react"

function Navbar({ title = "John Xanthopoulos" }) {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = `
    relative px-3 py-2 text-sm font-medium transition-all duration-200 
    hover:text-primary hover:scale-105 hover:shadow-sm
    text-base-content/80 hover:text-primary
    border-b-2 border-transparent hover:border-primary/30
  `

  const activeLinkStyle = `
    text-primary border-b-2 border-primary font-semibold
  `

  const mobileStyle = `
    block px-3 py-2 text-base font-medium transition-all duration-200
    hover:text-primary hover:bg-base-200 rounded-md
    text-base-content/80 hover:text-primary
  `

  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-md border-b border-base-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              {/* Professional Logo/Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <span className="text-base-100 font-bold text-lg">JX</span>
              </div>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-200">
                  {title}
                </div>
                <div className="text-xs text-base-content/60 font-medium">
                  IT Executive & Cloud Architect
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={linkStyle}
              activeClassName={activeLinkStyle}
            >
              Home
            </Link>
            <Link
              to="/aboutme/"
              className={linkStyle}
              activeClassName={activeLinkStyle}
            >
              About
            </Link>
            <Link
              to="/projects/"
              className={linkStyle}
              activeClassName={activeLinkStyle}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={linkStyle}
              activeClassName={activeLinkStyle}
            >
              <span className="flex items-center">
                Blog
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-medium">
                  New
                </span>
              </span>
            </Link>
            <Link
              to="/resume/"
              className={linkStyle}
              activeClassName={activeLinkStyle}
            >
              Resume
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact/"
              className="ml-4 btn btn-primary btn-sm hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-1"
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
              Let's Connect
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-base-content/70 hover:text-primary hover:bg-base-200 transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
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
      </nav>

      {/* Mobile Navigation */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95 -translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-2"
      >
        {ref => (
          <div
            className="md:hidden border-t border-base-200 bg-base-100/95 backdrop-blur-md"
            id="mobile-menu"
          >
            <div ref={ref} className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={mobileStyle}
                activeClassName="text-primary bg-primary/10 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </div>
              </Link>
              <Link
                to="/aboutme/"
                className={mobileStyle}
                activeClassName="text-primary bg-primary/10 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  About
                </div>
              </Link>
              <Link
                to="/projects/"
                className={mobileStyle}
                activeClassName="text-primary bg-primary/10 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Projects
                </div>
              </Link>
              <Link
                to="/blog"
                className={mobileStyle}
                activeClassName="text-primary bg-primary/10 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Blog
                  <span className="ml-auto px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                    New
                  </span>
                </div>
              </Link>
              <Link
                to="/resume/"
                className={mobileStyle}
                activeClassName="text-primary bg-primary/10 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </div>
              </Link>

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-base-200 mt-2">
                <Link
                  to="/contact/"
                  className="flex items-center w-full px-3 py-2 text-base font-medium bg-primary text-primary-content rounded-md hover:bg-primary/90 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </header>
  )
}


Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
