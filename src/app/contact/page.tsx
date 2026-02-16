import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = genMeta({
  title: 'Contact Us - LoanPilot',
  description: 'Get in touch with LoanPilot. Contact our support team for loan inquiries, technical assistance, or general questions.',
  canonical: 'https://loanpilot.in/contact',
  noindex: false,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-navy-900 text-center">
            Contact Us
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-8 text-center text-lg">
              Have questions or need assistance? We&apos;re here to help! Reach out to us through any of the following channels.
            </p>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-navy-900">
                    Email Support
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  For general inquiries, loan questions, or technical support:
                </p>
                <a
                  href="mailto:contact@loanpilot.in"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg block mb-2"
                >
                  contact@loanpilot.in
                </a>
                <p className="text-sm text-gray-600">
                  We typically respond within 24-48 hours
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-navy-900">
                    Grievance Officer
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  For complaints, grievances, or regulatory concerns:
                </p>
                <a
                  href="mailto:grievance@loanpilot.in"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg block mb-2"
                >
                  grievance@loanpilot.in
                </a>
                <p className="text-sm text-gray-600">
                  Response within 48 hours, resolution within 30 days
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM to 6:00 PM IST
                </p>
                <p>
                  <strong>Saturday:</strong> 10:00 AM to 2:00 PM IST
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Note: Email inquiries are monitored throughout the week, but responses may take longer during weekends and holidays.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">
                Quick Links
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/support"
                  className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition flex items-center"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy-900">Support Center</h4>
                    <p className="text-sm text-gray-600">FAQs and help articles</p>
                  </div>
                </Link>

                <Link
                  href="/loans"
                  className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition flex items-center"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy-900">Compare Loans</h4>
                    <p className="text-sm text-gray-600">Find the best loan rates</p>
                  </div>
                </Link>

                <Link
                  href="/privacy"
                  className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition flex items-center"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy-900">Privacy Policy</h4>
                    <p className="text-sm text-gray-600">How we protect your data</p>
                  </div>
                </Link>

                <Link
                  href="/terms"
                  className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition flex items-center"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy-900">Terms & Conditions</h4>
                    <p className="text-sm text-gray-600">Read our terms of service</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">
                Additional Information
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Address:</strong> LoanPilot, [Your Business Address], India
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://loanpilot.in"
                    className="text-primary-600 hover:underline"
                  >
                    https://loanpilot.in
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  For urgent matters or if you haven&apos;t received a response within the expected timeframe, please feel free to follow up via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
