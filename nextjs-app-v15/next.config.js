const withLitSSR = require('@lit-labs/nextjs')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This makes nextjs build via SSG as this is currently the simplest way to deploy to AWS Amplify.
  output: 'export',
  images: {
    unoptimized: true
  },
  serverExternalPackages: [ 'lit', "lit-element", '@lit/reactive-element', 'lit-html', "@lit-labs/ssr" ],

}

module.exports = withLitSSR(nextConfig);
