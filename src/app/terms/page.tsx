import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Terms & Conditions - LoanPilot',
  description: 'Read LoanPilot\'s terms and conditions. Understand your rights and responsibilities when using our loan aggregation platform and services.',
  canonical: 'https://loanpilot.in/terms',
  noindex: false,
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-navy-900">
            Terms & Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to LoanPilot (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of LoanPilot&apos;s website, mobile application, and services (collectively, the &quot;Services&quot;). By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-700 mb-4">
                If you do not agree to these Terms, you must not access or use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                2. About LoanPilot
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot is a loan aggregation platform that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provides comparison services for personal loans from various lenders</li>
                <li>Facilitates connections between borrowers and lenders</li>
                <li>Offers loan-related tools including EMI calculators and loan comparison features</li>
                <li>Provides information and educational content about loans and financial products</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> LoanPilot is NOT a lender, bank, or financial institution. We do not provide loans directly, make credit decisions, or guarantee loan approvals. We act solely as an intermediary platform connecting borrowers with potential lenders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                3. Eligibility and Account Registration
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                3.1 Eligibility Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                3.2 Account Registration
              </h3>
              <p className="text-gray-700 mb-4">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide accurate, truthful, and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Not share your account credentials with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                4. Use of Services
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.1 Permitted Use
              </h3>
              <p className="text-gray-700 mb-4">
                You may use our Services for lawful purposes only, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Comparing loan offers from different lenders</li>
                <li>Submitting loan applications to lenders through our platform</li>
                <li>Using our loan calculators and comparison tools</li>
                <li>Accessing educational content about loans and financial products</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                4.2 Prohibited Activities
              </h3>
              <p className="text-gray-700 mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Use the Services for any illegal, fraudulent, or unauthorized purpose</li>
                <li>Provide false, misleading, or inaccurate information</li>
                <li>Impersonate any person or entity or misrepresent your identity</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the Services or servers connected to the Services</li>
                <li>Use automated systems (bots, scrapers) to access the Services without permission</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Transmit viruses, malware, or any harmful code</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Services to harass, abuse, or harm others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                5. Loan Applications and Processing
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                5.1 Application Process
              </h3>
              <p className="text-gray-700 mb-4">
                When you submit a loan application through our platform:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You authorize us to share your information with potential lenders</li>
                <li>You understand that lenders will evaluate your application based on their own criteria</li>
                <li>We do not guarantee loan approval or specific loan terms</li>
                <li>Loan approval, interest rates, and terms are determined solely by the lenders</li>
                <li>You may be contacted by multiple lenders based on your application</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                5.2 Lender Relationships
              </h3>
              <p className="text-gray-700 mb-4">
                LoanPilot partners with various lenders including banks, NBFCs, and other licensed financial institutions. We:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Do not endorse or recommend any specific lender</li>
                <li>Do not guarantee the quality, accuracy, or availability of lender services</li>
                <li>Are not responsible for lender decisions, loan terms, or loan servicing</li>
                <li>Do not act as an agent or representative of any lender</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                5.3 Loan Terms and Conditions
              </h3>
              <p className="text-gray-700 mb-4">
                All loan terms, including interest rates, fees, repayment schedules, and conditions, are determined by the lender. You must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Read and understand the lender&apos;s terms and conditions before accepting any loan offer</li>
                <li>Verify all loan details directly with the lender</li>
                <li>Ensure you can meet the repayment obligations before accepting a loan</li>
                <li>Comply with all loan agreement terms once you accept a loan offer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                6. Fees and Charges
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Our Fees:</strong> LoanPilot&apos;s services are free for borrowers. We do not charge any fees for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Using our comparison tools and calculators</li>
                <li>Submitting loan applications through our platform</li>
                <li>Accessing loan information and educational content</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Lender Fees:</strong> Lenders may charge various fees including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Processing fees</li>
                <li>Prepayment charges</li>
                <li>Late payment fees</li>
                <li>Other charges as per their terms and conditions</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All lender fees are disclosed by the lender and are your responsibility. We recommend reviewing all fees before accepting any loan offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                7. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of the Services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Text, graphics, logos, icons, images, audio clips, and software</li>
                <li>Website design, layout, and user interface</li>
                <li>Trademarks, service marks, and trade names</li>
                <li>Proprietary algorithms and technology</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Are owned by LoanPilot or its licensors and are protected by Indian and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content from our Services without our prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                8. Disclaimers and Limitations of Liability
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                8.1 Service Disclaimers
              </h3>
              <p className="text-gray-700 mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties regarding the accuracy, completeness, or reliability of information</li>
                <li>Warranties that the Services will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding loan approval, interest rates, or loan terms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                8.2 Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOANPILOT SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use the Services</li>
                <li>Lender decisions, loan rejections, or loan terms</li>
                <li>Errors, omissions, or inaccuracies in information provided</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising from the Services shall not exceed the amount you paid to us (if any) in the 12 months preceding the claim, or INR 1,000, whichever is greater.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                9. Indemnification
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless LoanPilot, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your use or misuse of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law or regulation</li>
                <li>Your infringement of any third-party rights</li>
                <li>False or inaccurate information provided by you</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                10. Regulatory Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                LoanPilot operates in compliance with applicable Indian laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Reserve Bank of India (RBI) Guidelines:</strong> We comply with RBI guidelines for digital lending platforms and loan aggregators</li>
                <li><strong>Fair Practices Code:</strong> We adhere to fair lending practices and transparency requirements</li>
                <li><strong>Consumer Protection Act, 2019:</strong> We protect consumer rights and interests</li>
                <li><strong>Information Technology Act, 2000:</strong> We comply with data protection and cybersecurity requirements</li>
                <li><strong>Prevention of Money Laundering Act (PMLA):</strong> We comply with KYC and AML requirements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All lenders on our platform are licensed and regulated by appropriate authorities including RBI, SEBI, or other relevant regulatory bodies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                11. Data Protection and Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our Privacy Policy.
              </p>
              <p className="text-gray-700 mb-4">
                We implement reasonable security measures to protect your information, but we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                12. Third-Party Links and Services
              </h2>
              <p className="text-gray-700 mb-4">
                Our Services may contain links to third-party websites, including lender websites. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The content, accuracy, or opinions expressed on third-party websites</li>
                <li>The privacy practices or policies of third-party websites</li>
                <li>The products or services offered by third parties</li>
                <li>Any transactions between you and third parties</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your interactions with third parties are solely between you and the third party. We encourage you to review the terms and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                13. Termination
              </h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to the Services at any time, with or without cause or notice, for any reason including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Providing false or misleading information</li>
                <li>Request by law enforcement or regulatory authorities</li>
                <li>Discontinuation of the Services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You may terminate your account at any time by contacting us or using account deletion features (if available). Upon termination, your right to use the Services will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                14. Dispute Resolution and Governing Law
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                14.1 Governing Law
              </h3>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                14.2 Jurisdiction
              </h3>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction of the courts in [City, State], India.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                14.3 Dispute Resolution Process
              </h3>
              <p className="text-gray-700 mb-4">
                In case of any dispute:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                <li>Parties shall attempt to resolve disputes through good faith negotiations</li>
                <li>If unresolved, disputes may be referred to mediation</li>
                <li>As a last resort, disputes may be resolved through arbitration under the Arbitration and Conciliation Act, 2015</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                15. Grievance Redressal
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any complaints, concerns, or grievances regarding our Services, please contact our Grievance Officer:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Grievance Officer</strong>
                </p>
                <p className="text-gray-700 mb-1">LoanPilot</p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:grievance@loanpilot.in" className="text-primary-600 hover:underline">grievance@loanpilot.in</a></p>
                <p className="text-gray-700 mb-1">Phone: +91-XXXXXXXXXX</p>
                <p className="text-gray-700 mb-2">
                  We will acknowledge your complaint within 48 hours and resolve it within 30 days as per regulatory requirements.
                </p>
                <p className="text-gray-700">
                  You also have the right to approach the Consumer Disputes Redressal Commission or other appropriate consumer forums if your complaint is not resolved satisfactorily.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                16. Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Material changes will be notified by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Posting the updated Terms on our website with a new &quot;Last Updated&quot; date</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your continued use of the Services after such changes constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                17. Severability
              </h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                18. Entire Agreement
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy and any other legal notices published on our website, constitute the entire agreement between you and LoanPilot regarding the use of the Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                19. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>LoanPilot</strong>
                </p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:contact@loanpilot.in" className="text-primary-600 hover:underline">contact@loanpilot.in</a></p>
                <p className="text-gray-700 mb-1">Website: <a href="https://loanpilot.in" className="text-primary-600 hover:underline">https://loanpilot.in</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-900">
                20. Acknowledgment
              </h2>
              <p className="text-gray-700 mb-4">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. YOU ALSO ACKNOWLEDGE THAT LOANPILOT IS NOT A LENDER AND DOES NOT MAKE CREDIT DECISIONS OR GUARANTEE LOAN APPROVALS.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
