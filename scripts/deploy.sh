#!/bin/bash

# Gatsby Personal Site - Intelligent Deployment Script
# This script validates changes, builds, and deploys to AWS S3/CloudFront

set -e  # Exit on error

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Change to project root
cd "${PROJECT_ROOT}"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
S3_BUCKET="www.synepho.com"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E2UW9JLSX34HRT}"
SITE_URL="https://synepho.com"
PUBLIC_DIR="${PROJECT_ROOT}/public"

# Function to print colored messages
print_info() {
    echo -e "${BLUE}ℹ ${1}${NC}"
}

print_success() {
    echo -e "${GREEN}✅ ${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  ${1}${NC}"
}

print_error() {
    echo -e "${RED}❌ ${1}${NC}"
}

print_header() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  ${1}${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Function to check AWS credentials
check_aws_credentials() {
    print_header "Checking AWS Credentials"

    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS credentials not configured or invalid"
        print_info "Please configure AWS credentials with: aws configure"
        exit 1
    fi

    local aws_account=$(aws sts get-caller-identity --query Account --output text)
    local aws_user=$(aws sts get-caller-identity --query Arn --output text | cut -d'/' -f2)

    print_success "AWS credentials valid"
    print_info "Account: ${aws_account}"
    print_info "User: ${aws_user}"
}

# Function to check for uncommitted changes
check_git_status() {
    print_header "Checking Git Status"

    if [[ -n $(git status --porcelain) ]]; then
        print_warning "You have uncommitted changes:"
        git status --short
        echo ""
        read -p "Continue with deployment? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Deployment cancelled"
            exit 0
        fi
    else
        print_success "Working directory clean"
    fi

    # Show current branch and recent commits
    local branch=$(git branch --show-current)
    print_info "Current branch: ${branch}"
    print_info "Recent commits:"
    git log --oneline -3 | while read line; do
        echo "  ${line}"
    done
}

# Function to validate S3 bucket exists
validate_s3_bucket() {
    print_header "Validating S3 Bucket"

    if aws s3 ls "s3://${S3_BUCKET}" &> /dev/null; then
        print_success "S3 bucket exists: ${S3_BUCKET}"
    else
        print_error "S3 bucket not found: ${S3_BUCKET}"
        exit 1
    fi
}

# Function to show what will change
preview_changes() {
    print_header "Analyzing Changes"

    if [[ ! -d "${PUBLIC_DIR}" ]]; then
        print_warning "No existing build found - full deployment required"
        return
    fi

    print_info "Comparing local build with S3 bucket..."

    # Create temporary file list
    local temp_local=$(mktemp)
    local temp_s3=$(mktemp)

    # Get local files
    cd "${PUBLIC_DIR}"
    find . -type f | sed 's|^\./||' | sort > "$temp_local"
    cd "${PROJECT_ROOT}"

    # Get S3 files
    aws s3 ls "s3://${S3_BUCKET}" --recursive | awk '{print $4}' | sort > "$temp_s3"

    # Compare
    local files_to_add=$(comm -23 "$temp_local" "$temp_s3" | wc -l | tr -d ' ')
    local files_to_delete=$(comm -13 "$temp_local" "$temp_s3" | wc -l | tr -d ' ')
    local files_to_update=$(comm -12 "$temp_local" "$temp_s3" | wc -l | tr -d ' ')

    print_info "Files to add: ${files_to_add}"
    print_info "Files to update: ${files_to_update}"
    print_info "Files to delete: ${files_to_delete}"

    if [[ $files_to_add -gt 0 ]]; then
        echo -e "\n${YELLOW}New files:${NC}"
        comm -23 "$temp_local" "$temp_s3" | head -10
        if [[ $files_to_add -gt 10 ]]; then
            echo "  ... and $((files_to_add - 10)) more"
        fi
    fi

    if [[ $files_to_delete -gt 0 ]]; then
        echo -e "\n${YELLOW}Files to be deleted:${NC}"
        comm -13 "$temp_local" "$temp_s3" | head -10
        if [[ $files_to_delete -gt 10 ]]; then
            echo "  ... and $((files_to_delete - 10)) more"
        fi
    fi

    # Cleanup
    rm "$temp_local" "$temp_s3"

    echo ""
}

# Function to build the site
build_site() {
    print_header "Building Site"

    print_info "Running Gatsby build..."

    if npm run build; then
        print_success "Build completed successfully"

        # Show build statistics
        if [[ -d "${PUBLIC_DIR}" ]]; then
            local total_files=$(find "${PUBLIC_DIR}" -type f | wc -l | tr -d ' ')
            local total_size=$(du -sh "${PUBLIC_DIR}" | cut -f1)
            print_info "Total files: ${total_files}"
            print_info "Total size: ${total_size}"
        fi
    else
        print_error "Build failed"
        exit 1
    fi
}

# Function to deploy to S3
deploy_to_s3() {
    print_header "Deploying to S3"

    # Verify public directory exists
    if [[ ! -d "${PUBLIC_DIR}" ]]; then
        print_error "Build directory not found: ${PUBLIC_DIR}"
        print_info "Run 'npm run build' first or remove --skip-build flag"
        exit 1
    fi

    # This matches the working deploy:prod command from package.json
    print_info "Syncing static assets with 1-year cache (excludes HTML)..."
    aws s3 sync "${PUBLIC_DIR}/" "s3://${S3_BUCKET}" \
        --delete \
        --cache-control "max-age=31536000" \
        --exclude="*.html"

    print_info "Syncing HTML files with no cache..."
    aws s3 sync "${PUBLIC_DIR}/" "s3://${S3_BUCKET}" \
        --cache-control "max-age=0" \
        --include="*.html"

    print_success "S3 sync completed"
}

# Function to invalidate CloudFront cache
invalidate_cloudfront() {
    print_header "Invalidating CloudFront Cache"

    print_info "Creating invalidation for distribution: ${CLOUDFRONT_DISTRIBUTION_ID}"

    local invalidation_output=$(aws cloudfront create-invalidation \
        --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
        --paths "/*" \
        --output json)

    local invalidation_id=$(echo "$invalidation_output" | grep -o '"Id": "[^"]*"' | cut -d'"' -f4)

    if [[ -n "$invalidation_id" ]]; then
        print_success "CloudFront invalidation created: ${invalidation_id}"
        print_info "Status: https://console.aws.amazon.com/cloudfront/home#distribution-settings:${CLOUDFRONT_DISTRIBUTION_ID}"
    else
        print_error "Failed to create CloudFront invalidation"
        exit 1
    fi
}

# Function to run post-deployment checks
post_deployment_checks() {
    print_header "Post-Deployment Verification"

    print_info "Waiting 5 seconds for propagation..."
    sleep 5

    print_info "Checking site availability..."

    if curl -s -o /dev/null -w "%{http_code}" "${SITE_URL}" | grep -q "200"; then
        print_success "Site is accessible: ${SITE_URL}"
    else
        print_warning "Site may not be accessible yet (CDN propagation in progress)"
    fi

    print_info "CloudFront cache invalidation typically takes 10-15 minutes"
}

# Function to show deployment summary
show_summary() {
    print_header "Deployment Summary"

    local deployment_time=$(date '+%Y-%m-%d %H:%M:%S')
    local git_commit=$(git rev-parse --short HEAD)
    local git_branch=$(git branch --show-current)

    echo -e "${GREEN}Deployment completed successfully!${NC}\n"
    echo "Time: ${deployment_time}"
    echo "Commit: ${git_commit}"
    echo "Branch: ${git_branch}"
    echo "Bucket: s3://${S3_BUCKET}"
    echo "Site: ${SITE_URL}"
    echo ""
    print_info "Next steps:"
    echo "  - Verify site content at: ${SITE_URL}"
    echo "  - Check CloudFront invalidation status in AWS Console"
    echo "  - Monitor for any issues"
}

# Main deployment workflow
main() {
    local skip_build=false
    local skip_checks=false
    local dry_run=false

    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --skip-build)
                skip_build=true
                shift
                ;;
            --skip-checks)
                skip_checks=true
                shift
                ;;
            --dry-run)
                dry_run=true
                shift
                ;;
            --help)
                echo "Usage: $0 [OPTIONS]"
                echo ""
                echo "Options:"
                echo "  --skip-build    Skip the build step (use existing public/ directory)"
                echo "  --skip-checks   Skip pre-deployment validation checks"
                echo "  --dry-run       Show what would be deployed without actually deploying"
                echo "  --help          Show this help message"
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                echo "Use --help for usage information"
                exit 1
                ;;
        esac
    done

    print_header "🚀 Gatsby Site Deployment"

    # Pre-deployment checks
    if [[ "$skip_checks" == false ]]; then
        check_aws_credentials
        check_git_status
        validate_s3_bucket
    fi

    # Build
    if [[ "$skip_build" == false ]]; then
        build_site
    else
        print_warning "Skipping build - using existing public/ directory"
    fi

    # Preview changes
    preview_changes

    if [[ "$dry_run" == true ]]; then
        print_warning "DRY RUN MODE - No changes will be deployed"
        exit 0
    fi

    # Confirm deployment
    echo ""
    read -p "$(echo -e ${YELLOW}Proceed with deployment to ${SITE_URL}? \(y/N\): ${NC})" -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Deployment cancelled"
        exit 0
    fi

    # Deploy
    deploy_to_s3
    invalidate_cloudfront
    post_deployment_checks
    show_summary
}

# Run main function
main "$@"
