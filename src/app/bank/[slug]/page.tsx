'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { loanApi } from '@/lib/api';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';

interface Bank {
  id: string;
  slug: string;
  name: string;
  loanType: string;
  logoUrl?: string;
  interestMin: number;
  interestMax: number;
  rateType: string;
  processingFeePercent: number;
  processingFeeFixed?: number;
  minIncome: number;
  employmentTypes: string[];
  minLoanAmount: number;
  maxLoanAmount: number;
  tenureMin: number;
  tenureMax: number;
  citiesSupported: string[];
  estimatedApprovalTimeDays: number;
  rating: number;
  featured: boolean;
  description?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: 'What is the interest rate on a Personal Loan?',
    answer: 'The interest rate on a Personal Loan can vary depending on several factors such as the lender, the borrower\'s credit score, and the loan amount. It\'s important to compare rates from different lenders to find the best deal. Rates can vary widely based on the borrower\'s creditworthiness and the lender\'s policies. To get an accurate idea of the interest rate you might qualify for, it\'s best to check with individual lenders and review their terms and conditions.',
  },
  {
    question: 'What is the charge of Personal Loan?',
    answer: 'Personal loans typically include processing fees (usually 1-3% of the loan amount), prepayment charges (if applicable), late payment fees, and other charges. The exact charges vary by lender and loan terms. Please refer to the fees and charges section above for detailed information.',
  },
  {
    question: 'Can I get a loan with ₹20,000 salary?',
    answer: 'Yes, many lenders offer personal loans for individuals with a monthly salary of ₹20,000 or more. However, eligibility depends on various factors including your credit score, employment stability, existing debts, and the lender\'s specific criteria. The loan amount you qualify for will be based on your income and repayment capacity.',
  },
  {
    question: 'What is the actual cost of a Personal Loan?',
    answer: 'The actual cost of a personal loan includes the interest rate, processing fees, prepayment charges (if applicable), and any other charges. The Annual Percentage Rate (APR) gives you a better understanding of the total cost as it includes all fees and charges. Always compare APR when evaluating loan offers.',
  },
  {
    question: 'How is the Personal Loan interest rate calculated?',
    answer: 'Personal loan interest rates are typically calculated using the reducing balance method, where interest is charged only on the outstanding principal amount. The rate depends on factors like your credit score, income, employment type, loan amount, and tenure. Lenders use risk-based pricing to determine your specific interest rate.',
  },
  {
    question: 'What is the interest on a ₹1 lakh loan?',
    answer: 'The interest on a ₹1 lakh loan depends on the interest rate and loan tenure. For example, at 12% annual interest rate for 5 years, the total interest would be approximately ₹32,000-₹33,000. Use our EMI calculator to get an accurate estimate based on your specific loan terms.',
  },
];

// Remote logo fallback when /banks/{baseSlug}.png is missing (add your files to public/banks/ per README)
const REMOTE_LOGO_FALLBACK: Record<string, string> = {
  'hdfc-bank': 'https://logos.hunter.io/hdfcbank.com',
  'icici-bank': 'https://logos.hunter.io/icicibank.com',
  'axis-bank': 'https://logos.hunter.io/axisbank.com',
  'kotak-mahindra-bank': 'https://logos.hunter.io/kotak.com',
  'idfc-first-bank': 'https://logos.hunter.io/idfcfirstbank.com',
  'bajaj-finserv': 'https://logos.hunter.io/bajajfinserv.in',
};

