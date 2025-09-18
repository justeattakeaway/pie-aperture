import withLitSSR from '@lit-labs/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This makes nextjs build via SSG as this is currently the simplest way to deploy to AWS Amplify.
  output: 'export',
  images: {
    unoptimized: true
  }
}

export default withLitSSR()(nextConfig);
