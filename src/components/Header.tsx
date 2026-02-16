import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-navy-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            LoanPilot
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary-400 transition">
              Home
            </Link>
            <Link href="/loans" className="hover:text-primary-400 transition">
              Compare Loans
            </Link>
            <Link href="/apply" className="hover:text-primary-400 transition">
              Apply Now
            </Link>
            <Link href="/admin" className="hover:text-primary-400 transition">
              Admin
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