// Try local /banks/{baseSlug}.png first, then fallbackUrl (API), then remote fallback, then initials
function BankLogo({
  slug,
  name,
  fallbackUrl,
}: {
  slug?: string;
  name: string;
  fallbackUrl?: string;
}) {
  const baseSlug = slug ? slug.replace(/-?(personal|car|bike|home|business|education)$/, '') || slug : '';
  const localSrc = baseSlug ? `/banks/${baseSlug}.png` : null;
  const remoteFallback = baseSlug ? REMOTE_LOGO_FALLBACK[baseSlug] : null;
  const [state, setState] = useState<'local' | 'remote' | 'placeholder'>(
    localSrc ? 'local' : fallbackUrl?.startsWith('http') ? 'remote' : remoteFallback ? 'remote' : 'placeholder'
  );

  const showPlaceholder = () => (
    <div
      className="flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 font-semibold text-lg"
      style={{ width: 120, height: 60 }}
      title={name}
    >
      {name.split(' ')[0]?.slice(0, 2) ?? '—'}
    </div>
  );

  if (state === 'placeholder') return showPlaceholder();

  const src =
    state === 'local' && localSrc
      ? localSrc
      : state === 'remote'
        ? (fallbackUrl?.startsWith('http') ? fallbackUrl : remoteFallback ?? fallbackUrl ?? null)
        : null;
  if (!src) return showPlaceholder();

  return (
    <img
      src={src}
      alt={name}
      width={120}
      height={60}
      className="object-contain"
      style={{ maxWidth: 120, maxHeight: 60 }}
      onError={() => {
        if (state === 'local') setState('remote');
        else setState('placeholder');
      }}
    />
  );
}

