export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const apiEndpoints = {
  loan: {
    calculate: `${API_URL}/api/loan/calculate`,
    banks: `${API_URL}/api/loan/banks`,
  },
  leads: {
    create: `${API_URL}/api/leads`,
  },
  affiliate: {
    redirect: `${API_URL}/api/affiliate/redirect`,
  },
  analytics: {
    visit: `${API_URL}/api/analytics/visit`,
    summary: `${API_URL}/api/analytics/summary`,
  },
  admin: {
    dashboard: `${API_URL}/api/admin/dashboard`,
    leads: `${API_URL}/api/admin/leads`,
  },
  auth: {
    sync: `${API_URL}/api/auth/sync`,
    getUser: `${API_URL}/api/auth/user`,
  },
};
