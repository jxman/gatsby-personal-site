import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const AWSServicesDashboardPost = () => {
  return (
    <>
      <Seo
        title="Building AWS Services Dashboard: A Modular Architecture Journey with AI-Assisted Development"
        description="How strategic planning and modular serverless architecture led to a production-ready AWS monitoring platform, built entirely with Claude Code"
      />
      <Layout>
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/blog" className="btn btn-ghost btn-sm">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="badge badge-primary">AWS</div>
              <div className="badge badge-secondary">Serverless</div>
              <div className="badge badge-accent">AI Development</div>
              <div className="badge badge-info">Architecture</div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight">
              Building AWS Services Dashboard: A Modular Architecture Journey
              with AI-Assisted Development
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-base-content/70 mb-8">
              <div className="flex items-center gap-4">
                <span>Published: October 24, 2025</span>
                <span className="hidden sm:inline">•</span>
                <span>8 min read</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://aws-services.synepho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
            prose-headings:text-base-content
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-base-content/80 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-base-content/80 prose-li:leading-relaxed
            prose-strong:text-base-content prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent prose-code:bg-base-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
          >
            <p className="text-xl text-base-content/70 italic mb-8">
              When engineering teams and cloud architects design solutions
              across AWS environments, they need real-time visibility into
              service availability across regions. This is the story of how
              strategic planning, modular serverless architecture, and
              AI-assisted development came together to create a production-ready
              monitoring platform—written 100% with Claude Code.
            </p>

            <h2>The Challenge: AWS Service Discovery at Scale</h2>

            <p>
              As organizations expand their AWS footprint across multiple
              accounts and regions, a common challenge emerges: How do you
              quickly confirm which services are available in specific regions?
              When designing new solutions or planning migrations, cloud
              architects and engineers need instant answers to questions like:
            </p>

            <ul>
              <li>
                Is AWS AppSync available in ap-southeast-3 for our new project?
              </li>
              <li>
                Which regions support Amazon Bedrock for our AI initiative?
              </li>
              <li>
                What's our current service distribution across all AWS accounts?
              </li>
              <li>How has our infrastructure footprint changed over time?</li>
            </ul>

            <p>
              Traditional approaches involve manually checking AWS documentation
              or running CLI commands across multiple accounts—time-consuming
              and error-prone. We needed a real-time, visual solution that could
              aggregate this data automatically.
            </p>

            <h2>The Solution: Real-Time AWS Service Discovery and Visualization</h2>

            <p>
              The AWS Services Dashboard provides comprehensive visibility into
              your AWS infrastructure with:
            </p>

            <ul>
              <li>
                <strong>Real-time service monitoring</strong> across multiple
                AWS accounts and regions
              </li>
              <li>
                <strong>Regional deployment tracking</strong> with visual
                geographic distribution
              </li>
              <li>
                <strong>Geographic resource analysis</strong> showing service
                concentration patterns
              </li>
              <li>
                <strong>Excel report generation</strong> for stakeholder
                presentations and audits
              </li>
              <li>
                <strong>Infrastructure change monitoring</strong> to track
                deployment evolution
              </li>
              <li>
                <strong>Global CDN distribution</strong> for instant access from
                anywhere
              </li>
            </ul>

            <h2>Technology Stack: Modern, Scalable, Serverless</h2>

            <p>
              The platform leverages cutting-edge technologies optimized for
              performance and maintainability:
            </p>

            <h3>Frontend Technologies</h3>
            <ul>
              <li>
                <strong>React 18</strong> - Modern component architecture with
                concurrent features
              </li>
              <li>
                <strong>Vite</strong> - Lightning-fast build tool and dev server
              </li>
              <li>
                <strong>TanStack Query</strong> - Intelligent data fetching and
                caching
              </li>
              <li>
                <strong>Recharts</strong> - Interactive data visualizations
              </li>
              <li>
                <strong>Tailwind CSS</strong> - Utility-first responsive design
              </li>
              <li>
                <strong>React Router</strong> - Client-side navigation and
                routing
              </li>
            </ul>

            <h3>Backend & Infrastructure</h3>
            <ul>
              <li>
                <strong>AWS Lambda</strong> - Serverless compute for data
                collection
              </li>
              <li>
                <strong>EventBridge</strong> - Scheduled automated data fetching
              </li>
              <li>
                <strong>S3</strong> - Scalable storage for service data and
                static assets
              </li>
              <li>
                <strong>CloudWatch</strong> - Comprehensive monitoring and
                logging
              </li>
              <li>
                <strong>Terraform</strong> - Infrastructure as Code for
                repeatable deployments
              </li>
              <li>
                <strong>CloudFront CDN</strong> - Global content delivery with
                edge caching
              </li>
              <li>
                <strong>Route53</strong> - DNS management and health checks
              </li>
              <li>
                <strong>GitHub Actions</strong> - CI/CD pipeline automation
              </li>
            </ul>

            <h2>Modular Architecture: The Key to Managing Complexity</h2>

            <p>
              Here's where the real learning happened. The project is split into
              four independent repositories, each with a clear separation of
              responsibilities. This modular approach combined with AWS
              serverless services creates a scalable, maintainable system:
            </p>

            <h3>1. aws-services-site (Frontend Dashboard)</h3>
            <p>
              The React-based user interface responsible solely for displaying
              data and user interactions. No backend logic, no data collection—
              just a clean, focused presentation layer.
            </p>

            <h3>2. aws-infrastructure-fetcher (Data Collection)</h3>
            <p>
              A Lambda function that runs on a schedule via EventBridge. Its
              single responsibility: fetch service data from AWS APIs and store
              it in S3. No UI concerns, no reporting logic.
            </p>

            <h3>3. nodejs-aws-reporter (Excel Report Generation)</h3>
            <p>
              An independent Node.js service that reads S3 data and generates
              formatted Excel reports. Completely isolated from the dashboard
              and data collection logic.
            </p>

            <h3>4. synepho-s3cf-site (Infrastructure Provisioning)</h3>
            <p>
              Terraform configurations that provision all AWS resources: S3
              buckets, CloudFront distributions, Lambda functions, IAM roles,
              and more. Infrastructure concerns separated from application code.
            </p>

            <h3>Serverless Architecture Benefits</h3>
            <p>
              By leveraging AWS serverless services (Lambda, S3, EventBridge,
              CloudFront), this architecture provides:
            </p>
            <ul>
              <li>
                <strong>Zero server management</strong> - No EC2 instances to
                patch or maintain
              </li>
              <li>
                <strong>Automatic scaling</strong> - Handles traffic spikes
                without configuration
              </li>
              <li>
                <strong>Pay-per-use pricing</strong> - Only pay for actual
                execution time
              </li>
              <li>
                <strong>Built-in high availability</strong> - AWS manages
                redundancy and failover
              </li>
              <li>
                <strong>Global distribution</strong> - CloudFront CDN delivers
                content worldwide
              </li>
            </ul>

            <blockquote>
              <p>
                <strong>Key Insight:</strong> Breaking the project into these
                distinct modular components wasn't just good architecture—it was
                essential for successful AI-assisted development. Each
                repository became a manageable, focused context that Claude Code
                could understand and work with effectively.
              </p>
            </blockquote>

            <h2>The AI Development Workflow: Plan First, Code Second</h2>

            <p>
              Every line of code in this project was written by Claude Code. But
              here's the crucial lesson I learned: AI agents are eager to help
              and quick to write code. Ask "Write me an application to do X" and
              you'll get code immediately. However, as projects grow complex,
              this approach leads to challenges:
            </p>

            <ul>
              <li>
                <strong>Context overload</strong> - AI agents struggle when too
                much code exists in one place
              </li>
              <li>
                <strong>Tangled dependencies</strong> - Changes become risky and
                unpredictable
              </li>
              <li>
                <strong>Lost in complexity</strong> - The AI can't maintain
                mental models of large codebases
              </li>
              <li>
                <strong>Regression risks</strong> - Updates break seemingly
                unrelated features
              </li>
              <li>
                <strong>Deployment nightmares</strong> - Monolithic codebases
                are hard to deploy incrementally
              </li>
            </ul>

            <h3>The Better Approach: Design Sessions Before Code Sessions</h3>

            <p>
              Instead of rushing to code, I spent significant time upfront on
              planning and design with Claude Code:
            </p>

            <ol>
              <li>
                <strong>Define clear boundaries</strong> - What does each
                service do? What doesn't it do?
              </li>
              <li>
                <strong>Map data flows</strong> - How does information move
                between services?
              </li>
              <li>
                <strong>Establish contracts</strong> - What are the API
                interfaces and data formats?
              </li>
              <li>
                <strong>Plan infrastructure</strong> - What AWS resources do we
                need and why?
              </li>
              <li>
                <strong>Design for deployment</strong> - How will changes be
                tested and rolled out?
              </li>
            </ol>

            <p>
              Only after these design sessions did we start writing code. And
              the difference was remarkable:
            </p>

            <ul>
              <li>
                <strong>Focused coding sessions</strong> - Each repository was a
                contained, manageable task
              </li>
              <li>
                <strong>Clearer instructions</strong> - I could give precise
                direction within defined boundaries
              </li>
              <li>
                <strong>Easier troubleshooting</strong> - Issues were isolated
                to specific services
              </li>
              <li>
                <strong>Confident changes</strong> - Updates in one repo didn't
                risk breaking others
              </li>
              <li>
                <strong>Independent deployments</strong> - Services could be
                updated on their own schedule
              </li>
            </ul>

            <blockquote>
              <p>
                <strong>Pro Tip:</strong> When working with AI coding
                assistants, resist the urge to get code immediately. Spend time
                on design. The more complex your project, the more critical this
                upfront investment becomes.
              </p>
            </blockquote>

            <h2>Lessons from Traditional Software Development Still Apply</h2>

            <p>
              This experience reinforced a fundamental truth: whether you're
              working with AI agents or traditional development teams, the best
              projects have strong upfront planning and design sessions.
            </p>

            <p>
              In traditional teams, you'd never start a complex project without:
            </p>

            <ul>
              <li>Architecture reviews</li>
              <li>Design documents</li>
              <li>API contracts</li>
              <li>Data flow diagrams</li>
              <li>Deployment strategies</li>
            </ul>

            <p>
              The same principles apply to AI-assisted development. The AI is
              your pair programmer, not a magic solution that eliminates the
              need for good software engineering practices.
            </p>

            <h2>Benefits for Engineering Teams and Cloud Architects</h2>

            <p>
              The AWS Services Dashboard has become an invaluable tool for our
              engineering workflows:
            </p>

            <h3>For Cloud Architects</h3>
            <ul>
              <li>
                Quickly verify service availability when designing multi-region
                solutions
              </li>
              <li>
                Identify regions supporting new AWS services for
                proof-of-concept work
              </li>
              <li>
                Visualize geographic distribution to optimize latency and
                compliance
              </li>
              <li>
                Generate reports for stakeholder presentations and compliance
                audits
              </li>
            </ul>

            <h3>For Engineering Teams</h3>
            <ul>
              <li>
                Confirm regional service support before committing to
                implementation
              </li>
              <li>
                Monitor infrastructure evolution as teams deploy new resources
              </li>
              <li>
                Identify service sprawl and opportunities for consolidation
              </li>
              <li>
                Track adoption of new AWS services across the organization
              </li>
            </ul>

            <h3>For DevOps and Platform Teams</h3>
            <ul>
              <li>Real-time visibility into multi-account AWS footprints</li>
              <li>
                Automated data collection eliminates manual inventory processes
              </li>
              <li>Historical tracking shows infrastructure growth patterns</li>
              <li>Excel exports integrate with existing reporting workflows</li>
            </ul>

            <h2>Deployment: Infrastructure as Code All the Way</h2>

            <p>
              The entire platform is deployed using Terraform and GitHub
              Actions, ensuring:
            </p>

            <ul>
              <li>
                <strong>Repeatable deployments</strong> - Infrastructure is
                versioned and reproducible
              </li>
              <li>
                <strong>Automated pipelines</strong> - Changes flow through
                CI/CD automatically
              </li>
              <li>
                <strong>Environment parity</strong> - Dev, staging, and
                production match exactly
              </li>
              <li>
                <strong>Disaster recovery</strong> - Complete rebuild from code
                in minutes
              </li>
              <li>
                <strong>Security compliance</strong> - All changes audited and
                approved via pull requests
              </li>
            </ul>

            <h2>Key Takeaways for Your AI-Assisted Projects</h2>

            <p>
              If you're working with AI coding assistants on complex projects,
              here are my recommendations:
            </p>

            <ol>
              <li>
                <strong>Design before coding</strong> - Spend significant time
                on architecture and planning
              </li>
              <li>
                <strong>Break it down</strong> - Split complex systems into
                focused, modular components
              </li>
              <li>
                <strong>Define clear boundaries</strong> - Each component should
                have a single, well-defined responsibility
              </li>
              <li>
                <strong>Document interfaces</strong> - API contracts and data
                formats are critical
              </li>
              <li>
                <strong>Resist quick code</strong> - Just because AI can write
                code quickly doesn't mean it should
              </li>
              <li>
                <strong>Maintain context size</strong> - Keep individual
                codebases manageable for AI comprehension
              </li>
              <li>
                <strong>Apply traditional practices</strong> - Good software
                engineering principles still matter
              </li>
            </ol>

            <h2>Production Results</h2>

            <p>The numbers speak for themselves:</p>

            <ul>
              <li>
                <strong>4 independent repositories</strong> - Each with focused
                purpose
              </li>
              <li>
                <strong>100% AI-written code</strong> - All by Claude Code
              </li>
              <li>
                <strong>Sub-second load times</strong> - Thanks to CloudFront
                CDN
              </li>
              <li>
                <strong>Real-time data updates</strong> - Automated via
                EventBridge scheduler
              </li>
              <li>
                <strong>Multi-region monitoring</strong> - Across all 33+ AWS
                regions
              </li>
              <li>
                <strong>Zero-downtime deployments</strong> - Via GitHub Actions
                CI/CD
              </li>
            </ul>

            <h2>Try It Yourself</h2>

            <p>
              The AWS Services Dashboard is live and available for exploration:
            </p>

            <ul>
              <li>
                <strong>Live Demo:</strong>{" "}
                <a
                  href="https://aws-services.synepho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aws-services.synepho.com
                </a>
              </li>
              <li>
                <strong>Source Code:</strong>{" "}
                <a
                  href="https://github.com/jxman/aws-services-dashboard-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>

            <h2>Join the Conversation</h2>

            <p>
              I'd love to hear about your experiences with AI-assisted
              development and modular architecture:
            </p>

            <ul>
              <li>
                Have you faced similar challenges managing AI-generated code
                complexity?
              </li>
              <li>
                What design patterns have you found effective for AI pair
                programming?
              </li>
              <li>
                How do you balance rapid prototyping with long-term
                maintainability?
              </li>
              <li>
                What tools and strategies work best for your AI development
                workflows?
              </li>
            </ul>

            <p>
              Share your thoughts, experiences, and lessons learned. Whether
              you're just starting with AI-assisted development or you're a
              seasoned practitioner, the community benefits from shared
              knowledge and experimentation.
            </p>

            <p>
              Feel free to reach out via{" "}
              <a
                href="https://github.com/jxman"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/johnxanthopoulos"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              . Let's build better software together—with or without AI
              assistance.
            </p>

            <div className="mt-12 p-6 bg-base-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Want to Explore More?
              </h3>
              <p className="mb-4">
                Check out my other AI-assisted projects and read about my
                journey with Claude Code:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary btn-sm">
                  View All Projects
                </Link>
                <Link
                  to="/blog/ai-pair-programming-journey"
                  className="btn btn-outline btn-sm"
                >
                  AI Pair Programming Journey
                </Link>
                <Link
                  to="/blog/lawnsmartapp-release"
                  className="btn btn-outline btn-sm"
                >
                  LawnSmart App Story
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default AWSServicesDashboardPost
