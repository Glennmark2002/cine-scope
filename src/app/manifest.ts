import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest{
  return {
    name: 'Cine Scope',
    short_name: 'CineScope',
    description: 'Explore and discover movies effortlessly.',
    start_url: '/',
    display: 'standalone',
    background_color: '3D3D3D', 
    theme_color: '3D3D3D',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}