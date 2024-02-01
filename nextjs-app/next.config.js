const withLitSSR = require('@lit-labs/nextjs')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    //
    // We enable this only in Amplify as it seems to add ~5mins to build time. There shouldn't be as risk with doing this, as we'll still capture issues for any builds executed as part of GitHub Actions (such as the other OS / Node builds. )
    // !! WARN !!
    ignoreBuildErrors: process.env.AMPLIFY_MONOREPO_APP_ROOT ? true : false,
  }
}

module.exports = withLitSSR(nextConfig);
