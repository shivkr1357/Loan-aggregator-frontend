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
    title: `Best Personal Loan in ${cityName} - Compare Rates & Apply Online | LoanPilot`,
    description: `Compare and find the best personal loan rates in ${cityName}. Quick approval, competitive interest rates from top banks and NBFCs. Apply online now!`,
    keywords: [
      `personal loan ${cityName}`,
      `loan in ${cityName}`,
      `best loan rates ${cityName}`,
      `instant loan ${cityName}`,
      `online loan ${cityName}`,
      `personal loan ${cityName} interest rate`,
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
