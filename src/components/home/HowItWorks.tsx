export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Check Eligibility',
      description: 'Enter your income, city, and loan amount. Get instant eligibility results from 20+ lenders in 30 seconds.',
    },
    {
      number: 2,
      title: 'Compare & Choose',
      description: 'Compare interest rates, processing fees, and terms side-by-side. Choose the best lender for your needs.',
    },
    {
      number: 3,
      title: 'Apply & Get Approved',
      description: 'Fill a simple form and get redirected to your chosen lender. Approval can happen in as little as 2 minutes.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works - Get Your Loan in 3 Simple Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
