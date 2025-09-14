/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // local dev
        'organic-system-4v7vpwwv69w277xr-3000.app.github.dev', // your Codespaces URL
      ],
    },
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
