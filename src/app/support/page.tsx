import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = genMeta({
  title: 'Support & Help Center - LoanPilot',
  description: 'Get help and support for LoanPilot. Find answers to frequently asked questions, contact our support team, and access helpful resources.',
  canonical: 'https://loanpilot.in/support',
  noindex: false,
});

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-navy-900 text-center">
            Support & Help Center
          </h1>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-navy-900">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-navy-900">
                  Email Support
                </h3>
                <p className="text-gray-700 mb-2">
                  For general inquiries and support:
                </p>
                <a
                  href="mailto:contact@loanpilot.in"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  contact@loanpilot.in
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  We typically respond within 24-48 hours
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-navy-900">
                  Grievance Officer
                </h3>
                <p className="text-gray-700 mb-2">
                  For complaints and grievances:
                </p>
                <a
                  href="mailto:grievance@loanpilot.in"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  grievance@loanpilot.in
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Response within 48 hours, resolution within 30 days
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-navy-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  What is LoanPilot?
                </h3>
                <p className="text-gray-700">
                  LoanPilot is a loan aggregation platform that helps you compare personal loan offers from multiple lenders including banks and NBFCs. We connect borrowers with suitable lenders and provide tools like EMI calculators to help you make informed decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  Is LoanPilot a lender?
                </h3>
                <p className="text-gray-700">
                  No, LoanPilot is not a lender. We are a loan aggregator platform that connects borrowers with licensed lenders. We do not provide loans directly, make credit decisions, or guarantee loan approvals. All loan decisions are made by the lenders.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  How much does it cost to use LoanPilot?
                </h3>
                <p className="text-gray-700">
                  Our services are completely free for borrowers. We do not charge any fees for using our comparison tools, submitting loan applications, or accessing loan information. However, lenders may charge processing fees and other charges as per their terms and conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  How do I apply for a loan?
                </h3>
                <p className="text-gray-700 mb-2">
                  To apply for a loan:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  <li>Visit our <Link href="/loans" className="text-primary-600 hover:underline">Compare Loans</Link> page</li>
                  <li>Use our filters to find suitable loan offers</li>
                  <li>Click on &quot;Apply Now&quot; for your preferred lender</li>
                  <li>Fill out the application form with accurate information</li>
                  <li>Submit your application and wait for lender response</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  What information do I need to apply?
                </h3>
                <p className="text-gray-700">
                  You&apos;ll typically need: Full name, email address, phone number, date of birth, PAN card number, address proof, income proof, employment details, and bank account information. Specific requirements may vary by lender.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  How long does loan approval take?
                </h3>
                <p className="text-gray-700">
                  Loan approval times vary by lender. Some lenders offer instant pre-approval, while others may take 24-72 hours for initial review. Complete processing and disbursement typically takes 3-7 business days after approval, depending on document verification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  Will applying through LoanPilot affect my credit score?
                </h3>
                <p className="text-gray-700">
                  When you apply for a loan, lenders may perform a credit check which can result in a hard inquiry on your credit report. Multiple hard inquiries within a short period may temporarily impact your credit score. We recommend applying only when you&apos;re serious about taking a loan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  Is my information secure?
                </h3>
                <p className="text-gray-700">
                  Yes, we take data security seriously. We use industry-standard encryption (SSL/TLS) to protect your information during transmission. Your data is stored securely and shared only with lenders you choose to apply with. Please read our <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> for more details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  Can I cancel my loan application?
                </h3>
                <p className="text-gray-700">
                  Yes, you can cancel your application before it&apos;s approved by the lender. However, once a loan is approved and disbursed, you&apos;ll need to follow the lender&apos;s cancellation and prepayment policies. Contact the lender directly for cancellation procedures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  What if I have a complaint?
                </h3>
                <p className="text-gray-700">
                  If you have any complaints or grievances, please contact our Grievance Officer at <a href="mailto:grievance@loanpilot.in" className="text-primary-600 hover:underline">grievance@loanpilot.in</a>. We will acknowledge your complaint within 48 hours and resolve it within 30 days as per regulatory requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  Which lenders are available on LoanPilot?
                </h3>
                <p className="text-gray-700">
                  We partner with various licensed lenders including major banks, NBFCs, and other financial institutions regulated by the Reserve Bank of India (RBI). The available lenders may vary based on your location, credit profile, and loan requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">
                  How accurate is the EMI calculator?
                </h3>
                <p className="text-gray-700">
                  Our EMI calculator provides estimates based on the information you provide. The actual EMI may vary based on the lender&apos;s final interest rate, processing fees, and other charges. Always verify the final terms with your chosen lender before accepting a loan offer.
                </p>
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-navy-900">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/loans"
                className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-navy-900">
                  Compare Loans
                </h3>
                <p className="text-gray-700 text-sm">
                  Compare loan offers from multiple lenders
                </p>
              </Link>
              <Link
                href="/apply"
                className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-navy-900">
                  Apply for Loan
                </h3>
                <p className="text-gray-700 text-sm">
                  Submit your loan application online
                </p>
              </Link>
              <Link
                href="/privacy"
                className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-navy-900">
                  Privacy Policy
                </h3>
                <p className="text-gray-700 text-sm">
                  Learn how we protect your data
                </p>
              </Link>
              <Link
                href="/terms"
                className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-navy-900">
                  Terms & Conditions
                </h3>
                <p className="text-gray-700 text-sm">
                  Read our terms of service
                </p>
              </Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-navy-900">
              Still Need Help?
            </h2>
            <p className="text-gray-700 mb-6">
              If you couldn&apos;t find the answer you&apos;re looking for, please contact us directly:
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@loanpilot.in"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  contact@loanpilot.in
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Response Time:</strong> We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
              <p className="text-gray-700">
                <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
