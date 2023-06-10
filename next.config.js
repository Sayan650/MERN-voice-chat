/** @type {import('next').NextConfig} */
const nextConfig = {
    appDir: true,
    swcPlugins:[
        ["next-superjson-plugin", {}]
    ],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.example.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
