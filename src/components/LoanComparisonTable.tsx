'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Bank {
  id: string;
  slug?: string;
  name: string;
  logoUrl?: string;
  interestMin?: number;
  interestMax?: number;
  processingFeePercent?: number;
  processingFeeFixed?: number;
  minIncome: number;
  minLoanAmount: number;
  maxLoanAmount: number;
  estimatedApprovalTimeDays?: number;
  rating?: number;
}

interface LoanComparisonTableProps {
  banks: Bank[];
}

export function LoanComparisonTable({ banks }: LoanComparisonTableProps) {
  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatRange = (min: number, max: number) => {
    return `${formatCurrency(min)} - ${formatCurrency(max)}`;
  };

  if (banks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No lenders found matching your criteria
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-50 border-b-2 border-gray-200">
            <th className="text-left p-4 font-semibold text-gray-700">Lender</th>
            <th className="text-left p-4 font-semibold text-gray-700">Interest Rate</th>
            <th className="text-left p-4 font-semibold text-gray-700">Processing Fee</th>
            <th className="text-left p-4 font-semibold text-gray-700">Loan Amount</th>
            <th className="text-left p-4 font-semibold text-gray-700">Min Income</th>
            <th className="text-left p-4 font-semibold text-gray-700">Approval Time</th>
            <th className="text-left p-4 font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank, index) => (
            <tr
              key={bank.id}
              className={`border-b border-gray-100 hover:bg-gray-50 transition ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  {bank.logoUrl ? (
                    <div className="w-12 h-8 relative">
                      <Image
                        src={bank.logoUrl}
                        alt={bank.name}
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold">
                      {bank.name.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{bank.name}</div>
                    {bank.rating && (
                      <div className="text-xs text-gray-500">
                        ⭐ {bank.rating.toFixed(1)}/5.0
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="font-semibold text-primary-600">
                  {bank.interestMin !== undefined && bank.interestMax !== undefined
                    ? `${bank.interestMin}% - ${bank.interestMax}%`
                    : 'N/A'}
                </div>
                {bank.interestMin !== undefined && (
                  <div className="text-xs text-gray-500">Starting from</div>
                )}
              </td>
              <td className="p-4">
                <div className="font-semibold">
                  {bank.processingFeePercent !== undefined
                    ? `${bank.processingFeePercent}%`
                    : bank.processingFeeFixed !== undefined
                    ? formatCurrency(bank.processingFeeFixed)
                    : 'N/A'}
                </div>
              </td>
              <td className="p-4">
                <div className="font-semibold">
                  {formatRange(bank.minLoanAmount, bank.maxLoanAmount)}
                </div>
              </td>
              <td className="p-4">
                <div className="font-semibold">{formatCurrency(bank.minIncome)}</div>
                <div className="text-xs text-gray-500">per month</div>
              </td>
              <td className="p-4">
                <div className="font-semibold">
                  {bank.estimatedApprovalTimeDays
                    ? `${bank.estimatedApprovalTimeDays} ${bank.estimatedApprovalTimeDays === 1 ? 'day' : 'days'}`
                    : 'N/A'}
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col gap-2">
                  {bank.slug && (
                    <Link
                      href={`/bank/${bank.slug}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm text-center transition"
                    >
                      Details
                    </Link>
                  )}
                  <Link
                    href={`/apply?lenderId=${bank.id}&lenderName=${encodeURIComponent(bank.name)}`}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded font-semibold text-sm text-center transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
