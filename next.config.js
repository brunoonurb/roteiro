const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  output: 'standalone',
  trailingSlash: false,
  // Disable static optimization for pages that use authentication
  async generateStaticParams() {
    return []
  }
};

module.exports = withPWA(withNextIntl(nextConfig));