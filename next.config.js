/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 's3-staging.flowliving.com', 'claremart.com']
  }
}

module.exports = nextConfig
