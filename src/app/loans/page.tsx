'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Link from 'next/link';
import { loanApi } from '@/lib/api';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';
import { debounce } from '@/lib/utils';
import { EMICalculator } from '@/components/EMICalculator';

interface Bank {
  id: string;
  slug?: string;
  name: string;
  loanType?: string;
  minIncome: number;
  maxInterest?: number;
  interestMin?: number;
  interestMax?: number;
  processingFee?: number;
  processingFeePercent?: number;
  employmentTypes: string[];
  maxLoanAmount: number;
}

export default function LoansPage() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    minIncome: '',
    employmentType: '',
    maxInterest: '',
    minLoanAmount: '',
    maxLoanAmount: '',
    sortBy: 'interest' as 'interest' | 'processingFee',
  });

  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  const fetchBanksWithFilters = useCallback(async () => {
    const f = filtersRef.current;
    try {
      setLoading(true);
      const filterParams: Record<string, string | number> = {};
      if (f.minIncome) filterParams.minIncome = parseFloat(f.minIncome);
      if (f.employmentType) filterParams.employmentType = f.employmentType;
      if (f.maxInterest) filterParams.maxInterest = parseFloat(f.maxInterest);
      if (f.minLoanAmount) filterParams.minLoanAmount = parseFloat(f.minLoanAmount);
      if (f.maxLoanAmount) filterParams.maxLoanAmount = parseFloat(f.maxLoanAmount);
      if (f.sortBy) filterParams.sortBy = f.sortBy;

      const response = await loanApi.getBanks(filterParams);
      setBanks(response.data?.banks ?? response.banks ?? []);
    } catch (error) {
      console.error('Error loading banks:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchBanks = useMemo(
    () => debounce(fetchBanksWithFilters, 400),
    [fetchBanksWithFilters]
  );

  useEffect(() => {
    logEvent('page_view', { page: 'loans' });
    analyticsApi.recordVisit('loans').catch(console.error);
  }, []);

  useEffect(() => {
    debouncedFetchBanks();
  }, [filters, debouncedFetchBanks]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Compare Loans
      </h1>

      {/* EMI Calculator */}
      <div className="mb-12">
        <EMICalculator />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter Banks</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Min Income (₹)
            </label>
            <input
              type="number"
              value={filters.minIncome}
              onChange={(e) =>
                setFilters({ ...filters, minIncome: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="15000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Employment Type
            </label>
            <select
              value={filters.employmentType}
              onChange={(e) =>
                setFilters({ ...filters, employmentType: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">All</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Max Interest (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={filters.maxInterest}
              onChange={(e) =>
                setFilters({ ...filters, maxInterest: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="11.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Min Loan Amount (₹)
            </label>
            <input
              type="number"
              value={filters.minLoanAmount}
              onChange={(e) =>
                setFilters({ ...filters, minLoanAmount: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="50000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Max Loan Amount (₹)
            </label>
            <input
              type="number"
              value={filters.maxLoanAmount}
              onChange={(e) =>
                setFilters({ ...filters, maxLoanAmount: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="5000000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: e.target.value as 'interest' | 'processingFee',
                })
              }
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="interest">Lowest Interest</option>
              <option value="processingFee">Lowest Processing Fee</option>
            </select>
          </div>
        </div>
        <button
          onClick={fetchBanksWithFilters}
          className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
        >
          Apply Filters
        </button>
      </div>

      {/* Banks List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Lenders</h2>
        {loading ? (
          <p className="text-center py-8">Loading...</p>
        ) : banks.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            No banks found matching your criteria
          </p>
        ) : (
          <div className="space-y-4">
            {banks.map((bank) => (
              <div
                key={bank.id}
                className="border rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{bank.name}</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Interest Rate: </span>
                        <span className="font-semibold">
                          {bank.interestMin !== undefined && bank.interestMax !== undefined
                            ? `${bank.interestMin}% - ${bank.interestMax}%`
                            : bank.maxInterest !== undefined
                            ? `${bank.maxInterest}%`
                            : 'N/A'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Processing Fee: </span>
                        <span className="font-semibold">
                          {bank.processingFeePercent !== undefined
                            ? `${bank.processingFeePercent}%`
                            : bank.processingFee !== undefined
                            ? `₹${bank.processingFee}`
                            : 'N/A'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Min Income: </span>
                        <span className="font-semibold">₹{bank.minIncome}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {bank.slug && (
                      <Link
                        href={`/bank/${bank.slug}`}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-center text-sm"
                      >
                        View Details
                      </Link>
                    )}
                    <a
                      href={`/apply?lenderId=${bank.id}&lenderName=${encodeURIComponent(bank.name)}`}
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
