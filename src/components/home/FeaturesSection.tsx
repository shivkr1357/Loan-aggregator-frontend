const features = [
  {
    icon: '⚡',
    title: 'Quick Approval',
    description: 'Get instant loan offers from multiple lenders in minutes. No waiting, no delays.',
  },
  {
    icon: '💰',
    title: 'Best Rates',
    description: 'Compare rates from top banks and NBFCs. Find the best deal that saves you money.',
  },
  {
    icon: '🔒',
    title: 'Secure & Safe',
    description: 'Your data is encrypted and secure. We never share without your explicit consent.',
  },
  {
    icon: '📊',
    title: 'Transparent Comparison',
    description: 'See all fees, rates, and terms upfront. No hidden charges, no surprises.',
  },
  {
    icon: '🏙️',
    title: 'Pan-India Coverage',
    description: 'Loans available in 20+ major cities across India. Check eligibility for your city.',
  },
  {
    icon: '✅',
    title: 'Free Service',
    description: 'Compare loans for free. We don\'t charge users - lenders pay us, not you.',
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Our algorithm matches you with lenders based on your profile and requirements.',
  },
  {
    icon: '📱',
    title: 'Easy Application',
    description: 'Simple online form. No paperwork, no branch visits. Apply from anywhere.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose LoanPilot?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
