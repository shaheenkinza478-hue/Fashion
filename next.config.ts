// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // App Router is automatically detected with src/app structure
  // No special config needed for src directory in Next.js 13+
  
  // Optional: Add any other config you need
  images: {
    domains: [], // Add your image domains here
  },
  
  // If you have specific output settings
  // output: 'standalone', // For Docker deployments
};

export default nextConfig;