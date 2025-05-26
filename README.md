# John Xanthopoulos - Personal Portfolio Website

A modern, responsive personal portfolio website built with Gatsby and deployed to AWS S3 with CloudFront CDN using secure, direct AWS CLI deployment.

## 🌐 Live Site

**[https://synepho.com](https://synepho.com)**

> **SYNEPHO** is a phonetic rendition of the Greek word for Cloud, "σύννεφο," reflecting my deep connection with Cloud computing technologies.

## ✨ Features

- **Modern Stack**: Gatsby.js, React 18, Tailwind CSS, DaisyUI
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **SEO Optimized**: Comprehensive meta tags, sitemap, robots.txt
- **Performance**: Optimized images, lazy loading, CDN delivery
- **Analytics**: Environment-based Google Analytics integration
- **Security First**: Direct AWS CLI deployment, vulnerability-free dependencies
- **Production Ready**: AWS S3 + CloudFront with automated deployment

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Gatsby.js](https://www.gatsbyjs.com/) | Static site generator (v5.14.0) |
| [React](https://reactjs.org/) | UI framework (v18.3.1) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework (v3.4.17) |
| [DaisyUI](https://daisyui.com/) | Tailwind CSS components (v4.12.24) |
| [Headless UI](https://headlessui.dev/) | Accessible UI components |
| [AWS S3](https://aws.amazon.com/s3/) | Static website hosting |
| [AWS CloudFront](https://aws.amazon.com/cloudfront/) | Global CDN |
| [AWS CLI](https://aws.amazon.com/cli/) | Direct deployment tooling |

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.js       # Main layout wrapper
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Footer.js       # Footer component
│   │   └── Seo.js          # SEO meta tags component
│   ├── pages/              # Route pages
│   │   ├── index.js        # Homepage
│   │   ├── aboutme.js      # About page
│   │   ├── projects.js     # Projects showcase
│   │   ├── resume.js       # Resume page
│   │   └── contact.js      # Contact page
│   ├── content/            # JSON data files
│   │   └── projects.json   # Projects data
│   ├── markdown-pages/     # Markdown content
│   │   ├── about.md        # About page content
│   │   └── resume.md       # Resume content
│   ├── images/             # Source images
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
- AWS CLI configured with appropriate permissions
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-site-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your local values
   ```

4. **Start development server**
   ```bash
   npm run develop
   ```

5. **Open in browser**
   - Site: [http://localhost:8000](http://localhost:8000)
   - GraphQL: [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run develop` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Preview production build |
| `npm run clean` | Clean Gatsby cache |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to S3 using AWS CLI |
| `npm run build-and-deploy` | Build and deploy to S3 |
| `npm run package` | Create deployment zip file |

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

1. **Static images**: Place in `static/` for direct access (recommended for hero images)
2. **Processed images**: Place in `src/images/` and use `StaticImage` for optimization

### Styling

- **Tailwind classes**: Use for layout and styling
- **DaisyUI components**: Use for consistent design system
- **Custom CSS**: Add to `src/styles/`

## 🔒 Security

### Security-First Architecture

This project prioritizes security through:

- **Direct AWS CLI Deployment**: Eliminated vulnerable plugin dependencies
- **Environment Variable Management**: Secrets properly isolated
- **Minimal Dependencies**: Reduced attack surface
- **Modern Dependencies**: Up-to-date packages with security patches

### Security Improvements Made

**Removed gatsby-plugin-s3** due to:
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

### Deployment Verification

1. **Check live site**: [https://synepho.com](https://synepho.com)
2. **Verify SSL**: Certificate should be valid
3. **Test performance**: Use Google PageSpeed Insights
4. **Check analytics**: Confirm Google Analytics tracking (production only)
5. **Verify images**: All images should load without blur

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Image Strategy**: Static folder approach for reliable loading
- **CDN**: Global CloudFront distribution
- **Caching**: Optimized cache headers
- **Bundle Size**: Tree shaking and code splitting
- **Modern Stack**: Latest stable versions for optimal performance

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

Edit `src/content/projects.json` and add corresponding images to `static/` folder.

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
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to S3
        run: aws s3 sync ./public/ s3://www.synepho.com --delete
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Copy `.env.example` to `.env.development` and configure
4. Make your changes
5. Test locally (`npm run develop`)
6. Commit changes (`git commit -m 'Add amazing feature'`)
7. Push to branch (`git push origin feature/amazing-feature`)
8. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ About

Built by **John Xanthopoulos** - IT Executive with over 20 years of experience in cloud technologies and team leadership.

- **Website**: [https://synepho.com](https://synepho.com)
- **LinkedIn**: [https://www.linkedin.com/in/johnx/](https://www.linkedin.com/in/johnx/)
- **GitHub**: [https://github.com/jxman](https://github.com/jxman)

---

⭐ **Star this repository if you found it helpful!**
