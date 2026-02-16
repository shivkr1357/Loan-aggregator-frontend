import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy - LoanPilot',
  description: 'Read LoanPilot\'s comprehensive privacy policy. Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws.',
  canonical: 'https://loanpilot.in/privacy',
  noindex: false,
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-navy-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our loan aggregation platform and services.
              </p>
              <p className="text-gray-700 mb-4">
                By accessing or using LoanPilot&apos;s website, mobile application, or services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Register for an account or create a profile</li>
                <li>Submit a loan application or inquiry</li>
                <li>Use our loan comparison tools and EMI calculator</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our newsletters or marketing communications</li>
                <li>Participate in surveys or promotional activities</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Identity Information:</strong> Full name, date of birth, PAN card number, Aadhaar number (if required by lenders)</li>
                <li><strong>Contact Information:</strong> Email address, phone number, residential address, city, state, PIN code</li>
                <li><strong>Financial Information:</strong> Monthly income, employment type, employment details, bank account details, credit history (if provided)</li>
                <li><strong>Loan Information:</strong> Desired loan amount, loan purpose, preferred tenure, existing loans or liabilities</li>
                <li><strong>Documentation:</strong> Identity proofs, address proofs, income proofs, bank statements (uploaded documents)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you visit our website or use our services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system, unique device identifiers</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on pages, click patterns, search queries, referral sources</li>
                <li><strong>Location Information:</strong> General location data (city/state level) based on IP address</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance your experience and analyze usage patterns</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                2.3 Information from Third Parties
              </h3>
              <p className="text-gray-700 mb-4">
                We may receive information about you from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Lenders and Financial Institutions:</strong> Loan application status, approval/rejection information, loan terms offered</li>
                <li><strong>Credit Bureaus:</strong> Credit scores, credit reports (with your explicit consent)</li>
                <li><strong>Authentication Providers:</strong> Google, Facebook, or other social media platforms (when you use social login)</li>
                <li><strong>Analytics Providers:</strong> Aggregated usage statistics and user behavior data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Loan Aggregation Services:</strong> To match you with suitable lenders, compare loan offers, and facilitate loan applications</li>
                <li><strong>Service Delivery:</strong> To process your loan applications, provide EMI calculations, and deliver requested services</li>
                <li><strong>Communication:</strong> To send you loan offers, application updates, important notices, and respond to your inquiries</li>
                <li><strong>Account Management:</strong> To create and manage your account, authenticate your identity, and maintain your profile</li>
                <li><strong>Improvement of Services:</strong> To analyze usage patterns, improve our platform, develop new features, and enhance user experience</li>
                <li><strong>Marketing and Promotions:</strong> To send you promotional offers, newsletters, and marketing communications (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and government requests</li>
                <li><strong>Fraud Prevention:</strong> To detect, prevent, and address fraud, security threats, and unauthorized access</li>
                <li><strong>Analytics and Research:</strong> To conduct market research, analyze trends, and generate statistical reports</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.1 With Lenders and Financial Partners
              </h3>
              <p className="text-gray-700 mb-4">
                When you apply for a loan or express interest in a loan product, we share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Banks, Non-Banking Financial Companies (NBFCs), and other licensed lenders</li>
                <li>Our partner financial institutions for loan processing and evaluation</li>
                <li>Affiliate networks and loan referral partners</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Note:</strong> By submitting a loan application, you explicitly consent to sharing your information with potential lenders for loan evaluation and processing purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.2 With Service Providers
              </h3>
              <p className="text-gray-700 mb-4">
                We may share information with third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Cloud hosting and data storage</li>
                <li>Payment processing and transaction management</li>
                <li>Email delivery and communication services</li>
                <li>Analytics and data analysis</li>
                <li>Customer support and helpdesk services</li>
                <li>Marketing and advertising services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.3 Legal Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Applicable laws, regulations, or legal processes</li>
                <li>Court orders, subpoenas, or government requests</li>
                <li>Regulatory authorities including the Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI)</li>
                <li>Law enforcement agencies for investigation purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.4 Business Transfers
              </h3>
              <p className="text-gray-700 mb-4">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.5 With Your Consent
              </h3>
              <p className="text-gray-700 mb-4">
                We may share your information with third parties when you explicitly consent to such sharing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using SSL/TLS protocols</li>
                <li><strong>Secure Storage:</strong> Personal information is stored in secure databases with restricted access</li>
                <li><strong>Access Controls:</strong> Only authorized personnel with a legitimate business need can access your information</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                <li><strong>Data Backup:</strong> Regular backups are maintained to prevent data loss</li>
                <li><strong>Incident Response:</strong> We have procedures in place to respond to security incidents</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 mb-4">
                Under applicable Indian laws and regulations, you have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information held by us</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and contractual obligations)</li>
                <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing of personal information (where consent is the legal basis)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at <a href="mailto:contact@loanpilot.in" className="text-primary-600 hover:underline">contact@loanpilot.in</a> or use the contact form on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and user experience</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. However, disabling cookies may limit certain features of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                8. Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide our services and fulfill contractual obligations</li>
                <li>Comply with legal and regulatory requirements (including RBI guidelines)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain records for audit and compliance purposes</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Typically, we retain loan application data for a minimum of 7 years as required by Indian banking and financial regulations. After the retention period, we securely delete or anonymize your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                10. Third-Party Links
              </h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites, including lender websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                11. Regulatory Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot operates in compliance with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Reserve Bank of India (RBI) Guidelines:</strong> We adhere to RBI guidelines for digital lending and loan aggregators</li>
                <li><strong>Information Technology Act, 2000:</strong> Compliance with data protection and cybersecurity requirements</li>
                <li><strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011:</strong> Protection of sensitive personal data</li>
                <li><strong>Consumer Protection Act, 2019:</strong> Protection of consumer rights and interests</li>
                <li><strong>Fair Practices Code:</strong> Adherence to fair lending practices and transparency</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Posting the updated policy on our website with a new &quot;Last Updated&quot; date</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                13. Grievance Redressal
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any concerns, complaints, or grievances regarding our privacy practices or handling of your personal information, please contact our Grievance Officer:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Grievance Officer</strong>
                </p>
                <p className="text-gray-700 mb-1">LoanPilot</p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:grievance@loanpilot.in" className="text-primary-600 hover:underline">grievance@loanpilot.in</a></p>
                <p className="text-gray-700 mb-1">Phone: +91-XXXXXXXXXX</p>
                <p className="text-gray-700">
                  We will acknowledge your complaint within 48 hours and resolve it within 30 days as per regulatory requirements.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                14. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>LoanPilot</strong>
                </p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:contact@loanpilot.in" className="text-primary-600 hover:underline">contact@loanpilot.in</a></p>
                <p className="text-gray-700 mb-1">Website: <a href="https://loanpilot.in" className="text-primary-600 hover:underline">https://loanpilot.in</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
