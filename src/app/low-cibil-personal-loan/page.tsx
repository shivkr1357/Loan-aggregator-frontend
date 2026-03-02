import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as baseMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

export const metadata: Metadata = baseMetadata({
  title: 'Low CIBIL Personal Loan - Bad Credit Loan India 2025 | LoanPilot',
  description: 'Personal loan with low CIBIL score? Compare lenders who accept 600 or below. Higher interest but approval possible. Check eligibility and apply online.',
  canonical: `${baseUrl}/low-cibil-personal-loan`,
  keywords: [
    'low CIBIL personal loan',
    'personal loan low credit score',
    'bad credit personal loan India',
    'CIBIL 600 loan',
    'personal loan without CIBIL',
    'loan for low CIBIL',
  ],
});

export default function LowCibilPersonalLoanPage() {
  const compareUrl = '/loans?loanType=personal';

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Low CIBIL Personal Loan – Bad Credit OK
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CIBIL below 700? Some lenders still approve. Compare options and check eligibility in 30 seconds.
            </p>
            <Link
              href={compareUrl}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Compare Lenders →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Can you get a personal loan with low CIBIL?</h2>
            <p>
              A low CIBIL score (e.g. below 650) makes approval harder and rates higher, but several NBFCs 
              and fintech lenders consider other factors like income, employment, and bank behaviour. 
              Compare them here and see who might approve you.
            </p>
            <h3>What to expect</h3>
            <ul>
              <li>Interest rates may be higher (e.g. 18–24% p.a.)</li>
              <li>Lower loan amount or shorter tenure</li>
              <li>Some lenders focus on income stability over score</li>
              <li>Improving CIBIL over time helps get better rates later</li>
            </ul>
            <h3>Improve your chances</h3>
            <ul>
              <li>Show stable salary and employment</li>
              <li>Keep existing EMIs paid on time</li>
              <li>Apply to multiple lenders (we help you compare)</li>
              <li>Avoid too many applications in a short time</li>
            </ul>
            <div className="not-prose mt-8 text-center">
              <Link
                href={compareUrl}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
              >
                Compare Low CIBIL Loan Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
