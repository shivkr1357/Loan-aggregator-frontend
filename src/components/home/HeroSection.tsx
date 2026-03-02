import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-green-300 font-semibold">⚡ Loans from ₹2,000 to ₹50 Lakhs • Approval in 2 Minutes</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Compare 20+ Lenders
            <br />
            <span className="text-primary-400">Find Your Best Loan Rate</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Compare rates from top banks and NBFCs. Quick approval, competitive rates (10.5% onwards),
            and flexible repayment options. <strong>No hidden charges.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/loans"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
            >
              Compare Loans →
            </Link>
            <Link
              href="/apply"
              className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition text-lg"
            >
              Apply Now
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Free Comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No Impact on Credit Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
