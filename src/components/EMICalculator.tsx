'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { loanApi } from '@/lib/api';
import Link from 'next/link';

interface Bank {
  id: string;
  name: string;
  interestMin?: number;
  interestMax?: number;
  minLoanAmount?: number;
  maxLoanAmount?: number;
  tenureMin?: number;
  tenureMax?: number;
}

interface BankColors {
  [key: string]: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Bank color themes
const bankColors: BankColors = {
  'HDFC Bank': {
    primary: '#004C8A',
    secondary: '#0066B2',
    accent: '#E31837',
  },
  'ICICI Bank': {
    primary: '#FF6B00',
    secondary: '#FF8C00',
    accent: '#FFA500',
  },
  'Axis Bank': {
    primary: '#E31837',
    secondary: '#FF3B5C',
    accent: '#FF6B8A',
  },
  'Kotak Mahindra Bank': {
    primary: '#0066B2',
    secondary: '#0080CC',
    accent: '#00A0FF',
  },
  'IDFC First Bank': {
    primary: '#E31837',
    secondary: '#FF3B5C',
    accent: '#FF6B8A',
  },
  'Bajaj Finserv': {
    primary: '#0066B2',
    secondary: '#0080CC',
    accent: '#00A0FF',
  },
  'Fullerton India': {
    primary: '#004C8A',
    secondary: '#0066B2',
    accent: '#0080CC',
  },
  'MoneyTap': {
    primary: '#FF6B00',
    secondary: '#FF8C00',
    accent: '#FFA500',
  },
  'EarlySalary': {
    primary: '#0066B2',
    secondary: '#0080CC',
    accent: '#00A0FF',
  },
  'PaySense': {
    primary: '#E31837',
    secondary: '#FF3B5C',
    accent: '#FF6B8A',
  },
};

const defaultColors = {
  primary: '#1e40af',
  secondary: '#3b82f6',
  accent: '#60a5fa',
};

type LoanType = 'personal' | 'car' | 'bike' | 'home' | 'business' | 'education';

export function EMICalculator() {
  const [loanType, setLoanType] = useState<LoanType>('personal');
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [loading, setLoading] = useState(true);
  const [loanAmount, setLoanAmount] = useState(750000);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.99);
  const [emiResult, setEmiResult] = useState<any>(null);

  const loadBanks = async () => {
    try {
      setLoading(true);
      const response = await loanApi.getBanks({ loanType });
      console.log('Full API response:', response);
      
      // Handle different response structures
      // Backend returns: { success: true, message: 'Success', data: { banks: [...] } }
      // axios response.data = { success: true, message: 'Success', data: { banks: [...] } }
      let banksList: Bank[] = [];
      if (response?.data?.banks) {
        // Standard backend response structure
        banksList = response.data.banks;
      } else if (response?.banks) {
        // Direct banks array
        banksList = response.banks;
      } else if (Array.isArray(response)) {
        // Response is directly an array
        banksList = response;
      }
      
      console.log('Extracted banks list:', banksList);
      console.log('Number of banks:', banksList.length);
      
      setBanks(banksList);
      if (banksList.length > 0) {
        setSelectedBank(banksList[0]);
        console.log('Selected first bank:', banksList[0]);
      } else {
        console.warn('No banks found in response. Full response:', response);
      }
    } catch (error: any) {
      console.error('Error loading banks:', error);
      console.error('Error details:', {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status,
      });
      setBanks([]);
      setSelectedBank(null);
    } finally {
      setLoading(false);
    }
  };

  const calculateEMI = useCallback(async () => {
    if (!selectedBank || !loanAmount || !tenureYears || !interestRate) {
      setEmiResult(null);
      return;
    }

    try {
      const tenureMonths = tenureYears * 12;
      const response = await loanApi.calculate({
        principal: loanAmount,
        annualRate: interestRate,
        tenureMonths,
      });
      setEmiResult(response.data);
    } catch (error) {
      console.error('Error calculating EMI:', error);
      setEmiResult(null);
    }
  }, [selectedBank, loanAmount, tenureYears, interestRate]);

  useEffect(() => {
    loadBanks();
  }, [loanType]);

