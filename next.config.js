/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://gold888rtp.top/:path*', // Proxying all requests
      },
    ];
  },
};

module.exports = nextConfig;