export default function BankPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [bank, setBank] = useState<Bank | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [loanType, setLoanType] = useState<'personal' | 'car' | 'bike' | 'home' | 'business' | 'education'>('personal');

  const loadBank = useCallback(async () => {
    try {
      setLoading(true);
      const response = await loanApi.getBanks({ loanType });
      const banks = response.data?.banks || response.banks || [];
      // Find bank by slug - extract base slug (e.g., "hdfc-bank" from "hdfc-bank-personal")
      const baseSlug = slug.split('-').slice(0, -1).join('-'); // Remove loan type suffix
      const foundBank = banks.find((b: Bank) => {
        const bankBaseSlug = b.slug?.split('-').slice(0, -1).join('-');
        return bankBaseSlug === baseSlug || b.slug === slug;
      });
      setBank(foundBank || null);
    } catch (error) {
      console.error('Error loading bank:', error);
      setBank(null);
    } finally {
      setLoading(false);
    }
  }, [slug, loanType]);

  useEffect(() => {
    loadBank();
  }, [loadBank]);

  useEffect(() => {
    if (bank) {
      logEvent('page_view', { page: `bank-${slug}`, bank: bank.name });
      analyticsApi.recordVisit(`bank/${slug}`).catch(console.error);
    }
  }, [bank, slug]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <p className="text-xl">Loading bank details...</p>
        </div>
      </div>
    );
  }

  if (!bank) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Bank Not Found</h1>
          <p className="text-gray-600 mb-8">The bank you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/loans" className="text-primary-600 hover:underline">
            ← Back to Compare Loans
          </Link>
        </div>
      </div>
    );
  }

  const loanTypeLabels: Record<string, string> = {
    personal: 'Personal Loan',
    car: 'Car Loan',
    bike: 'Bike Loan',
    home: 'Home Loan',
    business: 'Business Loan',
    education: 'Education Loan',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Loan Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Select Loan Type
          </label>
          <select
            value={loanType}
            onChange={(e) => {
              const newLoanType = e.target.value as any;
              setLoanType(newLoanType);
              setBank(null); // Reset bank to reload
            }}
            className="w-full md:w-64 border-2 rounded-lg px-4 py-2 text-lg font-medium"
            style={{ borderColor: '#1e40af' }}
          >
            <option value="personal">Personal Loan</option>
            <option value="car">Car Loan</option>
            <option value="bike">Bike Loan</option>
            <option value="home">Home Loan</option>
            <option value="business">Business Loan</option>
            <option value="education">Education Loan</option>
          </select>
        </div>

        {/* Bank Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <BankLogo slug={bank.slug} name={bank.name} fallbackUrl={bank.logoUrl} />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {bank.name} {loanTypeLabels[loanType]} Interest Rates
              </h1>
              <p className="text-gray-600 mt-2">{bank.description || 'Competitive loan rates with flexible repayment options.'}</p>
            </div>
          </div>
        </div>

        {/* Interest Rates Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {bank.name} {loanTypeLabels[loanType]} Interest Rate, Fees and Charges
          </h2>
          
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Senior citizen customers may be eligible for discounts on service charges. 
              Applicable government taxes and other levies will be added to the fees and charges. 
              Loan disbursement is at the sole discretion of the lender.
            </p>
          </div>

          {/* Interest Rate Table */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Loan Fees and Charges (Pre-Disbursement)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Fee</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Amount To Be Paid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Rack Interest Rate</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      {bank.interestMin}% - {bank.interestMax}% {bank.rateType === 'starting_from' ? '(Starting From)' : '(Range)'}
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Processing Fee / Loan Processing Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      {bank.processingFeePercent}% of loan amount
                      {bank.processingFeeFixed ? ` or ₹${bank.processingFeeFixed.toLocaleString('en-IN')}` : ''} + GST
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Stamp Duty & Other Statutory Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      As per applicable laws of the state
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Post Disbursement Charges */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Charges Post Loan Disbursement</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Fee</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Amount To Be Paid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Legal / Incidental Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">At actuals</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Amortisation Schedule Charges / Repayment Schedule Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      ₹50 per schedule for physical copy. Customers can also download from the website free of cost.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Repayment Mode Change Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">₹500</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Payment Return Charges</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">₹450 per instance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Delayed Instalment Payment Charge</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      18% p.a. (1.50% per month) plus applicable government taxes on overdue instalment amount. 
                      Charge to be applied for all accounts where instalment remains unpaid after expiry of grace period of 7 calendar days from due date of instalment.
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Premature Closure Charges (Full Payment)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      Up to 24 EMI: 4% of principal outstanding. Post 24 EMI and up to 36 EMI: 3% of principal outstanding. 
                      Post 36 EMI: 2% of principal outstanding.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Premature Closure Charges (Part Payment)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                      Post 01 EMI and up to 24 EMI: 4% of part payment amount. Post 24 EMI and up to 36 EMI: 3% of part payment amount. 
                      Post 36 EMI: 2% of part payment amount. Partial payment allowed up to 25% of principal outstanding, only once in financial year and twice during loan tenure.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Loan Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Loan Amount</h4>
              <p className="text-lg">{formatCurrency(bank.minLoanAmount)} - {formatCurrency(bank.maxLoanAmount)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Loan Tenure</h4>
              <p className="text-lg">{Math.ceil(bank.tenureMin / 12)} - {Math.ceil(bank.tenureMax / 12)} years</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Minimum Income</h4>
              <p className="text-lg">{formatCurrency(bank.minIncome)} per month</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Estimated Approval Time</h4>
              <p className="text-lg">{bank.estimatedApprovalTimeDays} days</p>
            </div>
          </div>

          {/* Late Payment Policy */}
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Late Payment Policy</h3>
            <p className="text-gray-700 mb-3">
              If you pay your EMI after the due date, interest will be charged on unpaid EMI for the number of days you are late. 
              This interest is calculated at your loan&apos;s contracted rate and will be added to your next EMI.
            </p>
            <div className="mt-3">
              <p className="font-semibold text-gray-800 mb-2">Example:</p>
              <ul className="list-none space-y-1 text-gray-700">
                <li>✓ EMI Due Date: 10th</li>
                <li>✓ Payment Made On: 25th</li>
                <li>✓ Delay: 15 days</li>
                <li>✓ Impact: Interest for these 15 days will be added to your next EMI.</li>
              </ul>
            </div>
            <p className="text-gray-700 mt-3 font-semibold">Please pay on time to avoid this.</p>
          </div>

          {/* APR Information */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Annual Percentage Rate (APR) Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Min APR</p>
                <p className="text-2xl font-bold text-gray-800">{bank.interestMin}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Max APR</p>
                <p className="text-2xl font-bold text-gray-800">{bank.interestMax}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg APR</p>
                <p className="text-2xl font-bold text-gray-800">
                  {((bank.interestMin + bank.interestMax) / 2).toFixed(2)}%
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Government taxes and other levies as applicable will be charged over and above the fee and charges. 
              Loan disbursal at the sole discretion of the lender.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href={`/apply?lenderId=${bank.id}&lenderName=${encodeURIComponent(bank.name)}&loanType=${loanType}`}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
            >
              Apply now for a {loanTypeLabels[loanType]}
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {defaultFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-navy-900 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Here&apos;s how to reach us</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+911234567890"
              className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
            <a
              href="mailto:contact@loanpilot.in"
              className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat
            </a>
            <Link
              href="/contact"
              className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Locate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
