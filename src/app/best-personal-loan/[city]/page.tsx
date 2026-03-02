import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as baseMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

const CITIES: Record<string, string> = {
  delhi: 'Delhi',
  mumbai: 'Mumbai',
  bangalore: 'Bangalore',
  hyderabad: 'Hyderabad',
  chennai: 'Chennai',
  kolkata: 'Kolkata',
  pune: 'Pune',
  ahmedabad: 'Ahmedabad',
  jaipur: 'Jaipur',
  lucknow: 'Lucknow',
  surat: 'Surat',
  kanpur: 'Kanpur',
};

type Props = { params: { city: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = params.city;
  const citySlug = city.toLowerCase();
  const cityName = CITIES[citySlug] || city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ');
  const title = `Best Personal Loan in ${cityName} 2025 - Compare Rates | LoanPilot`;
  const description = `Compare best personal loan rates in ${cityName}. Quick approval, 10.5% onwards. Check eligibility in 30 seconds. Apply online - salaried & self-employed.`;
  const canonical = `${baseUrl}/best-personal-loan/${citySlug}`;
  return baseMetadata({
    title,
    description,
    canonical,
    keywords: [
      `personal loan ${cityName}`,
      `best personal loan ${cityName}`,
      `personal loan in ${cityName}`,
      `loan ${cityName}`,
      'instant personal loan',
      'compare personal loan',
    ],
  });
}

export default async function BestPersonalLoanCityPage({ params }: Props) {
  const city = params.city;
  const citySlug = city.toLowerCase();
  const cityName = CITIES[citySlug] || city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ');
  const compareUrl = `/loans?loanType=personal&city=${encodeURIComponent(cityName)}`;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Personal Loan in {cityName}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Compare top lenders in {cityName}. Rates from 10.5% p.a., approval in 24–48 hours. Check eligibility free.
            </p>
            <Link
              href={compareUrl}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Compare Rates in {cityName} →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Why get a personal loan in {cityName}?</h2>
            <p>
              Residents of {cityName} can compare personal loans from 20+ banks and NBFCs in one place. 
              Get the best interest rate, lowest processing fee, and fastest approval—all without visiting a branch.
            </p>
            <h3>Features you get</h3>
            <ul>
              <li>Interest rates from 10.5% p.a. onwards</li>
              <li>Loan amount from ₹50,000 to ₹50 Lakhs</li>
              <li>Tenure from 12 to 60 months</li>
              <li>Quick approval for salaried and self-employed</li>
              <li>Minimal documentation</li>
            </ul>
            <h3>How to apply</h3>
            <ol>
              <li>Check your eligibility in 30 seconds on our homepage</li>
              <li>Compare lenders and rates for {cityName}</li>
              <li>Choose a lender and apply online</li>
              <li>Get approval and disbursal in 24–48 hours</li>
            </ol>
            <div className="not-prose mt-8 text-center">
              <Link
                href={compareUrl}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
              >
                Compare Personal Loans in {cityName}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
