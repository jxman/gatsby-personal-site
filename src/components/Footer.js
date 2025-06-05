import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="items-center p-6 footer bg-neutral text-neutral-content">
      <div className="justify-center grid grid-flow-col gap-4">
        <a href="https://www.linkedin.com/in/johnx/" target="_blank" rel="noopener noreferrer">
          LinkedIn <FaLinkedin className="inline text-2xl" />
        </a>

        <a href="https://github.com/jxman" target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub className="inline text-2xl" />
        </a>
      </div>
      <div className="items-center grid-flow-col">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
