/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  sassOptions: {
    additionalData: "@use '/src/styles/index' as *;" // inject using scss variables and mixins into each file
  }
}
module.exports = nextConfig