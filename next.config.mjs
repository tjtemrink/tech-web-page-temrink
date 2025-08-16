/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in /out
  output: 'export',

  // Required when exporting (no Next/Image optimization server)
  images: { unoptimized: true },

  // Don’t fail CI on lint only (we lint locally)
  eslint: { ignoreDuringBuilds: true },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
