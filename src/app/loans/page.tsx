'use client';

import { useState, useEffect, useCallback } from 'react';
import { loanApi } from '@/lib/api';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';

interface Bank {
  id: string;
  name: string;
  minIncome: number;
  maxInterest: number;
  processingFee: number;
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
    sortBy: 'interest' as 'interest' | 'processingFee',
  });
  const [calculation, setCalculation] = useState({
    principal: '',
    annualRate: '',
    tenureMonths: '',
    extraPayment: '',
  });
  const [emiResult, setEmiResult] = useState<any>(null);

  useEffect(() => {
    logEvent('page_view', { page: 'loans' });
    analyticsApi.recordVisit('loans').catch(console.error);
    loadBanks();
  }, []);

  const loadBanks = async () => {
    try {
      setLoading(true);
      const response = await loanApi.getBanks();
      setBanks(response.data.banks);
    } catch (error) {
      console.error('Error loading banks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = useCallback(async () => {
    try {
      setLoading(true);
      const filterParams: any = {};
      if (filters.minIncome)
        filterParams.minIncome = parseFloat(filters.minIncome);
      if (filters.employmentType)
        filterParams.employmentType = filters.employmentType;
      if (filters.maxInterest)
        filterParams.maxInterest = parseFloat(filters.maxInterest);
      if (filters.sortBy) filterParams.sortBy = filters.sortBy;

      const response = await loanApi.getBanks(filterParams);
      setBanks(response.data.banks);
    } catch (error) {
      console.error('Error filtering banks:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const calculateEMI = async () => {
    try {
      const response = await loanApi.calculate({
        principal: parseFloat(calculation.principal),
        annualRate: parseFloat(calculation.annualRate),
        tenureMonths: parseInt(calculation.tenureMonths),
        extraPayment: calculation.extraPayment
          ? parseFloat(calculation.extraPayment)
          : undefined,
      });
      setEmiResult(response.data);
    } catch (error) {
      console.error('Error calculating EMI:', error);
      alert('Please check your inputs');
    }
  };

  useEffect(() => {
    handleFilterChange();
  }, [handleFilterChange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Compare Personal Loans
      </h1>

      {/* EMI Calculator */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">EMI Calculator</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={calculation.principal}
              onChange={(e) =>
                setCalculation({ ...calculation, principal: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="500000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={calculation.annualRate}
              onChange={(e) =>
                setCalculation({ ...calculation, annualRate: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="10.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Tenure (Months)
            </label>
            <input
              type="number"
              value={calculation.tenureMonths}
              onChange={(e) =>
                setCalculation({
                  ...calculation,
                  tenureMonths: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Extra Payment (₹)
            </label>
            <input
              type="number"
              value={calculation.extraPayment}
              onChange={(e) =>
                setCalculation({
                  ...calculation,
                  extraPayment: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="0"
            />
          </div>
        </div>
        <button
          onClick={calculateEMI}
          className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
        >
          Calculate EMI
        </button>

        {emiResult && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Monthly EMI</p>
                <p className="text-2xl font-bold">₹{emiResult.emi}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Interest</p>
                <p className="text-2xl font-bold">₹{emiResult.totalInterest}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold">₹{emiResult.totalAmount}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter Banks</h2>
        <div className="grid md:grid-cols-4 gap-4">
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
              value={filters.maxInterest}
              onChange={(e) =>
                setFilters({ ...filters, maxInterest: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
              placeholder="11.0"
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
          onClick={handleFilterChange}
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
                        <span className="font-semibold">{bank.maxInterest}%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Processing Fee: </span>
                        <span className="font-semibold">₹{bank.processingFee}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Min Income: </span>
                        <span className="font-semibold">₹{bank.minIncome}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/apply"
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
