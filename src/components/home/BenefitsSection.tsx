const benefits = [
  {
    title: 'Save Time & Effort',
    description:
      'Instead of visiting multiple bank websites or branches, compare all lenders in one place. Get instant results without leaving your home.',
  },
  {
    title: 'Save Money',
    description:
      'Compare interest rates and fees side-by-side. Even a 0.5% difference can save you thousands over the loan tenure.',
  },
  {
    title: 'No Credit Score Impact',
    description:
      "Checking eligibility and comparing rates doesn't affect your credit score. Only when you apply with a lender will they check your credit.",
  },
  {
    title: '100% Free',
    description:
      'Our service is completely free for users. We earn from lenders when you apply through us - you pay nothing extra.',
  },
  {
    title: 'Wide Range of Options',
    description:
      'Access loans from top banks (HDFC, ICICI, Axis) and leading NBFCs (Bajaj Finserv, etc.) all in one platform.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Using LoanPilot
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
