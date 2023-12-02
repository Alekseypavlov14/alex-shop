/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  sassOptions: {
    additionalData: "@use '/src/shared/styles/base/index' as *;" // inject using scss variables and mixins into each file
  }
}
module.exports = nextConfig