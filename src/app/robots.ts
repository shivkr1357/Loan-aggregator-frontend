import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Keep robots/sitemap reference aligned with non-www canonical origin.
  const baseUrl = 'https://loanpilot.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login', '/dashboard', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
