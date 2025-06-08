# AWS Configuration Documentation

## CloudFront Distribution Setup

### Distribution Details

- **Distribution ID**: E2UW9JLSX34HRT
- **Domain**: d1kxqxxd0yzw7y.cloudfront.net
- **Origin**: www.synepho.com-secondary.s3.us-west-1.amazonaws.com

### Response Headers Policy Configuration

**Policy ID**: 0ce1417a-3506-4453-a228-b67b6a8b991f
**Policy Name**: security-headers-synepho-com

#### Content Security Policy (CSP)

```
default-src 'self';
img-src 'self' data: blob:;
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline' data:;
font-src 'self' data:;
connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
frame-src 'self';
```

**CSP Explanation:**

- `default-src 'self'` - Only allow resources from same origin by default
- `img-src 'self' data: blob:` - Allow images from same origin, data URLs, and blob URLs (needed for Gatsby image processing)
- `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com` - Allow same origin scripts, inline scripts, eval(), and Google Tag Manager
- `style-src 'self' 'unsafe-inline' data:` - Allow same origin styles, inline styles, and data URLs
- `font-src 'self' data:` - Allow fonts from same origin and data URLs (for embedded fonts)
- `connect-src 'self' https://www.google-analytics.com https://analytics.google.com` - Allow connections to same origin and Google Analytics
- `frame-src 'self'` - Only allow frames from same origin

#### Other Security Headers

- **X-XSS-Protection**: 1; mode=block
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Strict-Transport-Security**: max-age=31536000; includeSubDomains; preload
- **Referrer-Policy**: strict-origin-when-cross-origin

### S3 Bucket Configuration

**Primary Bucket**: www.synepho.com
**Region**: us-east-1 (inferred from deployment script)

#### Deployment Configuration

The site is deployed using AWS CLI with the following settings:

```bash
# Build and deploy command
npm run build-and-deploy

# Deployment details
aws s3 sync ./public/ s3://www.synepho.com --delete --cache-control max-age=31536000 --exclude='*.html'
aws s3 sync ./public/ s3://www.synepho.com --delete --cache-control max-age=0 --include='*.html'
```

**Cache Control Strategy:**

- Static assets (JS, CSS, images): 1 year cache (`max-age=31536000`)
- HTML files: No cache (`max-age=0`) for immediate updates

## Recent Changes (June 6, 2025)

### Issue: CSP Blocking Gatsby Resources

**Problem**: Restrictive CSP headers were blocking Gatsby's inline scripts, Google Analytics, and embedded fonts/images.

**Solution**: Updated CloudFront response headers policy to allow necessary Gatsby resources while maintaining security.

### Commands Used for Updates

```bash
# Get current policy
aws cloudfront get-response-headers-policy --id 0ce1417a-3506-4453-a228-b67b6a8b991f

# Update policy
aws cloudfront update-response-headers-policy --id 0ce1417a-3506-4453-a228-b67b6a8b991f --response-headers-policy-config file:///tmp/headers-policy.json --if-match [ETAG]

# Invalidate cache
aws cloudfront create-invalidation --distribution-id E2UW9JLSX34HRT --paths "/*"
```

### Gatsby Image Optimization Settings

**Updated configurations for S3/CloudFront compatibility:**

#### gatsby-config.js

```javascript
{
  resolve: `gatsby-plugin-sharp`,
  options: {
    defaults: {
      formats: [`auto`, `webp`, `avif`],
      placeholder: `none`,
      quality: 95,
      breakpoints: [750, 1080, 1366, 1920],
      backgroundColor: `transparent`,
    },
  },
}
```

#### StaticImage Component

```javascript
<StaticImage
  src="../images/me2.jpeg"
  alt="Professional headshot"
  placeholder="none"
  quality={95}
  formats={["auto", "webp", "avif"]}
  width={384}
  height={512}
/>
```

## Maintenance Notes

1. **Cache Invalidation**: Required after CSP policy changes to apply new headers immediately
2. **Image Optimization**: Gatsby generates multiple formats (AVIF, WebP, JPEG) automatically
3. **Security Headers**: Regularly review CSP policy for necessary updates while maintaining security
4. **Deployment**: Two-stage S3 sync ensures proper cache headers for different file types

## Troubleshooting

### Common Issues

1. **Blank images**: Usually CSP blocking or incorrect image paths
2. **Console errors**: Check CSP policy allows required resources
3. **Slow loading**: Verify cache headers are properly set

### Useful Commands

```bash
# Check distribution status
aws cloudfront get-distribution --id E2UW9JLSX34HRT

# List all distributions
aws cloudfront list-distributions

# Check invalidation status
aws cloudfront get-invalidation --distribution-id E2UW9JLSX34HRT --id [INVALIDATION_ID]
```
