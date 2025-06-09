import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

function Resume({ data }) {
  const { markdownRemark } = data
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePrint = () => {
    setIsProcessing(true)
    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      window.print()
      setIsProcessing(false)
    }, 100)
  }

  const handleDownload = () => {
    setIsProcessing(true)
    // Show instruction for PDF download
    alert(
      'In the print dialog that opens, select "Save as PDF" as your destination to download a PDF copy of this resume.',
    )
    setTimeout(() => {
      window.print()
      setIsProcessing(false)
    }, 100)
  }

  return (
    <>
      <Seo
        title="John Xanthopoulos Resume - IT Executive & Cloud Solutions Architect"
        description="View and download the professional resume of John Xanthopoulos, IT Executive with 20+ years experience in cloud architecture, team leadership, and enterprise technology solutions."
      />
      <Layout>
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header with Download/Print Actions */}
          <div className="flex justify-between items-center mb-8 print:hidden">
            <div>
              <h1 className="text-3xl font-bold text-base-content">
                Professional Resume
              </h1>
              <p className="text-base-content/70 mt-2">
                IT Executive • Cloud Architecture • Team Leadership
              </p>
              <p className="text-sm text-blue-600 mt-1">
                Contact via LinkedIn or website contact form
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                disabled={isProcessing}
                className={`btn btn-outline btn-primary ${isProcessing ? "loading" : ""}`}
                aria-label="Print resume"
              >
                {!isProcessing && (
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
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                )}
                {isProcessing ? "Opening..." : "Print"}
              </button>
              <button
                onClick={handleDownload}
                disabled={isProcessing}
                className={`btn btn-primary ${isProcessing ? "loading" : ""}`}
                aria-label="Download resume as PDF"
              >
                {!isProcessing && (
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                {isProcessing ? "Opening..." : "Download PDF"}
              </button>
            </div>
          </div>

          {/* Notice Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg print:hidden">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> This resume version is not current. An updated CV reflecting recent projects and accomplishments is currently in progress.
                </p>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="bg-white shadow-sm border rounded-lg p-8 print:shadow-none print:border-none print:p-0">
            <article
              className="prose prose-lg max-w-none 
              prose-headings:text-base-content 
              prose-h1:text-4xl prose-h1:font-bold prose-h1:text-center prose-h1:mb-2
              prose-h2:text-xl prose-h2:font-semibold prose-h2:text-base-content/90 prose-h2:border-b-2 prose-h2:border-blue-600 prose-h2:pb-2 prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-lg prose-h3:font-semibold prose-h3:text-base-content prose-h3:mb-2
              prose-p:text-base-content/70 prose-p:leading-relaxed
              prose-li:text-base-content/70 prose-li:leading-relaxed
              prose-strong:text-base-content prose-strong:font-semibold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-hr:border-gray-300
              print:prose-sm"
            >
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            </article>
          </div>
        </div>
      </Layout>

      {/* Print-specific styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media print {
            body { 
              font-size: 12pt !important; 
              line-height: 1.4 !important; 
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
            .print\\:hidden { display: none !important; }
            .prose h1 { 
              font-size: 20pt !important; 
              text-align: center !important;
              margin-bottom: 8pt !important;
              color: #000 !important;
            }
            .prose h2 { 
              font-size: 14pt !important; 
              page-break-after: avoid !important;
              border-bottom: 1pt solid #000 !important;
              padding-bottom: 2pt !important;
              margin-top: 16pt !important;
              margin-bottom: 8pt !important;
              color: #000 !important;
            }
            .prose h3 { 
              font-size: 13pt !important; 
              page-break-after: avoid !important;
              margin-bottom: 4pt !important;
              color: #000 !important;
            }
            .prose li { 
              page-break-inside: avoid !important;
              margin-bottom: 3pt !important;
            }
            .prose p { 
              orphans: 3 !important; 
              widows: 3 !important;
              margin-bottom: 6pt !important;
            }
            .prose ul, .prose ol {
              margin-bottom: 8pt !important;
            }
            .prose strong {
              color: #000 !important;
            }
            .prose a {
              color: #000 !important;
              text-decoration: none !important;
            }
            .prose hr {
              border-color: #000 !important;
              margin: 12pt 0 !important;
            }
            .bg-white {
              background: white !important;
            }
            .shadow-sm, .border, .rounded-lg {
              box-shadow: none !important;
              border: none !important;
              border-radius: 0 !important;
            }
            .max-w-5xl {
              max-width: 100% !important;
            }
            .px-4, .py-8, .p-8 {
              padding: 0 !important;
            }
            @page {
              margin: 0.5in;
              size: letter;
            }
          }
        `,
        }}
      />
    </>
  )
}

export default Resume

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/resume.md/" }) {
      html
    }
  }
`