  useEffect(() => {
    if (selectedBank && selectedBank.interestMin) {
      setInterestRate(selectedBank.interestMin);
    }
  }, [selectedBank]);

  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]);

  const colors = useMemo(() => {
    if (selectedBank && bankColors[selectedBank.name]) {
      return bankColors[selectedBank.name];
    }
    return defaultColors;
  }, [selectedBank]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const minLoanAmount = selectedBank?.minLoanAmount || 25000;
  const maxLoanAmount = 5000000; // Fixed maximum for all loan types
  const minTenure = selectedBank?.tenureMin ? Math.ceil(selectedBank.tenureMin / 12) : 1;
  const maxTenure = 20; // Fixed maximum 20 years for all loan types
  const minInterest = selectedBank?.interestMin || 9.99;
  const maxInterest = selectedBank?.interestMax || 24;

  const loanTypeLabels: Record<LoanType, string> = {
    personal: 'Personal Loan',
    car: 'Car Loan',
    bike: 'Bike Loan',
    home: 'Home Loan',
    business: 'Business Loan',
    education: 'Education Loan',
  };

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        {loanTypeLabels[loanType]} EMI Calculator
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Take Out the Guess Work from Financial Planning. Calculate your EMIs now!
      </p>

      <div
        className="rounded-2xl p-8 shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${colors.secondary}15 0%, ${colors.primary}15 100%)`,
          border: `2px solid ${colors.primary}20`,
        }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel - Input Controls */}
          <div className="space-y-6">
            {/* Loan Type Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Loan Type
              </label>
              <select
                value={loanType}
                onChange={(e) => {
                  const newLoanType = e.target.value as LoanType;
                  setLoanType(newLoanType);
                  setSelectedBank(null);
                  // Reset loan amount based on loan type
                  if (newLoanType === 'car') {
                    setLoanAmount(500000);
                    setTenureYears(5);
                  } else if (newLoanType === 'bike') {
                    setLoanAmount(100000);
                    setTenureYears(3);
                  } else if (newLoanType === 'home') {
                    setLoanAmount(5000000);
                    setTenureYears(20);
                  } else if (newLoanType === 'business') {
                    setLoanAmount(1000000);
                    setTenureYears(5);
                  } else if (newLoanType === 'education') {
                    setLoanAmount(500000);
                    setTenureYears(5);
                  } else {
                    setLoanAmount(750000);
                    setTenureYears(5);
                  }
                }}
                className="w-full border-2 rounded-lg px-4 py-3 text-lg font-medium cursor-pointer"
                style={{
                  borderColor: colors.primary,
                  backgroundColor: 'white',
                }}
              >
                <option value="personal">Personal Loan</option>
                <option value="car">Car Loan</option>
                <option value="bike">Bike Loan</option>
                <option value="home">Home Loan</option>
                <option value="business">Business Loan</option>
                <option value="education">Education Loan</option>
              </select>
            </div>

            {/* Bank Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Select Bank / Lender
              </label>
              <select
                value={selectedBank?.id || ''}
                onChange={(e) => {
                  const bankId = e.target.value;
                  if (bankId) {
                    const bank = banks.find((b) => b.id === bankId);
                    if (bank) {
                      setSelectedBank(bank);
                    }
                  } else {
                    setSelectedBank(null);
                  }
                }}
                className="w-full border-2 rounded-lg px-4 py-3 text-lg font-medium cursor-pointer"
                style={{
                  borderColor: colors.primary,
                  backgroundColor: 'white',
                }}
                disabled={loading || banks.length === 0}
              >
                {loading ? (
                  <option value="">Loading banks...</option>
                ) : banks.length === 0 ? (
                  <option value="">No banks available - Please seed the database</option>
                ) : (
                  <>
                    {!selectedBank && <option value="">Select a bank</option>}
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                        {bank.interestMin && bank.interestMax
                          ? ` (${bank.interestMin}% - ${bank.interestMax}%)`
                          : bank.interestMin
                          ? ` (${bank.interestMin}% onwards)`
                          : ''}
                      </option>
                    ))}
                  </>
                )}
              </select>
              {!loading && banks.length === 0 && (
                <div className="mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 font-semibold mb-2">
                    ⚠️ No lenders found in database
                  </p>
                </div>
              )}
              {banks.length > 0 && !selectedBank && (
                <p className="text-sm text-orange-600 mt-1">
                  Please select a bank to continue
                </p>
              )}
            </div>

            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Loan Amount
                </label>
                <input
                  type="text"
                  value={formatCurrency(loanAmount)}
                  onChange={(e) => {
                    const value = parseInt(
                      e.target.value.replace(/[₹,\s]/g, '')
                    );
                    if (!isNaN(value)) {
                      setLoanAmount(
                        Math.max(minLoanAmount, Math.min(maxLoanAmount, value))
                      );
                    }
                  }}
                  className="w-32 text-right font-bold text-lg border-2 rounded px-2 py-1"
                  style={{ borderColor: colors.primary }}
                />
              </div>
              <input
                type="range"
                min={minLoanAmount}
                max={maxLoanAmount}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${
                    ((loanAmount - minLoanAmount) / (maxLoanAmount - minLoanAmount)) *
                    100
                  }%, #e5e7eb ${
                    ((loanAmount - minLoanAmount) / (maxLoanAmount - minLoanAmount)) *
                    100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatCurrency(minLoanAmount)}</span>
                <span>{formatCurrency(maxLoanAmount)}</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Loan Tenure
                </label>
                <input
                  type="text"
                  value={`${tenureYears} ${tenureYears === 1 ? 'year' : 'years'}`}
                  onChange={(e) => {
                    const value = parseInt(e.target.value.replace(/\D/g, ''));
                    if (!isNaN(value)) {
                      setTenureYears(
                        Math.max(minTenure, Math.min(maxTenure, value))
                      );
                    }
                  }}
                  className="w-24 text-right font-bold text-lg border-2 rounded px-2 py-1"
                  style={{ borderColor: colors.primary }}
                />
              </div>
              <input
                type="range"
                min={minTenure}
                max={maxTenure}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${
                    ((tenureYears - minTenure) / (maxTenure - minTenure)) * 100
                  }%, #e5e7eb ${
                    ((tenureYears - minTenure) / (maxTenure - minTenure)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{minTenure} year{minTenure !== 1 ? 's' : ''}</span>
                <span>{maxTenure} years</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Interest Rate
                </label>
                <input
                  type="text"
                  value={`${interestRate.toFixed(2)}%`}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value.replace(/[%\s]/g, ''));
                    if (!isNaN(value)) {
                      setInterestRate(
                        Math.max(minInterest, Math.min(maxInterest, value))
                      );
                    }
                  }}
                  className="w-24 text-right font-bold text-lg border-2 rounded px-2 py-1"
                  style={{ borderColor: colors.primary }}
                />
              </div>
              <input
                type="range"
                min={minInterest}
                max={maxInterest}
                step={0.01}
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${
                    ((interestRate - minInterest) / (maxInterest - minInterest)) *
                    100
                  }%, #e5e7eb ${
                    ((interestRate - minInterest) / (maxInterest - minInterest)) *
                    100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{minInterest.toFixed(2)}% PA</span>
                <span>{maxInterest.toFixed(2)}% PA</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div
            className="rounded-xl p-8 flex flex-col justify-between"
            style={{
              backgroundColor: colors.primary,
              color: 'white',
            }}
          >
            <div>
              <p className="text-lg mb-2 opacity-90">
                Your Monthly EMI will be
              </p>
              <p
                className="text-5xl font-bold mb-8"
                style={{ color: colors.accent }}
              >
                {emiResult
                  ? formatCurrency(emiResult.emi)
                  : formatCurrency(0)}
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-lg opacity-90">Amount Payable</span>
                  <span className="text-xl font-semibold">
                    {emiResult
                      ? formatCurrency(emiResult.totalAmount)
                      : formatCurrency(0)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-lg opacity-90">Interest Amount</span>
                  <span className="text-xl font-semibold">
                    {emiResult
                      ? formatCurrency(emiResult.totalInterest)
                      : formatCurrency(0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg opacity-90">Principal Amount</span>
                  <span className="text-xl font-semibold">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
              </div>
            </div>

            {selectedBank ? (
              <Link
                href={`/apply?lenderId=${selectedBank.id}&lenderName=${encodeURIComponent(selectedBank.name)}&loanAmount=${loanAmount}&tenure=${tenureYears * 12}`}
                className="mt-8 w-full py-4 px-6 rounded-lg font-semibold text-lg text-center transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                Apply Now →
              </Link>
            ) : (
              <button
                disabled
                className="mt-8 w-full py-4 px-6 rounded-lg font-semibold text-lg text-center opacity-50 cursor-not-allowed"
                style={{
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                Select a bank to apply
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
