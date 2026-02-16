import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: `Best Personal Loan in ${cityName} - Compare Rates`,
    description: `Compare and find the best personal loan rates in ${cityName}. Quick approval, competitive rates from top lenders.`,
  };
}

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
