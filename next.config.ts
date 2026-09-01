/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line
  images: {
    unoptimized: true, // Recommended for static exports
  },
};

module.exports = nextConfig;

