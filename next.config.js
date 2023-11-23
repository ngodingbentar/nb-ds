/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL
console.log('API_URL', API_URL)

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
