'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { logEvent } from '@/lib/firebase';

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useUserAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      logEvent('page_view', { page: 'dashboard' });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>

        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-lg font-semibold">
                {user.displayName || 'Not provided'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Extra Features for Logged-in Users */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">💾 Saved Applications</h3>
            <p className="text-gray-600 mb-4">
              View and manage your saved loan applications.
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              View Applications
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">📊 Loan History</h3>
            <p className="text-gray-600 mb-4">
              Track your loan application history and status.
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              View History
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">🔔 Notifications</h3>
            <p className="text-gray-600 mb-4">
              Get notified about new loan offers and updates.
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              Manage Notifications
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">⭐ Favorites</h3>
            <p className="text-gray-600 mb-4">
              Save your favorite lenders for quick access.
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              View Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
