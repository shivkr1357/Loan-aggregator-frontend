'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';
import { generateStructuredData } from '@/lib/seo';

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

  useEffect(() => {
    logEvent('page_view', { page: `city-${city}` });
    analyticsApi.recordVisit(`city/${city}`, cityName).catch(console.error);

    // Add structured data for FinancialProduct
    const financialProductData = generateStructuredData('FinancialProduct', {
      name: `Personal Loan in ${cityName}`,
      description: `Compare and find the best personal loan rates in ${cityName}`,
      interestRate: '9.5%',
      loanTerm: '12-60 months',
      loanAmount: '50000',
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(financialProductData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [city, cityName]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Best Personal Loan in {cityName}
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Compare rates from top lenders in {cityName}. Quick approval,
              competitive rates, and flexible repayment options.
            </p>
            <Link
              href={`/apply?city=${city}`}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Personal Loans in {cityName}
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Looking for the best personal loan rates in {cityName}? You&apos;ve
                come to the right place. Our platform helps you compare personal
                loan offers from top banks and NBFCs, ensuring you get the best
                deal tailored to your needs.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Why Choose Personal Loans in {cityName}?
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Competitive interest rates starting from 9.5% per annum
                </li>
                <li>Quick approval process - get funds in 24-48 hours</li>
                <li>Flexible repayment tenure up to 5 years</li>
                <li>Minimal documentation required</li>
                <li>No collateral needed</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Top Lenders in {cityName}
              </h3>
              <p className="text-gray-700 mb-4">
                We partner with leading banks and financial institutions to
                provide you with the best loan options. Compare rates from HDFC
                Bank, ICICI Bank, Axis Bank, SBI, and more.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                How to Apply
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Fill out our simple online application form</li>
                <li>Compare loan offers from multiple lenders</li>
                <li>Choose the best offer that suits your needs</li>
                <li>Complete verification and get approved</li>
                <li>Receive funds directly in your bank account</li>
              </ol>
            </div>
            <div className="mt-8 text-center">
              <Link
                href={`/apply?city=${city}`}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
              >
                Apply for Personal Loan in {cityName}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
