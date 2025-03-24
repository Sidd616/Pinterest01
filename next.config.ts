/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '', // Leave empty unless using a specific port
        pathname: '/**', // Allow all paths
      },
    ],
  },
}

module.exports = nextConfig