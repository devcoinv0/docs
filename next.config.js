/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  transpilePackages: ["@repo/ui", "@repo/theme", "@repo/icons"],
  experimental: {
    externalDir: true
  }
}

module.exports = nextConfig 