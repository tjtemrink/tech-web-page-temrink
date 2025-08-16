/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site in /out
  output: 'export',

  // Required for next export (no Image Optimization server)
  images: { unoptimized: true },

  // Helpful in CI (prevents lint from failing the build)
  eslint: { ignoreDuringBuilds: true },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
