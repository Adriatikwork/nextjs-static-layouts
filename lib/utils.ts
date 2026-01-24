import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add basePath to public assets for GitHub Pages
export function assetPath(path: string): string {
  // Check if we're in the browser and on GitHub Pages
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    // If deployed on GitHub Pages, add the repo name as basePath
    if (hostname.includes('github.io')) {
      return `/nextjs-static-layouts${path}`
    }
  }
  // For SSR or local development, check NEXT_PUBLIC_BASE_PATH or default to empty
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
