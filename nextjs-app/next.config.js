const withLitSSR = require('@lit-labs/nextjs')();


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This makes nextjs build via SSG as this is currently the simplist way to deploy to AWS Amplify.
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = withBundleAnalyzer(withLitSSR(nextConfig));
