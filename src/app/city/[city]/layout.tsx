import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const citySlug = params.city.toLowerCase();
  
  return genMeta({
    title: `Best Loans in ${cityName} - Compare Rates & Apply Online | LoanPilot`,
    description: `Compare and find the best loan rates in ${cityName}. Quick approval, competitive interest rates from top banks and NBFCs. Apply online now!`,
    keywords: [
      `loan ${cityName}`,
      `loans in ${cityName}`,
      `best loan rates ${cityName}`,
      `instant loan ${cityName}`,
      `online loan ${cityName}`,
      `loan ${cityName} interest rate`,
      `personal loan ${cityName}`,
      `business loan ${cityName}`,
    ],
    canonical: `https://loanpilot.in/city/${citySlug}`,
  });
}

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
