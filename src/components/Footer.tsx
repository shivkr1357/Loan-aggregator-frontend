import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/Logo.svg';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto text-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for finding the best personal loan rates.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/loans" className="text-gray-400 hover:text-white">
                  Compare Loans
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-400 hover:text-white"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-400">support@loanpilot.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} LoanPilot. All rights reserved.
          </p>
          <p className="mt-2">
            We are not a lender. We connect users with lending partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
