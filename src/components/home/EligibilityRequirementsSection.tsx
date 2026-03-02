import Link from 'next/link';

const requirements = [
  {
    icon: '👔',
    title: 'Salaried Individuals',
    items: [
      'Minimum monthly income: ₹15,000 - ₹25,000 (varies by lender)',
      'Age: 21-60 years',
      'Minimum 6 months in current job',
      'CIBIL score: 650+ (some lenders accept lower)',
    ],
  },
  {
    icon: '💼',
    title: 'Self-Employed Professionals',
    items: [
      'Minimum annual income: ₹3-5 Lakhs',
      'Age: 25-65 years',
      'Business continuity: 2-3 years',
      'ITR filed for last 2 years',
    ],
  },
];

export function EligibilityRequirementsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who Can Apply for a Loan?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Most lenders have similar basic requirements. Check your eligibility in 30 seconds above.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">{req.icon}</span>
                {req.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Note:</strong> Requirements vary by lender and loan type. Use our eligibility checker above to see which lenders match your profile.
          </p>
          <Link
            href="/loans"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Compare All Lenders →
          </Link>
        </div>
      </div>
    </section>
  );
}
