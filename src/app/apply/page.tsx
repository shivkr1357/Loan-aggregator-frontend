'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { leadApi, affiliateApi } from '@/lib/api';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';
import { z } from 'zod';

const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  email: z.string().email('Invalid email address'),
  city: z.string().min(2, 'City is required'),
  monthlyIncome: z.number().positive('Income must be positive'),
  employmentType: z.string().min(1, 'Employment type is required'),
  loanAmount: z.number().positive('Loan amount must be positive'),
  consent: z.boolean().refine((val) => val === true, 'Consent is required'),
});

function ApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    monthlyIncome: '',
    employmentType: '',
    loanAmount: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam) {
      setFormData((prev) => ({ ...prev, city: cityParam }));
    }
  }, [searchParams]);

  useEffect(() => {
    logEvent('page_view', { page: 'apply' });
    analyticsApi.recordVisit('apply', formData.city || undefined).catch(
      console.error
    );
  }, [formData.city]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : type === 'number'
          ? value === ''
            ? ''
            : parseFloat(value)
          : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    try {
      leadSchema.parse({
        ...formData,
        monthlyIncome: parseFloat(formData.monthlyIncome as any),
        loanAmount: parseFloat(formData.loanAmount as any),
      });
      return true;
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Create lead
      const leadResponse = await leadApi.create({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        monthlyIncome: parseFloat(formData.monthlyIncome as any),
        employmentType: formData.employmentType,
        loanAmount: parseFloat(formData.loanAmount as any),
        sourcePage: window.location.pathname,
        consent: formData.consent,
      });

      // Track lead submission
      logEvent('lead_submitted', {
        leadId: leadResponse.data.leadId,
        city: formData.city,
      });

      // Get affiliate redirect URL
      const affiliateResponse = await affiliateApi.redirect(
        leadResponse.data.leadId
      );

      // Track affiliate click
      logEvent('affiliate_click', {
        leadId: leadResponse.data.leadId,
        partner: affiliateResponse.data.partnerName,
      });

      // Redirect to affiliate URL
      window.location.href = affiliateResponse.data.redirectUrl;
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(
        error.response?.data?.message || 'Error submitting form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Apply for Personal Loan
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.fullName ? 'border-red-500' : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.phone ? 'border-red-500' : ''
              }`}
              placeholder="9876543210"
              maxLength={10}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.city ? 'border-red-500' : ''
              }`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Income (₹) *
            </label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.monthlyIncome ? 'border-red-500' : ''
              }`}
              placeholder="50000"
            />
            {errors.monthlyIncome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.monthlyIncome}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Employment Type *
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.employmentType ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select employment type</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
            {errors.employmentType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employmentType}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Amount (₹) *
            </label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.loanAmount ? 'border-red-500' : ''
              }`}
              placeholder="500000"
            />
            {errors.loanAmount && (
              <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label className="text-sm">
              I consent to sharing my information with lending partners for
              loan offers *
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
