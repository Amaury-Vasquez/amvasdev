/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/*',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname:
          '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/*',
      },
    ],
  },
};

module.exports = nextConfig;
