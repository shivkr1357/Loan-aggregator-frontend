import Link from 'next/link';
import { useUserAuth } from '@/contexts/UserAuthContext';

export function CTASection() {
  const { user } = useUserAuth();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Perfect Loan?
        </h2>
        <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
          Join thousands of users who found their best loan rates. Compare 20+ lenders, check eligibility instantly, and get approved in minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link
            href="/loans"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition inline-block text-lg"
          >
            Compare Loans Now →
          </Link>
          <Link
            href="/apply"
            className="bg-primary-800 text-white hover:bg-primary-900 px-8 py-3 rounded-lg font-semibold transition inline-block text-lg border-2 border-white"
          >
            Apply Now
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-100">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>No Hidden Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Free Comparison</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Secure & Safe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
