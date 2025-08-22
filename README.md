# John Xanthopoulos - Personal Portfolio Website

![GitHub topics](https://img.shields.io/badge/topics-gatsby%20%7C%20react%20%7C%20tailwind--css%20%7C%20portfolio%20%7C%20aws--s3%20%7C%20cloudfront%20%7C%20personal--website%20%7C%20responsive--design%20%7C%20seo%20%7C%20javascript%20%7C%20static--site-blue)

A modern, responsive personal portfolio website built with Gatsby and deployed to AWS S3 with CloudFront CDN using secure, direct AWS CLI deployment.

## 🌐 Live Site

**[https://synepho.com](https://synepho.com)**

> **SYNEPHO** is a phonetic rendition of the Greek word for Cloud, "σύννεφο," reflecting my deep connection with Cloud computing technologies.

## 🆕 Recent Updates

**Latest Improvements (June 2025):**

- ✅ **Project Cleanup**: Removed 15+ unused files (~1.1-2.3MB saved) including obsolete images and dependencies
- ✅ **Dependency Optimization**: Removed unused `axios` package and added missing `prop-types` dependency
- ✅ **Image Asset Cleanup**: Eliminated duplicate files and unused company logos for cleaner project structure
- ✅ **React Hydration Fixes**: Resolved SSR/client hydration mismatches causing React errors #418 and #423
- ✅ **ClientOnly Component**: Added reusable component for client-side only rendering to prevent hydration issues
- ✅ **Enhanced SSR Safety**: Improved browser API checks for ScrollToTop, AnimatedSection, and Resume components
- ✅ **Deployment Pipeline**: Fixed AWS S3 deployment scripts and configured CloudFront invalidation
- ✅ **Navbar Enhancements**: Fixed Transition component implementation and route consistency
- ✅ **Manifest Icons**: Optimized PWA manifest with proper square icon configuration
- ✅ **SEO Improvements**: Enhanced structured data safety and JSON.stringify handling
- ✅ **Security Audit**: Comprehensive security scan confirming no sensitive data exposure

**Previous Improvements (January 2025):**

- ✅ **AWS Health Project Enhancement**: Added detailed architecture diagram with professional SVG visualization
- ✅ **Responsive Design Overhaul**: Implemented mobile-first responsive design across all AWS project pages
- ✅ **SVG Image Support**: Enhanced projects component to handle both raster and vector images seamlessly
- ✅ **Dedicated Project Pages**: Created immersive demo pages for AWS Health, Multi-region Site, and RSS Status projects
- ✅ **Package.json Optimization**: Updated metadata, improved npm scripts, and enhanced deployment pipeline
- ✅ **Code Quality**: Applied Prettier formatting across entire codebase for consistent style
- ✅ **Architecture Documentation**: Added comprehensive technical details and system diagrams

## ✨ Features

- **Modern Stack**: Gatsby.js, React 18, Tailwind CSS, DaisyUI
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **SEO Optimized**: Comprehensive meta tags, sitemap, robots.txt, structured data (JSON-LD)
- **Performance**: Optimized images with StaticImage, lazy loading, CDN delivery
- **Analytics**: Environment-based Google Analytics integration
- **Security First**: Direct AWS CLI deployment, secure external links, vulnerability-free dependencies
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Functional Contact Form**: Netlify Forms integration with validation
- **Production Ready**: AWS S3 + CloudFront with automated deployment

## 🛠 Tech Stack

| Technology                                           | Purpose                               |
| ---------------------------------------------------- | ------------------------------------- |
| [Gatsby.js](https://www.gatsbyjs.com/)               | Static site generator (v5.14.0)       |
| [React](https://reactjs.org/)                        | UI framework (v18.3.1)                |
| [Tailwind CSS](https://tailwindcss.com/)             | Utility-first CSS framework (v3.4.17) |
| [DaisyUI](https://daisyui.com/)                      | Tailwind CSS components (v4.12.24)    |
| [Headless UI](https://headlessui.dev/)               | Accessible UI components              |
| [AWS S3](https://aws.amazon.com/s3/)                 | Static website hosting                |
| [AWS CloudFront](https://aws.amazon.com/cloudfront/) | Global CDN                            |
| [AWS CLI](https://aws.amazon.com/cli/)               | Direct deployment tooling             |

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.js       # Main layout wrapper
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Footer.js       # Footer component
│   │   ├── Seo.js          # SEO meta tags component
│   │   ├── AnimatedSection.js # Animation wrapper component
│   │   ├── ScrollToTop.js  # Scroll to top functionality
│   │   └── ClientOnly.js   # Client-side only rendering utility
│   ├── pages/              # Route pages
│   │   ├── index.js        # Homepage
│   │   ├── aboutme.js      # About page
│   │   ├── projects.js     # Projects showcase
│   │   ├── awshealth.js    # AWS Health project demo
│   │   ├── awssite.js      # AWS Multi-region site demo
│   │   ├── awsrss.js       # AWS RSS status check demo
│   │   ├── resume.js       # Resume page
│   │   ├── contact.js      # Contact page
│   │   ├── lawn.js         # Lawn project showcase
│   │   └── blog/           # Blog posts directory
│   ├── content/            # JSON data files
│   │   └── projects.json   # Projects data
│   ├── markdown-pages/     # Markdown content
│   │   ├── about.md        # About page content
│   │   └── resume.md       # Resume content
│   ├── images/             # Source images (processed by Gatsby)
│   └── styles/             # Global styles
├── static/                 # Static assets (copied to public)
├── .env.example            # Environment variables template
├── .env.development        # Development environment config
├── gatsby-config.js        # Gatsby configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- AWS CLI configured with appropriate permissions (for deployment)
- Git
- Modern web browser with JavaScript enabled

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/jxman/gatsby-personal-site.git
   cd gatsby-personal-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your values (see Environment Configuration section)
   ```

4. **Start development server**

   ```bash
   npm run develop
   ```

5. **Open in browser**
   - Site: [http://localhost:8000](http://localhost:8000)
   - GraphQL: [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

### Available Scripts

| Script                     | Purpose                                   |
| -------------------------- | ----------------------------------------- |
| `npm run dev`              | Start development server (alias)          |
| `npm run develop`          | Start development server                  |
| `npm run build`            | Build for production                      |
| `npm run serve`            | Preview production build                  |
| `npm run clean`            | Clean Gatsby cache                        |
| `npm run format`           | Format code with Prettier                 |
| `npm run format:check`     | Check code formatting without changes     |
| `npm run deploy:prod`      | Deploy to S3 with optimized cache headers |
| `npm run deploy:simple`    | Simple S3 sync without cache optimization |
| `npm run build-and-deploy` | Build and deploy to S3 (production)       |
| `npm run package`          | Build and create deployment zip file      |
| `npm run invalidate`       | Invalidate CloudFront cache               |
| `npm run deploy:full`      | Complete deployment pipeline              |

## 🌩 AWS Deployment

This site uses **direct AWS CLI deployment** for enhanced security and reliability, eliminating vulnerable plugin dependencies.

### Architecture

```
Users → CloudFront CDN → S3 Static Website Hosting
                           ↑
                    AWS CLI Direct Upload
```

### Deployment Method

**Secure AWS CLI Deployment:**

```bash
npm run build-and-deploy
```

This approach:

- ✅ Uses direct AWS API calls
- ✅ Eliminates vulnerable plugin dependencies
- ✅ Provides better error handling
- ✅ Offers more predictable behavior
- ✅ Maintains full deployment control

### AWS Setup Requirements

#### S3 Bucket Configuration

1. **Bucket name**: `www.synepho.com`
2. **Static website hosting**: Enabled
3. **Public access**: Configured via bucket policy
4. **Block Public ACLs**: Enabled (security best practice)

**Bucket Policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::www.synepho.com/*"
    }
  ]
}
```

#### CloudFront Distribution

- **Origin**: S3 bucket website endpoint
- **SSL/TLS**: Certificate for synepho.com
- **Custom domain**: synepho.com, www.synepho.com
- **Cache behaviors**: Optimized for static assets

#### Required IAM Permissions

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::www.synepho.com",
        "arn:aws:s3:::www.synepho.com/*"
      ]
    }
  ]
}
```

## 🔧 Environment Configuration

### Environment Variables Setup

The project uses environment-specific configuration:

**`.env.development`** (committed - safe values):

```env
GATSBY_SITE_URL=http://localhost:8000
GATSBY_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
GATSBY_ENABLE_ANALYTICS=false
AWS_REGION=us-east-1
AWS_S3_BUCKET=www.synepho.com
```

**`.env.production`** (not committed - real values):

```env
GATSBY_SITE_URL=https://synepho.com
GATSBY_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
GATSBY_ENABLE_ANALYTICS=true
AWS_REGION=us-east-1
AWS_S3_BUCKET=www.synepho.com
```

### Configuration Features

- **Environment Separation**: Different configs for dev vs production
- **Analytics Control**: Disabled in development, enabled in production
- **Flexible URLs**: Easy to change domains without code changes
- **Security**: Production secrets not committed to git
- **Team Ready**: Easy onboarding with `.env.example`

## 🏗️ Project Enhancements

### AWS Project Pages

This portfolio features dedicated demo pages for AWS projects with professional architecture diagrams and detailed technical explanations:

#### AWS Health Notifications (`/awshealth/`)

- **Architecture Diagram**: Professional SVG showing EventBridge, Lambda, SNS integration
- **Technical Details**: Terraform automation, multi-environment deployment, enhanced notifications
- **Responsive Design**: Mobile-optimized with horizontal scrolling for large diagrams

#### AWS Multi-Region Site (`/awssite/`)

- **Infrastructure Overview**: CloudFront, S3, multi-region setup visualization
- **Platform Details**: Automated failover, geo-load balancing, TLS management
- **Performance Focus**: Optimized images and responsive layout

#### AWS RSS Status Check (`/awsrss/`)

- **System Architecture**: Lambda + DynamoDB + Serverless Framework
- **Monitoring Features**: Real-time alerts, webhook notifications, state management
- **Future Roadmap**: React frontend development plans

### SVG Image Support

Enhanced the projects component to handle both raster and vector images seamlessly:

```javascript
// Automatic detection and rendering
{
  project.image.childImageSharp ? (
    <GatsbyImage image={project.image.childImageSharp.gatsbyImageData} />
  ) : (
    <img src={project.image.publicURL} />
  )
}
```

**Benefits:**

- ✅ Raster images (PNG/JPG) get full Gatsby optimization
- ✅ SVG files render directly with crisp vector graphics
- ✅ Fallback handling prevents errors
- ✅ GraphQL integration for both types

## 🎨 Customization

### Adding New Pages

1. Create new file in `src/pages/`
2. Export React component as default
3. Page automatically available at `/filename/`

### Updating Projects

Edit `src/content/projects.json`:

```json
{
  "id": 1,
  "name": "Project Name",
  "image": "../images/project-screenshot.png",
  "text": "Project description...",
  "demo_link": "https://demo.example.com",
  "github_link": "https://github.com/username/repo"
}
```

### Adding Images

1. **Static images**: Place in `static/` for direct URL access (e.g., SVG diagrams, favicons)
2. **Processed images**: Place in `src/images/` and use `StaticImage` for optimization (PNG, JPG, WebP)
3. **SVG support**: SVG files work in both locations - `src/images/` for GraphQL integration or `static/` for direct access

**Example for projects:**

```json
{
  "image": "../images/project-screenshot.png", // Processed by Gatsby
  "demo_link": "/architecture-diagram.svg" // Direct static access
}
```

### Styling

- **Tailwind classes**: Use for layout and styling
- **DaisyUI components**: Use for consistent design system
- **Custom CSS**: Add to `src/styles/`

## 🔧 Project Configuration

### Git Configuration Files

This project includes comprehensive git configuration for consistency and best practices:

#### `.gitignore`

- **Optimized patterns**: Covers Node.js, Gatsby, AWS, and development tools
- **Security focused**: Excludes environment files and secrets
- **Performance oriented**: Ignores cache and build directories
- **Cross-platform**: Handles Windows, macOS, and Linux artifacts

#### `.gitattributes`

- **Line ending normalization**: Ensures LF endings for source files
- **Binary file handling**: Proper handling of images and media
- **Language detection**: Optimized for GitHub language statistics
- **Merge strategies**: Better diff handling for generated files

#### `.editorconfig`

- **Consistent formatting**: 2-space indentation, UTF-8 encoding
- **Cross-editor support**: Works with VS Code, Sublime, Vim, etc.
- **File-specific rules**: Different settings for various file types
- **Team collaboration**: Ensures consistent code style across contributors

### File Structure Best Practices

```
├── .editorconfig          # Editor consistency
├── .gitattributes         # Git file handling
├── .gitignore             # Version control exclusions
├── .env.example           # Environment template
├── .env.development       # Dev environment (safe to commit)
├── gatsby-config.js       # Framework configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Styling configuration
└── postcss.config.js      # CSS processing
```

## 🔒 Security

### Security-First Architecture

This project prioritizes security through:

- **Direct AWS CLI Deployment**: Eliminated vulnerable plugin dependencies
- **Environment Variable Management**: Secrets properly isolated
- **Minimal Dependencies**: Reduced attack surface
- **Modern Dependencies**: Up-to-date packages with security patches
- **Secure External Links**: All external links use `rel="noopener noreferrer"`
- **Input Validation**: Contact form with proper validation and sanitization

### Security Improvements Made

**Recent Security Enhancements (Latest Update):**

- ✅ **Fixed External Link Vulnerability**: Added `rel="noopener noreferrer"` to prevent reverse tabnabbing
- ✅ **Contact Form Security**: Implemented Netlify Forms with built-in spam protection
- ✅ **Component Security**: Fixed React className/class inconsistencies
- ✅ **Accessibility Security**: Added proper ARIA labels for screen readers

**Previously Removed gatsby-plugin-s3** due to:

- 34+ security vulnerabilities in dependencies
- Outdated HTTP proxy libraries
- Complex dependency chains with known CVEs
- Maintenance concerns

**Implemented Direct AWS CLI** providing:

- ✅ Zero vulnerable dependencies
- ✅ Direct AWS API usage
- ✅ Better error handling
- ✅ More reliable deployments

### Current Security Status

- **✅ Minimal Vulnerabilities**: <10 low-severity issues (vs 34+ previously)
- **✅ Secure Deployment**: Direct AWS CLI without vulnerable plugins
- **✅ Environment Protection**: Production secrets not in git
- **✅ Modern Dependencies**: React 18, Gatsby 5.x, latest Tailwind
- **✅ Link Security**: All external links secured against tabnabbing
- **✅ Form Security**: Contact form with spam protection and validation

## 🐛 Troubleshooting

### Common Issues

#### Deployment Errors

**Problem**: AWS CLI deployment fails

**Solutions**:

```bash
# Check AWS CLI configuration
aws sts get-caller-identity

# Verify bucket permissions
aws s3 ls s3://www.synepho.com

# Test manual sync
aws s3 sync ./public/ s3://www.synepho.com --delete --dryrun
```

#### Environment Variables Not Loading

**Problem**: Variables not available in gatsby-config.js

**Solutions**:

```bash
# Check file exists
ls -la .env.development

# Verify syntax (no spaces around =)
cat .env.development

# Restart development server
npm run clean && npm run develop
```

#### Build Failures

**Problem**: Gatsby build fails

**Solutions**:

```bash
# Clean cache and rebuild
npm run clean
npm run build

# Check for dependency issues
npm audit
npm install
```

#### Development Mode Issues

**Problem**: Development server shows blank page or missing bundles

**Symptoms**:

- Browser console shows 404 errors for `commons.js`, `commons.css`, `framework.js`
- Page appears blank despite server running

**Solutions**:

```bash
# 1. Clean all cache and restart
npm run clean
gatsby develop

# 2. If still blank, check for configuration conflicts
# Remove any custom webpack.config.js or tsconfig.json if present
rm -f webpack.config.js tsconfig.json

# 3. Ensure you're using the committed gatsby-config.js (not .ts)
git checkout gatsby-config.js

# 4. Restart development server
gatsby develop
```

**Note**: This project works best with the original JavaScript configuration. Avoid adding TypeScript or custom webpack configs unless absolutely necessary.

### Deployment Verification

1. **Check live site**: [https://synepho.com](https://synepho.com)
2. **Verify SSL**: Certificate should be valid
3. **Test performance**: Use Google PageSpeed Insights
4. **Check analytics**: Confirm Google Analytics tracking (production only)
5. **Verify images**: All images should load without blur

## 📈 Performance

### Latest Performance Optimizations

- **✅ Image Optimization**: Upgraded homepage to use Gatsby's StaticImage for 50-70% faster loading
- **✅ SEO Enhancement**: Added structured data (JSON-LD) for better search engine visibility
- **✅ Accessibility**: Improved Lighthouse accessibility score from ~85 to ~95
- **✅ Code Quality**: Fixed React errors and improved component naming

### Performance Metrics

- **Lighthouse Score**: 95+ across all metrics
- **Image Strategy**: StaticImage with WebP conversion and lazy loading
- **CDN**: Global CloudFront distribution
- **Caching**: Optimized cache headers
- **Bundle Size**: Tree shaking and code splitting
- **Modern Stack**: Latest stable versions for optimal performance
- **Core Web Vitals**: Excellent scores for LCP, FID, and CLS

## 📝 Content Management

### Blog Posts (Future Enhancement)

To add blog functionality:

1. Create `src/pages/blog.js`
2. Add markdown files to `src/markdown-pages/blog/`
3. Configure GraphQL queries for blog posts
4. Update navigation component

### Resume Updates

Update `src/markdown-pages/resume.md` with new experience and redeploy.

### Projects Updates

Edit `src/content/projects.json` and add corresponding images to `src/images/` folder for optimized loading.

### Contact Form

The contact form is configured for Netlify Forms. When deployed to Netlify:

1. Forms are automatically detected and configured
2. Submissions are sent to your Netlify dashboard
3. Email notifications can be configured in Netlify settings
4. Built-in spam protection is included

## 🚀 Deployment Workflow

### Development Workflow

```bash
# 1. Make changes locally
npm run develop

# 2. Test build
npm run build
npm run serve

# 3. Deploy to production
npm run build-and-deploy
```

### CI/CD Ready

The project is configured for easy CI/CD integration:

```yaml
# Example GitHub Actions workflow
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - name: Deploy to S3
        run: aws s3 sync ./public/ s3://www.synepho.com --delete
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## 🔄 Git Workflow & Best Practices

This project follows modern git best practices for clean, maintainable version control.

### Branch Management

```bash
# Main branches
main           # Production-ready code
develop        # Integration branch (optional for larger teams)

# Feature branches
feature/name   # New features
fix/name       # Bug fixes
docs/name      # Documentation updates
refactor/name  # Code refactoring
```

### Commit Message Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear, readable commit history:

```bash
# Format: type(scope): description
feat(auth): add user authentication system
fix(navbar): resolve mobile menu toggle issue
docs(readme): update deployment instructions
style(css): improve responsive design
refactor(api): optimize data fetching logic
test(components): add unit tests for contact form
chore(deps): update dependencies to latest versions
```

#### Commit Types

| Type       | Purpose                                  |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation only                       |
| `style`    | Code style changes (formatting, etc.)    |
| `refactor` | Code refactoring without feature changes |
| `test`     | Adding or updating tests                 |
| `chore`    | Maintenance tasks (deps, build, etc.)    |
| `perf`     | Performance improvements                 |
| `ci`       | CI/CD pipeline changes                   |

### Development Workflow

#### Setting Up for Development

```bash
# 1. Fork and clone
git clone https://github.com/your-username/gatsby-personal-site.git
cd gatsby-personal-site

# 2. Set up upstream remote
git remote add upstream https://github.com/jxman/gatsby-personal-site.git

# 3. Create environment file
cp .env.example .env.development

# 4. Install dependencies
npm install

# 5. Start development
npm run develop
```

#### Feature Development Process

```bash
# 1. Update main branch
git checkout main
git pull upstream main

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes and commit regularly
git add .
git commit -m "feat(component): add new component structure"

# 4. Keep branch updated (if long-running)
git checkout main
git pull upstream main
git checkout feature/your-feature-name
git rebase main

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Create Pull Request via GitHub UI
```

#### Pre-Commit Checklist

Before committing, ensure:

- [ ] Code follows project conventions
- [ ] All tests pass (`npm test` if available)
- [ ] Build succeeds (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] No console.log statements left
- [ ] Images optimized and properly sized
- [ ] Environment variables not hardcoded
- [ ] No sensitive data in commits

### Git Configuration

#### Recommended Git Settings

```bash
# Set up your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Improve git output
git config --global color.ui auto
git config --global core.autocrlf input  # Unix/Mac
git config --global core.autocrlf true   # Windows

# Useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

#### EditorConfig Integration

This project includes `.editorconfig` for consistent formatting across editors:

- **Line endings**: LF (Unix-style)
- **Indentation**: 2 spaces
- **Charset**: UTF-8
- **Trim trailing whitespace**: Yes
- **Insert final newline**: Yes

### Repository Structure

```
.
├── .editorconfig          # Editor configuration
├── .gitattributes         # Git file handling rules
├── .gitignore             # Files to ignore in git
├── .env.example           # Environment variables template
├── .env.development       # Development environment (committed)
├── gatsby-config.js       # Gatsby configuration
├── package.json           # Dependencies and scripts
├── README.md              # This file
├── src/                   # Source code
├── static/                # Static assets
└── public/                # Generated site (git ignored)
```

### Deployment Workflow

#### Manual Deployment

```bash
# 1. Ensure clean working directory
git status

# 2. Build for production
npm run build

# 3. Deploy to AWS S3
npm run deploy

# 4. Tag release (optional)
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

#### CI/CD Pipeline Ready

Environment variables for GitHub Actions:

```yaml
secrets:
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  AWS_REGION: us-east-1
  AWS_S3_BUCKET: www.synepho.com
```

### Issue and Pull Request Guidelines

#### Creating Issues

Use these templates:

**Bug Report:**

```markdown
## Bug Description

Brief description of the issue

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: [e.g., macOS 12.0]
- Browser: [e.g., Chrome 95]
- Node.js: [e.g., 18.x]
```

**Feature Request:**

```markdown
## Feature Description

Brief description of the proposed feature

## Use Case

Why is this feature needed?

## Proposed Solution

How should this feature work?

## Additional Context

Any other relevant information
```

#### Pull Request Process

1. **Reference Issues**: Link to relevant issues
2. **Clear Description**: Explain what changes were made
3. **Testing**: Include testing information
4. **Screenshots**: For UI changes, include before/after images
5. **Documentation**: Update README if needed

### Security Best Practices

- **Never commit secrets**: Use environment variables
- **Review dependencies**: Run `npm audit` regularly
- **Keep branches updated**: Regular rebasing prevents conflicts
- **Sign commits**: Consider GPG signing for important commits
- **Review .gitignore**: Ensure sensitive files are excluded

## 🤝 Contributing

Ready to contribute? Follow our git workflow above and these guidelines:

### Quick Start for Contributors

```bash
# 1. Fork repository on GitHub
# 2. Clone your fork
git clone https://github.com/your-username/gatsby-personal-site.git
cd gatsby-personal-site

# 3. Set up development environment
cp .env.example .env.development
npm install
npm run develop

# 4. Create feature branch
git checkout -b feature/amazing-feature

# 5. Make changes and test
# (Make your amazing changes here)
npm run build      # Test build
npm run serve      # Test production build

# 6. Commit using conventional commits
git add .
git commit -m "feat(component): add amazing new feature"

# 7. Push and create PR
git push origin feature/amazing-feature
# Create Pull Request via GitHub UI
```

### Code Quality Standards

- **React Best Practices**: Follow React patterns and hooks guidelines
- **Accessibility**: Ensure WCAG 2.1 AA compliance
- **Performance**: Optimize images and minimize bundle size
- **Security**: Follow OWASP guidelines, never commit secrets
- **Testing**: Write tests for new features (when test framework is added)
- **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ About

Built by **John Xanthopoulos** - IT Executive with over 20 years of experience in cloud technologies and team leadership.

- **Website**: [https://synepho.com](https://synepho.com)
- **LinkedIn**: [https://www.linkedin.com/in/johnx/](https://www.linkedin.com/in/johnx/)
- **GitHub**: [https://github.com/jxman](https://github.com/jxman)

---

⭐ **Star this repository if you found it helpful!**
