import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as baseMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

export const metadata: Metadata = baseMetadata({
  title: '₹5000 Loan Urgently - Small Instant Loan Online 2025 | LoanPilot',
  description: 'Need ₹5000 to ₹50,000 urgently? Compare small instant personal loans from top lenders. Quick approval, same-day disbursal. Apply online in 2 minutes.',
  canonical: `${baseUrl}/small-instant-loan`,
  keywords: [
    '5000 loan urgently',
    'small personal loan',
    'instant loan 5000',
    'urgent loan online',
    'small amount loan',
    'instant small loan India',
  ],
});

export default function SmallInstantLoanPage() {
  const compareUrl = '/loans?minLoanAmount=5000&maxLoanAmount=100000';

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ₹5000 Loan Urgently – Small Instant Loan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Need ₹5,000 to ₹1 Lakh urgently? Compare small-ticket loans with quick approval and minimal docs.
            </p>
            <Link
              href={compareUrl}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Compare Small Loans →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Small loans for urgent needs</h2>
            <p>
              Whether it’s medical expense, repair, or a short-term cash crunch, you can get a small personal loan 
              from ₹5,000 to ₹1 Lakh. Many lenders offer same-day or next-day disbursal for eligible applicants.
            </p>
            <h3>Why choose us</h3>
            <ul>
              <li>Compare multiple lenders in one place</li>
              <li>Rates from 10.5% p.a. onwards</li>
              <li>Tenure 3–36 months</li>
              <li>Minimal documentation</li>
              <li>No hidden charges – we don’t charge users</li>
            </ul>
            <h3>Quick steps</h3>
            <ol>
              <li>Check eligibility (salary, city, amount) in 30 seconds</li>
              <li>Compare interest rate and processing fee</li>
              <li>Apply with your chosen lender online</li>
              <li>Get approval and disbursal in 24–48 hours</li>
            </ol>
            <div className="not-prose mt-8 text-center">
              <Link
                href={compareUrl}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
              >
                Get Small Instant Loan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
