import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/loans',
    '/apply',
    '/disclaimer',
    '/terms',
    '/privacy',
    '/contact',
    '/support',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Dynamic pages - you can fetch these from your API/database
  // For now, we'll include common bank slugs
  const bankSlugs = [
    'hdfc-bank-personal',
    'icici-bank-personal',
    'axis-bank-personal',
    'kotak-mahindra-bank-personal',
    'idfc-first-bank-personal',
    'bajaj-finserv-personal',
  ];

  const bankPages = bankSlugs.map((slug) => ({
    url: `${baseUrl}/bank/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // City pages - common cities
  const cities = [
    'delhi',
    'mumbai',
    'bangalore',
    'hyderabad',
    'chennai',
    'kolkata',
    'pune',
  ];

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...bankPages, ...cityPages];
}
