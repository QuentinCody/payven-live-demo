import dotenv from 'dotenv';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Determine the environment and load the appropriate .env file
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
dotenv.config({ path: envFile });

// Configure the Webpack Bundle Analyzer conditionally based on the NODE_ENV
const withBundleAnalyzer = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: true,
      }
    ];
  },
  webpack(config, { isServer }) {
    // Apply the Bundle Analyzer only if ANALYZE environment variable is set to 'true'
    if (withBundleAnalyzer && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      );
    }

    return config;
  }
};

export default nextConfig;
