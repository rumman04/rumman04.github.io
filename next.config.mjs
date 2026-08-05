import path from 'path';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  },
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve('./');
    return config;
  }
};

export default nextConfig;
