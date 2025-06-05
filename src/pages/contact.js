import React, { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AnimatedSection from "../components/AnimatedSection"

function Contact() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Page Header */}
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's connect! Whether you have questions about technology leadership, 
              cloud architecture, or want to discuss potential collaborations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <FaLinkedin className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                      <p className="text-gray-600">Best way to reach me</p>
                      <a 
                        href="https://www.linkedin.com/in/johnx/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        linkedin.com/in/johnx
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary text-white p-3 rounded-lg">
                      <FaGithub className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">GitHub</h3>
                      <p className="text-gray-600">Check out my projects</p>
                      <a 
                        href="https://github.com/jxman" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        github.com/jxman
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent text-white p-3 rounded-lg">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Contact Form</h3>
                      <p className="text-gray-600">Currently under development</p>
                      <span className="text-gray-500 text-sm">Please use LinkedIn for now</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-info/10 border-l-4 border-info rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Inquiries</h4>
                  <p className="text-gray-600 text-sm">
                    For business opportunities, speaking engagements, or technology consulting, 
                    please reach out via LinkedIn with a detailed message.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="bg-base-100 rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
                  <div className="badge badge-warning">Under Development</div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="bot-field" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label htmlFor="name" className="label">
                        <span className="label-text font-medium">Name *</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="input input-bordered w-full focus:input-primary"
                        required
                      />
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="email" className="label">
                        <span className="label-text font-medium">Email *</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        className="input input-bordered w-full focus:input-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label htmlFor="message" className="label">
                      <span className="label-text font-medium">Message *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered h-32 focus:textarea-primary"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-outline"
                    >
                      Clear Form
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      <FaEnvelope className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-warning/10 border-l-4 border-warning rounded-r-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This contact form is currently under development. 
                    For immediate responses, please connect with me on LinkedIn.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Feature Under Development</h3>
              <div className="py-4">
                <div className="flex items-center mb-4">
                  <div className="bg-warning text-white p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Coming Soon!</p>
                    <p className="text-sm text-gray-600">Contact form functionality is in development</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Thank you for your interest in reaching out! I'm currently working on implementing 
                  the contact form functionality. In the meantime, I'd love to connect with you on LinkedIn.
                </p>
                
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="flex items-center">
                    <FaLinkedin className="text-primary text-2xl mr-3" />
                    <div>
                      <p className="font-semibold">Connect on LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/johnx/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        linkedin.com/in/johnx
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-action">
                <a 
                  href="https://www.linkedin.com/in/johnx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaLinkedin className="mr-2" />
                  Connect on LinkedIn
                </a>
                <button 
                  onClick={closeModal} 
                  className="btn btn-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default Contact
