import Link from 'next/link';

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Kanpur',
];

export function TopCitiesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Loans Available in Your City
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Compare loan rates from lenders serving your city
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/city/${city.toLowerCase()}`}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center font-medium hover:text-primary-600"
            >
              Loans in {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
