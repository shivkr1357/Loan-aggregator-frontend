import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as baseMetadata } from '@/lib/seo';

// Match root canonical domain.
const baseUrl = 'https://loanpilot.in';

export const metadata: Metadata = baseMetadata({
  title: 'Instant Loan for Salaried in India - Quick Approval 2025 | LoanPilot',
  description: 'Get instant personal loan for salaried employees. Compare 20+ lenders, approval in minutes. Minimum salary ₹15,000. No hidden charges. Apply now.',
  canonical: `${baseUrl}/instant-loan-salaried`,
  keywords: [
    'instant loan for salaried',
    'personal loan salaried',
    'instant personal loan salaried India',
    'quick loan salaried',
    'salary loan',
    'instant loan approval',
  ],
});

export default function InstantLoanSalariedPage() {
  const compareUrl = '/loans?employmentType=salaried';

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Instant Loan for Salaried in India
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Quick approval for salaried employees. Compare 20+ lenders, get funds in 24–48 hours. Min salary ₹15,000.
            </p>
            <Link
              href={compareUrl}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Check Eligibility & Compare →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Why salaried employees get instant loans</h2>
            <p>
              Banks and NBFCs prefer salaried applicants because of stable income. You can get instant pre-approval 
              and compare multiple offers in one place—no branch visit, no lengthy paperwork.
            </p>
            <h3>Eligibility (typical)</h3>
            <ul>
              <li>Monthly salary ₹15,000+ (varies by lender)</li>
              <li>Age 21–60 years</li>
              <li>At least 6 months in current job</li>
              <li>CIBIL 650+ (some lenders accept lower)</li>
            </ul>
            <h3>What you need</h3>
            <ul>
              <li>Salary slips (last 3 months)</li>
              <li>Bank statements (last 6 months)</li>
              <li>Aadhaar & PAN</li>
              <li>Employment certificate</li>
            </ul>
            <div className="not-prose mt-8 text-center">
              <Link
                href={compareUrl}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
              >
                Compare Instant Loans for Salaried
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
