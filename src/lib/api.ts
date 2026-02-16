import axios from 'axios';
import { apiEndpoints } from '@/config/api';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loanApi = {
  calculate: async (data: {
    principal: number;
    annualRate: number;
    tenureMonths: number;
    extraPayment?: number;
  }) => {
    const response = await apiClient.post(apiEndpoints.loan.calculate, data);
    return response.data;
  },
  getBanks: async (filters?: {
    minIncome?: number;
    employmentType?: string;
    maxInterest?: number;
    sortBy?: 'interest' | 'processingFee';
  }) => {
    const response = await apiClient.get(apiEndpoints.loan.banks, {
      params: filters,
    });
    return response.data;
  },
};

export const leadApi = {
  create: async (data: {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    monthlyIncome: number;
    employmentType: string;
    loanAmount: number;
    sourcePage: string;
    consent: boolean;
  }) => {
    const response = await apiClient.post(apiEndpoints.leads.create, data);
    return response.data;
  },
};

export const affiliateApi = {
  redirect: async (leadId: string) => {
    const response = await apiClient.post(apiEndpoints.affiliate.redirect, {
      leadId,
    });
    return response.data;
  },
};

export const analyticsApi = {
  recordVisit: async (page: string, city?: string) => {
    const response = await apiClient.post(apiEndpoints.analytics.visit, {
      page,
      city,
    });
    return response.data;
  },
  getSummary: async () => {
    const response = await apiClient.get(apiEndpoints.analytics.summary);
    return response.data;
  },
};

export const adminApi = {
  getDashboard: async () => {
    const response = await apiClient.get(apiEndpoints.admin.dashboard);
    return response.data;
  },
  getLeads: async (page: number = 1, limit: number = 20) => {
    const response = await apiClient.get(apiEndpoints.admin.leads, {
      params: { page, limit },
    });
    return response.data;
  },
};
