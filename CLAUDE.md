# CLAUDE.md - Project Development Guide

This file contains important information for Claude Code when working on this project.

## Project Overview

**John Xanthopoulos Personal Portfolio Website**
- **Tech Stack**: Gatsby.js, React 18, Tailwind CSS, DaisyUI
- **Deployment**: AWS S3 + CloudFront (direct AWS CLI deployment)
- **Repository**: https://github.com/jxman/personal-site-new
- **Live Site**: https://synepho.com

## Key Development Commands

### Essential Commands
```bash
# Development
npm run develop              # Start development server (preferred)
npm run dev                 # Alias for develop

# Build & Deploy
npm run build               # Production build
npm run serve               # Preview production build locally
npm run clean               # Clean Gatsby cache

# Deployment (Production)
npm run deploy:prod         # Deploy to S3 with optimized caching
npm run build-and-deploy    # Build + deploy in one command
npm run deploy:full         # Build + deploy + CloudFront invalidation

# Code Quality
npm run format              # Format code with Prettier
npm run format:check        # Check formatting without changes

# Linting Commands
# Note: No eslint configured - use IDE/editor linting or add if needed
```

### Image Conversion Commands
**IMPORTANT**: Always use `sips` for image conversions (macOS native):
```bash
# Convert to PNG
sips -s format png input.svg --out output.png

# Resize images
sips -z 180 180 input.png --out output.png

# Create favicon sizes
sips -z 16 16 favicon-large.png --out favicon-16x16.png
sips -z 32 32 favicon-large.png --out favicon-32.png
```

## Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.js       # Main layout wrapper
│   │   ├── Navbar.js       # Navigation with JX logo
│   │   ├── Footer.js       # Site footer
│   │   ├── Seo.js          # SEO meta tags
│   │   ├── AnimatedSection.js # Intersection observer animations
│   │   ├── ScrollToTop.js  # Scroll to top button
│   │   └── ClientOnly.js   # SSR-safe client rendering
│   ├── pages/              # Gatsby pages (auto-routing)
│   │   ├── index.js        # Homepage
│   │   ├── aboutme.js      # About page
│   │   ├── projects.js     # Projects showcase
│   │   ├── awshealth.js    # AWS Health project detail
│   │   ├── awssite.js      # AWS Multi-region site detail
│   │   ├── awsrss.js       # AWS RSS checker detail
│   │   ├── resume.js       # Resume page
│   │   ├── contact.js      # Contact form
│   │   ├── lawn.js         # Lawn project showcase
│   │   └── blog/           # Blog posts
│   ├── content/            # JSON data
│   │   └── projects.json   # Projects configuration
│   ├── markdown-pages/     # Markdown content
│   │   ├── about.md
│   │   └── resume.md
│   ├── images/             # Source images (Gatsby processed)
│   └── styles/             # Global CSS
├── static/                 # Static assets (copied to public)
│   ├── favicon.svg         # Vector favicon with JX logo
│   ├── favicon-16x16.png   # PNG favicon
│   ├── apple-touch-icon.png # iOS icon
│   ├── favicon.ico         # Legacy favicon
│   └── manifest.json       # PWA manifest
```

## Dependencies & Technologies

### Core Framework
- **Gatsby**: 5.14.0 (Static site generator)
- **React**: 18.3.1 (UI framework)
- **React DOM**: 18.3.1

### Styling
- **Tailwind CSS**: 3.4.16 (Utility-first CSS)
- **DaisyUI**: 4.12.20 (Tailwind component library)
- **PostCSS**: 8.4.49 (CSS processing)
- **@tailwindcss/typography**: 0.5.15

### Gatsby Plugins
- **gatsby-plugin-image**: 3.14.0 (Image optimization)
- **gatsby-plugin-sharp**: 5.14.0 (Image processing)
- **gatsby-transformer-sharp**: 5.14.0
- **gatsby-source-filesystem**: 5.14.0 (File system sourcing)
- **gatsby-transformer-json**: 5.14.0 (JSON processing)
- **gatsby-transformer-remark**: 6.14.0 (Markdown processing)
- **gatsby-plugin-react-helmet**: 6.14.0 (Head management)
- **gatsby-plugin-postcss**: 6.14.0 (PostCSS integration)
- **gatsby-plugin-manifest**: 5.14.0 (PWA manifest)
- **gatsby-plugin-sitemap**: 6.14.0 (XML sitemap)
- **gatsby-plugin-robots-txt**: 1.8.0 (robots.txt)
- **gatsby-plugin-google-gtag**: 5.14.0 (Analytics)

### UI Components
- **@headlessui/react**: 2.2.0 (Accessible components)
- **react-helmet**: 6.1.0 (Head management)
- **react-icons**: 5.4.0 (Icon library)

### Utilities
- **axios**: 1.7.9 (HTTP client)
- **dotenv**: 16.3.1 (Environment variables)
- **prettier**: 3.4.2 (Code formatting)

## Configuration Files

### Environment Variables
- **`.env.development`**: Development environment (committed, safe values)
- **`.env.production`**: Production environment (not committed, real values)
- **`.env.example`**: Template for environment setup

### Key Environment Variables
```env
GATSBY_SITE_URL=https://synepho.com
GATSBY_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
GATSBY_ENABLE_ANALYTICS=true
AWS_REGION=us-east-1
AWS_S3_BUCKET=www.synepho.com
CLOUDFRONT_DISTRIBUTION_ID=E2UW9JLSX34HRT
```

### Configuration Files
- **gatsby-config.js**: Main Gatsby configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration
- **package.json**: Dependencies and scripts

## Common Development Tasks

### Adding New Projects
1. Update `src/content/projects.json`:
```json
{
  "id": 8,
  "name": "Project Name",
  "image": "../images/project-screenshot.png",
  "text": "Project description...",
  "demo_link": "https://demo.example.com",
  "github_link": "https://github.com/username/repo"
}
```

2. Add project image to `src/images/` for optimization
3. Create detailed project page in `src/pages/` if needed

### Adding Images
- **Static images**: Place in `static/` for direct access (SVGs, favicons)
- **Processed images**: Place in `src/images/` for Gatsby optimization
- **Use StaticImage** for optimized loading in components

### Creating New Pages
1. Create file in `src/pages/` (e.g., `newpage.js`)
2. Export React component as default
3. Page automatically available at `/newpage/`

### Updating Navigation
Edit `src/components/Navbar.js` to add new navigation links.

## Important Notes

### Image Handling
- **SVG Support**: Both `src/images/` (GraphQL) and `static/` (direct access)
- **Optimization**: PNG/JPG in `src/images/` get full Gatsby optimization
- **Favicons**: Use `sips` for any image conversions (macOS)

### Deployment
- **Security First**: Uses direct AWS CLI (no vulnerable plugins)
- **Cache Optimization**: Different cache headers for HTML vs assets
- **CloudFront**: Global CDN with custom cache behaviors

### React Patterns
- **SSR Safety**: Use `ClientOnly` component for browser-only code
- **Hydration**: Avoid useState in components that render differently on server/client
- **Animation**: Use `AnimatedSection` for scroll-triggered animations

### Code Quality
- **Prettier**: Automatic formatting on save
- **React Patterns**: Follow hooks best practices
- **Accessibility**: Ensure ARIA labels and semantic HTML
- **Performance**: Optimize images and minimize bundle size

## Troubleshooting

### Common Issues
1. **Build Failures**: Run `npm run clean` then `npm run build`
2. **Hydration Errors**: Use `ClientOnly` for browser-only components
3. **Image Issues**: Ensure correct path and file exists
4. **Environment Variables**: Restart development server after changes

### Performance Tips
- Use `StaticImage` for hero images and large visuals
- Implement lazy loading for below-fold content
- Optimize image formats (WebP/AVIF automatic)
- Minimize JavaScript bundle size

### Security Best Practices
- Never commit AWS credentials or API keys
- Use environment variables for sensitive data
- Keep dependencies updated (`npm audit`)
- Validate all external inputs

## Recent Important Changes

### Project Cleanup (Latest - June 2025)
- **Removed 15+ unused files** (~1.1-2.3MB saved):
  - Unused images: `me3.jpeg`, `personal-siteold.png`, `aws-site.png`, `aws-health.png`, `lawn-smart-app.jpg`
  - Company logos: `exin.jpeg`, `intrado.jpeg`, `microsoft.jpeg`, `nasdaq.jpeg`, `notified.jpeg`, `putnam.jpeg`, `thomsonreuters.jpeg`, `umass.jpeg`
  - Duplicate files: `static/me2.jpeg` (kept `src/images/me2.jpeg`)
- **Dependencies optimized**: Removed unused `axios`, added missing `prop-types`
- **Cleaner project structure** with improved maintainability

### Favicon Updates
- Created new JX logo favicon matching site header
- Uses gradient background (blue to purple)
- Generated all required formats with `sips`
- Files: favicon.svg, favicon-16x16.png, apple-touch-icon.png, favicon.ico

### Architecture Diagram Updates
- Updated AWS multi-region project to use new architecture diagram
- Copied `/Users/johxan/Documents/my-projects/terraform/aws-hosting-synepho/architecture-diagram.svg`
- Made project images clickable linking to demo pages

### React Hydration Fixes
- Added `ClientOnly` component for SSR safety
- Fixed `AnimatedSection` useEffect dependencies
- Removed unused imports to resolve linting warnings

## AWS Deployment Details

### S3 Bucket
- **Name**: www.synepho.com
- **Region**: us-east-1
- **Purpose**: Static website hosting

### CloudFront Distribution
- **Domain**: synepho.com, www.synepho.com
- **SSL**: ACM certificate
- **Cache**: Optimized for static assets

### Deployment Commands
```bash
# Production deployment with optimized caching
aws s3 sync ./public/ s3://www.synepho.com --delete \
  --cache-control max-age=31536000 --exclude='*.html'
  
aws s3 sync ./public/ s3://www.synepho.com \
  --cache-control max-age=0 --include='*.html'

# CloudFront invalidation
aws cloudfront create-invalidation \
  --distribution-id E2UW9JLSX34HRT --paths '/*'
```

## Contact & Support

- **Website**: https://synepho.com
- **GitHub**: https://github.com/jxman/personal-site-new
- **Issues**: Use GitHub Issues for bug reports and feature requests

---

*This file should be updated whenever significant changes are made to the project structure, dependencies, or development workflow.*