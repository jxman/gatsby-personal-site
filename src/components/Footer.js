import React from "react"
import { Link } from "gatsby"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-base-200 via-base-300 to-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md">
                <span className="text-base-100 font-bold text-lg">JX</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content">
                  John Xanthopoulos
                </h3>
                <p className="text-sm text-base-content/60">
                  Technology Leader & Developer
                </p>
              </div>
            </div>

            <p className="text-base-content/70 mb-6 max-w-md leading-relaxed">
              IT Executive with 20+ years of experience leading technology teams
              and architecting cloud solutions. Passionate about building
              innovative solutions and sharing knowledge through code and
              writing.
            </p>

            {/* Recent Projects Highlight */}
            <div className="space-y-2">
              <h4 className="font-semibold text-base-content mb-3">
                Recent Work
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.lawnsmartapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200 group"
                >
                  <span className="mr-2">🌱</span>
                  Lawn.Smart - USDA Zone Lawn Care App
                  <FaExternalLinkAlt className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <Link
                  to="/blog/lawnsmartapp-release"
                  className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200"
                >
                  <span className="mr-2">📝</span>
                  Latest Blog: AI-Powered Development Journey
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { to: "/aboutme", label: "About Me", icon: "👤" },
                { to: "/projects", label: "Projects", icon: "🚀" },
                { to: "/blog", label: "Blog", icon: "📝" },
                { to: "/resume", label: "Resume", icon: "📄" },
                { to: "/contact", label: "Contact", icon: "✉️" },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200 group"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                  <svg
                    className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
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
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">
              Let's Connect
            </h4>

            {/* Social Links */}
            <div className="space-y-3 mb-6">
              <a
                href="https://www.linkedin.com/in/johnx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200 group"
              >
                <FaLinkedin className="w-4 h-4 mr-3 text-blue-600" />
                LinkedIn
                <FaExternalLinkAlt className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/jxman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200 group"
              >
                <FaGithub className="w-4 h-4 mr-3 text-gray-600" />
                GitHub
                <FaExternalLinkAlt className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <Link
                to="/contact"
                className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors duration-200 group"
              >
                <FaEnvelope className="w-4 h-4 mr-3 text-green-600" />
                Email Me
                <svg
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
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

            {/* Tech Stack Icons */}
            <div>
              <h5 className="text-xs font-medium text-base-content/60 mb-2 uppercase tracking-wider">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "AWS", icon: "☁️" },
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Terraform", icon: "🏗️" },
                ].map(tech => (
                  <div
                    key={tech.name}
                    className="flex items-center px-2 py-1 bg-base-100 rounded text-xs text-base-content/60 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    title={tech.name}
                  >
                    <span className="mr-1">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-base-content/60">
              <p>© {footerYear} John Xanthopoulos. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="text-xs">Built with</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Gatsby</span>
                  <span>+</span>
                  <span className="text-xs">Tailwind CSS</span>
                  <span>+</span>
                  <span className="text-xs">Claude Code</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://synepho.com"
                className="text-xs text-base-content/60 hover:text-primary transition-colors duration-200"
              >
                synepho.com
              </a>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                title="Site Status: Active"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
