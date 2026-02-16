import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = genMeta({
  title: 'Disclaimer - LoanPilot',
  description: 'Important disclaimer about LoanPilot\'s services. Understand that we are a loan aggregator platform and not a lender. Read our complete disclaimer.',
  canonical: 'https://loanpilot.in/disclaimer',
  noindex: false,
});

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-navy-900">
            Disclaimer
          </h1>
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="prose max-w-none">
            {/* Important Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-lg font-semibold text-yellow-800 mb-2">
                ⚠️ Important Notice
              </p>
              <p className="text-yellow-800">
                LoanPilot is NOT a lender, bank, or financial institution. We are a loan aggregation platform that connects borrowers with licensed lenders. We do not provide loans directly, make credit decisions, or guarantee loan approvals.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                1. Nature of Service
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot operates as a loan aggregation and comparison platform. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Providing loan comparison tools and EMI calculators</li>
                <li>Displaying loan offers from various lenders</li>
                <li>Facilitating connections between borrowers and lenders</li>
                <li>Providing educational content about loans and financial products</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>We do NOT:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide loans directly or act as a lender</li>
                <li>Make credit decisions or loan approvals</li>
                <li>Set interest rates, fees, or loan terms</li>
                <li>Guarantee loan approval or specific loan amounts</li>
                <li>Act as an agent or representative of any lender</li>
                <li>Provide financial advice or recommendations</li>
                <li>Process loan disbursements or handle loan repayments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                2. Lender Information and Loan Offers
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>2.1 Accuracy of Information</strong>
              </p>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date information about loan products and lenders, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The accuracy, completeness, or timeliness of loan offers displayed</li>
                <li>That all loan offers are currently available or valid</li>
                <li>That interest rates, fees, or terms shown are final or binding</li>
                <li>That lenders will approve your loan application</li>
                <li>That loan terms will match those displayed on our platform</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All loan information is provided by lenders and is subject to change without notice. We recommend verifying all loan details directly with the lender before making any decisions.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>2.2 Lender Relationships</strong>
              </p>
              <p className="text-gray-700 mb-4">
                LoanPilot partners with various licensed lenders including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Banks regulated by the Reserve Bank of India (RBI)</li>
                <li>Non-Banking Financial Companies (NBFCs) licensed by RBI</li>
                <li>Other financial institutions authorized to provide loans</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, we:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Do not endorse or recommend any specific lender</li>
                <li>Are not responsible for lender actions, decisions, or services</li>
                <li>Do not guarantee the quality, reliability, or performance of lenders</li>
                <li>Are not liable for any disputes between borrowers and lenders</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                3. Loan Approval and Terms
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>3.1 No Guarantee of Approval</strong>
              </p>
              <p className="text-gray-700 mb-4">
                LoanPilot does not guarantee that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your loan application will be approved</li>
                <li>You will receive a loan offer</li>
                <li>You will qualify for the loan amounts or terms displayed</li>
                <li>Lenders will contact you after you submit an application</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Loan approval decisions are made solely by lenders based on their own eligibility criteria, credit policies, and risk assessment. Each lender evaluates applications independently and may have different requirements.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>3.2 Loan Terms and Conditions</strong>
              </p>
              <p className="text-gray-700 mb-4">
                All loan terms, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Interest rates and Annual Percentage Rate (APR)</li>
                <li>Processing fees and other charges</li>
                <li>Loan tenure and repayment schedules</li>
                <li>Prepayment and foreclosure charges</li>
                <li>Late payment fees and penalties</li>
                <li>Eligibility criteria and documentation requirements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Are determined solely by the lenders and may differ from what is displayed on our platform. Final loan terms will be communicated by the lender upon approval. You must carefully review and understand all terms before accepting any loan offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                4. EMI Calculator and Tools
              </h2>
              <p className="text-gray-700 mb-4">
                Our EMI calculator and other financial tools are provided for informational and estimation purposes only. These tools:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide estimates based on the information you input</li>
                <li>May not reflect actual loan terms offered by lenders</li>
                <li>Do not account for all fees, charges, or special conditions</li>
                <li>Are not binding or guaranteed by lenders</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Actual EMI amounts, interest rates, and total loan costs may vary significantly based on:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your credit score and credit history</li>
                <li>Your income and employment status</li>
                <li>Lender&apos;s final assessment and policies</li>
                <li>Market conditions and interest rate fluctuations</li>
                <li>Additional fees and charges not included in estimates</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Always verify calculations and loan terms directly with your chosen lender before making any financial commitments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                5. Financial Advice Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot does not provide financial, legal, or tax advice. The information provided on our platform:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Is for general informational purposes only</li>
                <li>Should not be considered as professional financial advice</li>
                <li>Does not constitute recommendations or endorsements</li>
                <li>May not be suitable for your specific financial situation</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Before making any financial decisions, including taking a loan, we strongly recommend:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Consulting with a qualified financial advisor</li>
                <li>Reviewing your financial situation and ability to repay</li>
                <li>Reading and understanding all loan terms and conditions</li>
                <li>Comparing multiple loan offers from different lenders</li>
                <li>Considering alternative financing options</li>
                <li>Understanding the total cost of borrowing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, LoanPilot shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Any loan rejections or approval decisions made by lenders</li>
                <li>Any losses, damages, or costs arising from loan agreements between borrowers and lenders</li>
                <li>Inaccuracies, errors, or omissions in loan information displayed on our platform</li>
                <li>Changes in loan terms, interest rates, or availability after information is displayed</li>
                <li>Lender actions, services, or business practices</li>
                <li>Disputes, claims, or legal issues between borrowers and lenders</li>
                <li>Financial losses resulting from loan decisions or loan defaults</li>
                <li>Technical issues, system failures, or interruptions in service</li>
                <li>Unauthorized access to or use of your information by third parties</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your use of our platform and any loan applications submitted are at your own risk. You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Evaluating loan offers and making borrowing decisions</li>
                <li>Verifying all loan terms and conditions with lenders</li>
                <li>Ensuring you can meet loan repayment obligations</li>
                <li>Complying with all loan agreement terms</li>
                <li>Protecting your personal and financial information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                7. Third-Party Content and Links
              </h2>
              <p className="text-gray-700 mb-4">
                Our platform may contain:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Links to lender websites and third-party resources</li>
                <li>Content provided by lenders or third parties</li>
                <li>Advertisements or promotional materials</li>
                <li>User-generated content or reviews</li>
              </ul>
              <p className="text-gray-700 mb-4">
                LoanPilot is not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The content, accuracy, or availability of third-party websites</li>
                <li>The privacy practices or policies of third-party sites</li>
                <li>Products, services, or information offered by third parties</li>
                <li>Any transactions or interactions with third parties</li>
                <li>The accuracy or reliability of user reviews or ratings</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your interactions with lenders and third parties are solely between you and those parties. We encourage you to review the terms, privacy policies, and practices of any third-party websites or services you access.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                8. Regulatory Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot operates in compliance with applicable Indian laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Reserve Bank of India (RBI) Guidelines:</strong> We comply with RBI guidelines for digital lending platforms and loan aggregators</li>
                <li><strong>Consumer Protection Act, 2019:</strong> We adhere to consumer protection requirements</li>
                <li><strong>Information Technology Act, 2000:</strong> We comply with data protection and cybersecurity requirements</li>
                <li><strong>Fair Practices Code:</strong> We follow fair lending practices and transparency requirements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, this disclaimer does not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Create any regulatory obligations beyond those required by law</li>
                <li>Guarantee compliance by lenders on our platform</li>
                <li>Provide any regulatory protection or guarantees</li>
                <li>Constitute regulatory approval or endorsement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                9. Data and Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                While we implement security measures to protect your information, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Absolute security of data transmission or storage</li>
                <li>Protection against all security threats or breaches</li>
                <li>That your information will not be accessed by unauthorized parties</li>
                <li>How lenders or third parties will use or protect your information</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When you submit a loan application, you authorize us to share your information with potential lenders. We are not responsible for how lenders handle, use, or protect your information. Please review our <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> and lender privacy policies before submitting applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                10. Service Availability and Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot reserves the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Modify, suspend, or discontinue any part of our services at any time</li>
                <li>Change loan information, lender listings, or platform features</li>
                <li>Update terms, conditions, or disclaimers without prior notice</li>
                <li>Restrict access to certain features or services</li>
                <li>Remove or modify lender partnerships or loan offers</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not guarantee that our services will be:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Available at all times or without interruption</li>
                <li>Free from errors, bugs, or technical issues</li>
                <li>Compatible with all devices or browsers</li>
                <li>Secure from all security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                11. User Responsibilities
              </h2>
              <p className="text-gray-700 mb-4">
                By using LoanPilot&apos;s services, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You are responsible for evaluating loan offers and making informed decisions</li>
                <li>You will verify all loan terms and conditions directly with lenders</li>
                <li>You understand that loan approval is not guaranteed</li>
                <li>You will provide accurate and truthful information in loan applications</li>
                <li>You have the legal capacity and authority to enter into loan agreements</li>
                <li>You will comply with all loan agreement terms and repayment obligations</li>
                <li>You will seek professional advice if needed before making financial decisions</li>
                <li>You use our services at your own risk</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                12. Indemnification
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless LoanPilot, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your use or misuse of our services</li>
                <li>Your loan applications or loan agreements with lenders</li>
                <li>Your violation of any terms, conditions, or laws</li>
                <li>False or inaccurate information provided by you</li>
                <li>Your failure to repay loans or meet loan obligations</li>
                <li>Any disputes between you and lenders</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                13. Changes to Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes acceptance of the updated disclaimer.
              </p>
              <p className="text-gray-700 mb-4">
                We recommend reviewing this disclaimer periodically to stay informed about our policies and limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                14. Contact and Grievances
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this disclaimer or need to file a complaint, please contact us:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@loanpilot.in" className="text-primary-600 hover:underline">
                    contact@loanpilot.in
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Grievance Officer:</strong>{' '}
                  <a href="mailto:grievance@loanpilot.in" className="text-primary-600 hover:underline">
                    grievance@loanpilot.in
                  </a>
                </p>
                <p className="text-gray-700">
                  For more information, please visit our <Link href="/support" className="text-primary-600 hover:underline">Support Center</Link> or <Link href="/contact" className="text-primary-600 hover:underline">Contact Us</Link> page.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                15. Acknowledgment
              </h2>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  By using LoanPilot&apos;s services, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-800 space-y-1">
                  <li>You have read, understood, and agree to this disclaimer</li>
                  <li>You understand that LoanPilot is not a lender</li>
                  <li>You understand that loan approval is not guaranteed</li>
                  <li>You will verify all loan terms with lenders before accepting offers</li>
                  <li>You are responsible for your own financial decisions</li>
                  <li>You will seek professional advice if needed</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
