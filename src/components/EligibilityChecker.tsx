'use client';

import { useState } from 'react';
import Link from 'next/link';
import { loanApi } from '@/lib/api';

interface EligibilityResult {
  eligibleCount: number;
  eligibleBanks: Array<{
    id: string;
    name: string;
    slug?: string;
  }>;
}

export function EligibilityChecker() {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    city: '',
    employmentType: '',
    loanAmount: '',
  });
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.monthlyIncome || !formData.city || !formData.employmentType || !formData.loanAmount) {
      return;
    }

    setLoading(true);
    try {
      const response = await loanApi.getBanks({
        minIncome: parseFloat(formData.monthlyIncome),
        employmentType: formData.employmentType,
        city: formData.city,
        minLoanAmount: parseFloat(formData.loanAmount),
        maxLoanAmount: parseFloat(formData.loanAmount),
      });

      const banks = response.data?.banks ?? response.banks ?? [];
      setResult({
        eligibleCount: banks.length,
        eligibleBanks: banks.slice(0, 5).map((b: any) => ({
          id: b.id,
          name: b.name,
          slug: b.slug,
        })),
      });
      setStep('result');
    } catch (error) {
      console.error('Error checking eligibility:', error);
      setResult({ eligibleCount: 0, eligibleBanks: [] });
      setStep('result');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep('form');
    setResult(null);
    setFormData({
      monthlyIncome: '',
      city: '',
      employmentType: '',
      loanAmount: '',
    });
  };

  if (step === 'result' && result) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            You are eligible for {result.eligibleCount} lender{result.eligibleCount !== 1 ? 's' : ''}!
          </h3>
          <p className="text-gray-600">
            Based on your criteria, we found {result.eligibleCount} lender{result.eligibleCount !== 1 ? 's' : ''} ready to offer you a loan.
          </p>
        </div>

        {result.eligibleBanks.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Top Matches:</h4>
            <div className="space-y-2">
              {result.eligibleBanks.map((bank) => (
                <div
                  key={bank.id}
                  className="bg-white rounded-lg p-3 flex justify-between items-center shadow-sm"
                >
                  <span className="font-medium">{bank.name}</span>
                  {bank.slug ? (
                    <Link
                      href={`/bank/${bank.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                    >
                      View Details →
                    </Link>
                  ) : (
                    <Link
                      href={`/apply?lenderId=${bank.id}&lenderName=${encodeURIComponent(bank.name)}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                    >
                      Apply →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition"
          >
            Check Again
          </button>
          <Link
            href={`/loans?minIncome=${formData.monthlyIncome}&employmentType=${formData.employmentType}&city=${formData.city}&minLoanAmount=${formData.loanAmount}`}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Compare All {result.eligibleCount} Lenders →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-200">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Check Eligibility in 30 Seconds ⚡
        </h2>
        <p className="text-gray-600">
          Find out which lenders are ready to offer you a loan instantly
        </p>
      </div>

      <form onSubmit={handleCheckEligibility} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Monthly Income (₹)
            </label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
              placeholder="25000"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
              placeholder="Delhi"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Loan Amount Needed (₹)
            </label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
              placeholder="500000"
              min="0"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Checking Eligibility...' : 'Check My Eligibility →'}
        </button>

        <p className="text-xs text-center text-gray-500">
          ✓ Free check • ✓ No impact on credit score • ✓ Instant results
        </p>
      </form>
    </div>
  );
}
