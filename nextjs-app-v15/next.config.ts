// eslint-disable-next-line @typescript-eslint/no-require-imports
const withLitSSR = require('@lit-labs/nextjs')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This makes nextjs build via SSG as this is currently the simplest way to deploy to AWS Amplify.
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = withLitSSR(nextConfig);