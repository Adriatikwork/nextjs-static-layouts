/** @type {import('next').NextConfig} */

// ============================================================
// DEPLOYMENT CONFIGURATION
// ============================================================
// Change this to false when connecting a custom domain
const USE_BASE_PATH = true
// ============================================================

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'nextjs-static-layouts'

// Determine if basePath is needed (only for GitHub Pages without custom domain)
const needsBasePath = isProd && USE_BASE_PATH

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  
  // GitHub Pages requires basePath when deployed as project site
  // Custom domain: set USE_BASE_PATH = false above
  basePath: needsBasePath ? `/${repoName}` : '',
  assetPrefix: needsBasePath ? `/${repoName}/` : '',
  
  env: {
    NEXT_PUBLIC_BASE_PATH: needsBasePath ? `/${repoName}` : '',
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL || 'https://dottoressairenebeconi.it',
  },
}

export default nextConfig
