'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';
import { EMICalculator } from '@/components/EMICalculator';
import { EligibilityChecker } from '@/components/EligibilityChecker';

export default function Home() {
  const { user } = useUserAuth();

  useEffect(() => {
    // Track page view
    logEvent('page_view', { page: 'home' });
    analyticsApi.recordVisit('home').catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-300 font-semibold">⚡ Loans from ₹2,000 to ₹50 Lakhs • Approval in 2 Minutes</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compare 20+ Lenders
              <br />
              <span className="text-primary-400">Find Your Best Loan Rate</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Compare rates from top banks and NBFCs. Quick approval, competitive rates (10.5% onwards),
              and flexible repayment options. <strong>No hidden charges.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                href="/loans"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
              >
                Compare Loans →
              </Link>
              <Link
                href="/apply"
                className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition text-lg"
              >
                Apply Now
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Free Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No Impact on Credit Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checker - Your #1 Hook */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <EligibilityChecker />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="font-semibold">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-semibold">Data Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">Verified Lenders</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">We Do Not Charge Users</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="font-semibold">RBI Registered Partners</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <Link href="/disclaimer" className="text-primary-600 hover:underline">
                Disclaimer
              </Link>
              {' • '}
              <Link href="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </Link>
              {' • '}
              LoanPilot is a loan aggregator platform. We are not a lender.
            </p>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EMICalculator />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose LoanPilot?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quick Approval</h3>
              <p className="text-gray-600">
                Get instant loan offers from multiple lenders in minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">
                Compare rates from top banks and NBFCs to find the best deal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-gray-600">
                Your data is encrypted and secure. We never share without
                consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                &ldquo;Found the best loan rate in minutes. The process was smooth
                and hassle-free.&rdquo;
              </p>
              <p className="font-semibold">- Rajesh K., Mumbai</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                &ldquo;Great platform to compare loans. Saved me a lot of time and
                money!&rdquo;
              </p>
              <p className="font-semibold">- Priya S., Delhi</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                &ldquo;Transparent process and excellent customer support. Highly
                recommended!&rdquo;
              </p>
              <p className="font-semibold">- Amit R., Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Loan?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Compare rates now and get approved in minutes
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Get Started
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                My Dashboard
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
