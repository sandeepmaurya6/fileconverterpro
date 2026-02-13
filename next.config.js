/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    maxSize: 50 * 1024 * 1024,
  },
};

module.exports = nextConfig;
