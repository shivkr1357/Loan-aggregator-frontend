/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['logos-world.net', 'logos.hunter.io'],
    remotePatterns: [
      { protocol: 'https', hostname: 'logos-world.net', pathname: '/**' },
      { protocol: 'https', hostname: 'logos.hunter.io', pathname: '/**' },
    ],
  },
  serverComponentsExternalPackages: ['undici'],
  webpack: (config, { isServer }) => {
    // Ignore Node.js built-in modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      dns: false,
    };

    // Exclude undici from server-side bundle processing
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push('undici');
      } else {
        config.externals = [config.externals, 'undici'];
      }
    }

    return config;
  },
};

module.exports = nextConfig;
