/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/events',
        permanent: false,
      },
      {
        source: '/case-studies/:path*',
        destination: '/events',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
