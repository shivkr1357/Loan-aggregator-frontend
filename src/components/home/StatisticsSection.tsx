const statistics = [
  { value: '20+', label: 'Lenders Compared' },
  { value: '10.5%', label: 'Starting Interest Rate' },
  { value: '2 Min', label: 'Average Approval Time' },
  { value: '₹50L', label: 'Max Loan Amount' },
];

export function StatisticsSection() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
