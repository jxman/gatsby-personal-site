import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="items-center p-6 footer bg-neutral text-neutral-content">
      <div class="justify-center grid grid-flow-col gap-4">
        <a href="https://www.linkedin.com/in/johnx/">
          LinkedIn <FaLinkedin className="inline text-2xl" />
        </a>

        <a href="https://github.com/jxman">
          GitHub <FaGithub className="inline text-2xl" />
        </a>
      </div>
      <div class="items-center grid-flow-col">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
