/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // runtime edge for cloudfare deployment
  experimental: {
    runtime: "edge",
  },
};

export default nextConfig;
