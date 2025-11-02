# Deployment Scripts

## Overview

This directory contains automated deployment scripts for the Gatsby personal portfolio site.

## deploy.sh - Intelligent Deployment Script

A comprehensive deployment script that validates changes, builds the site, and deploys to AWS S3/CloudFront with intelligent caching strategies.

### Features

✅ **Pre-Deployment Validation**
- AWS credentials verification
- Git status checks (uncommitted changes warning)
- S3 bucket validation
- Change preview (shows what will be added/updated/deleted)

✅ **Intelligent Build & Deploy**
- Gatsby build with statistics
- Optimized S3 sync with different cache strategies:
  - HTML files: No cache (immediate updates)
  - Static assets: 1-year cache (CDN optimization)
  - Page data: No cache (dynamic content)
- CloudFront cache invalidation
- Post-deployment verification

✅ **Safety Features**
- Dry-run mode (preview without deploying)
- Interactive confirmation prompts
- Colored output for better readability
- Comprehensive error handling

### Usage

#### Basic Deployment (Recommended)

```bash
npm run deploy
```

This will:
1. Check AWS credentials
2. Check git status
3. Build the site
4. Preview changes
5. Ask for confirmation
6. Deploy to S3
7. Invalidate CloudFront cache
8. Verify deployment

#### Quick Check (Dry Run)

```bash
npm run deploy:check
```

Preview what would be deployed without actually deploying. Perfect for:
- Verifying build output
- Checking what files changed
- Testing the deployment workflow

#### Quick Deploy (Skip Validation)

```bash
npm run deploy:quick
```

Skip AWS credentials and git status checks. Use when:
- You've already verified credentials
- Deploying multiple times in a row
- Running in CI/CD environment

### Command Line Options

```bash
./scripts/deploy.sh [OPTIONS]

Options:
  --skip-build    Skip the build step (use existing public/ directory)
  --skip-checks   Skip pre-deployment validation checks
  --dry-run       Show what would be deployed without actually deploying
  --help          Show help message
```

### Examples

**Check what will be deployed:**
```bash
npm run deploy:check
```

**Deploy with existing build:**
```bash
./scripts/deploy.sh --skip-build
```

**Deploy without validation checks:**
```bash
npm run deploy:quick
```

**Dry run with existing build:**
```bash
./scripts/deploy.sh --skip-build --dry-run
```

### Output Example

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🚀 Gatsby Site Deployment
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Checking AWS Credentials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ AWS credentials valid
ℹ Account: 123456789012
ℹ User: deploy-user

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Checking Git Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Working directory clean
ℹ Current branch: main
ℹ Recent commits:
  fadab33 docs: comprehensive security report update
  4859a9f revert: remove glob override
  db7ffd8 fix: resolve inflight resource leak

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Analyzing Changes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ℹ Comparing local build with S3 bucket...
ℹ Files to add: 3
ℹ Files to update: 12
ℹ Files to delete: 0

New files:
  blog/new-post/index.html
  static/new-image.png
  page-data/blog/new-post/page-data.json

Proceed with deployment to https://synepho.com? (y/N):
```

### Configuration

The script uses the following configuration (can be overridden with environment variables):

- **S3_BUCKET**: `www.synepho.com`
- **CLOUDFRONT_DISTRIBUTION_ID**: From env var or default `E2UW9JLSX34HRT`
- **SITE_URL**: `https://synepho.com`

### Cache Strategy

The deployment script uses an optimized caching strategy:

1. **Static Assets** (JS, CSS, Images): `max-age=31536000` (1 year)
   - These files have content hashes in filenames
   - Safe to cache indefinitely
   - Improves CDN performance

2. **HTML Files**: `max-age=0, no-cache`
   - Always fetch fresh from origin
   - Ensures users get latest content
   - Routes and page updates are immediate

3. **Page Data**: `max-age=0, no-cache`
   - GraphQL query results
   - Ensures dynamic content is fresh

### Troubleshooting

**AWS credentials error:**
```bash
aws configure
# Enter your AWS Access Key ID and Secret Access Key
```

**S3 bucket not found:**
- Verify bucket name in script matches your S3 bucket
- Check AWS region configuration

**CloudFront invalidation fails:**
- Verify CLOUDFRONT_DISTRIBUTION_ID environment variable
- Check IAM permissions for CloudFront invalidation

**Build fails:**
```bash
npm run clean
npm run build
```

### Security Best Practices

✅ Never commit AWS credentials to git
✅ Use IAM roles with least privilege
✅ Enable CloudFront HTTPS only
✅ Keep CloudFront distribution ID in environment variable
✅ Review changes before confirming deployment

### CI/CD Integration

For GitHub Actions or other CI/CD:

```yaml
- name: Deploy to Production
  run: |
    export CLOUDFRONT_DISTRIBUTION_ID=${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
    npm run deploy:quick  # Skip interactive checks
```

### Maintenance

The script is self-contained and requires no external dependencies beyond:
- AWS CLI (configured)
- Node.js/npm (for build)
- Git (for status checks)
- curl (for post-deployment verification)

---

**Created**: January 2025
**Last Updated**: January 2025
**Maintained by**: John Xanthopoulos
