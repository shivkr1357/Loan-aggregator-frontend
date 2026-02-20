import axios from 'axios';
import { apiEndpoints } from '@/config/api';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const BANKS_CACHE_KEY_PREFIX = 'loan_aggregator_banks:';
const BANKS_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

type GetBanksFilters = {
  minIncome?: number;
  employmentType?: string;
  maxInterest?: number;
  city?: string;
  minLoanAmount?: number;
  maxLoanAmount?: number;
  loanType?: 'personal' | 'car' | 'bike' | 'home' | 'business' | 'education';
  sortBy?: 'interest' | 'processingFee';
};

function getBanksCacheKey(filters?: GetBanksFilters): string {
  if (!filters || Object.keys(filters).length === 0) {
    return BANKS_CACHE_KEY_PREFIX + '_default';
  }
  const sorted = Object.keys(filters)
    .sort()
    .reduce((acc, k) => ({ ...acc, [k]: (filters as Record<string, unknown>)[k] }), {});
  return BANKS_CACHE_KEY_PREFIX + JSON.stringify(sorted);
}

type GetBanksResponse = { data?: { banks: unknown[] }; banks?: unknown[] };

function getBanksFromStorage(filters?: GetBanksFilters): GetBanksResponse | null {
  if (typeof window === 'undefined') return null;
  try {
    const key = getBanksCacheKey(filters);
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const { data, expires } = JSON.parse(raw) as { data: GetBanksResponse; expires: number };
    if (Date.now() > expires) {
      sessionStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setBanksInStorage(filters: GetBanksFilters | undefined, data: GetBanksResponse): void {
  if (typeof window === 'undefined') return;
  try {
    const key = getBanksCacheKey(filters);
    sessionStorage.setItem(
      key,
      JSON.stringify({ data, expires: Date.now() + BANKS_CACHE_TTL_MS })
    );
  } catch {
    // ignore quota errors
  }
}

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
  getBanks: async (filters?: GetBanksFilters) => {
    const cached = getBanksFromStorage(filters);
    if (cached != null) return cached;
    const response = await apiClient.get(apiEndpoints.loan.banks, {
      params: filters,
    });
    setBanksInStorage(filters, response.data as GetBanksResponse);
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
    lenderId?: string;
    lenderName?: string;
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

export const authApi = {
  syncUser: async (data: {
    idToken: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
  }) => {
    const response = await apiClient.post(apiEndpoints.auth.sync, data);
    return response.data;
  },
  getUser: async (userId: string) => {
    const response = await apiClient.get(`${apiEndpoints.auth.getUser}/${userId}`);
    return response.data;
  },
};
