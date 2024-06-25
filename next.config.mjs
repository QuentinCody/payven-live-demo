import dotenv from 'dotenv';

// Determine the environment and load the appropriate .env file
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
dotenv.config({ path: envFile });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
  redirects: async() => {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
