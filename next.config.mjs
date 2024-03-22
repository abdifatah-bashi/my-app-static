/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-app-static',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
