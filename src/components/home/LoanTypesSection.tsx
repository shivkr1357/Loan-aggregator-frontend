import Link from 'next/link';

const loanTypes = [
  {
    type: 'personal',
    icon: '💼',
    title: 'Personal Loan',
    description: '₹50K - ₹50L • 10.5% - 24% interest • Quick approval for any personal need',
  },
  {
    type: 'home',
    icon: '🏠',
    title: 'Home Loan',
    description: '₹5L - ₹5Cr • 8.5% - 12.5% interest • Up to 20 years tenure',
  },
  {
    type: 'car',
    icon: '🚗',
    title: 'Car Loan',
    description: '₹1L - ₹50L • 8% - 14% interest • Flexible repayment options',
  },
  {
    type: 'bike',
    icon: '🏍️',
    title: 'Bike Loan',
    description: '₹25K - ₹5L • 9% - 16% interest • Low down payment options',
  },
  {
    type: 'business',
    icon: '💼',
    title: 'Business Loan',
    description: '₹1L - ₹50L • 11% - 20% interest • For salaried & self-employed',
  },
  {
    type: 'education',
    icon: '🎓',
    title: 'Education Loan',
    description: '₹50K - ₹50L • 8.5% - 15% interest • Study in India or abroad',
  },
];

export function LoanTypesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          All Types of Loans Available
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you need funds for personal use, buying a vehicle, home, business, or education, we've got you covered.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => (
            <Link
              key={loan.type}
              href={`/loans?loanType=${loan.type}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <div className="text-4xl mb-3">{loan.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600">{loan.title}</h3>
              <p className="text-gray-600 mb-4">{loan.description}</p>
              <span className="text-primary-600 font-semibold">Compare Rates →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
