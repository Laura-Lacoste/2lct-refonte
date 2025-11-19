/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '2lct.fr',
          },
        ],
        destination: 'https://www.2lct.fr/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://static.axept.io;
              style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com;
              img-src 'self' data: blob: https://axeptio.imgix.net https://static.axept.io https://client.axept.io https://illustrations.popsy.co;
              font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com;
              connect-src 'self' https://client.axept.io https://static.axept.io https://api.axept.io;
              frame-src 'self' https://www.googletagmanager.com;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
