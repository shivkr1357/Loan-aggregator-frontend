import Link from 'next/link';

const faqs = [
  {
    question: 'Is LoanPilot free to use?',
    answer:
      "Yes, absolutely! Comparing loans on LoanPilot is 100% free. We don't charge users any fees. We earn a commission from lenders when you apply through our platform, but you pay the same rate as if you applied directly.",
  },
  {
    question: 'Will checking eligibility affect my credit score?',
    answer:
      'No, checking your eligibility and comparing loan rates on LoanPilot does not impact your credit score. We only show you pre-qualified offers. Your credit score is only checked when you actually apply with a lender.',
  },
  {
    question: 'How accurate are the interest rates shown?',
    answer:
      "We display interest rate ranges (e.g., 10.5% - 18%) based on publicly available information from lenders. Your actual rate depends on factors like credit score, income, loan amount, and lender's assessment. The rates shown are indicative starting rates.",
  },
  {
    question: 'How quickly can I get a loan approved?',
    answer:
      'Approval times vary by lender. Some fintech lenders offer instant approval (within minutes), while traditional banks may take 1-3 business days. We show estimated approval times for each lender to help you choose.',
  },
  {
    question: 'What documents do I need to apply?',
    answer:
      "Typically, you'll need: Aadhaar card, PAN card, salary slips (last 3 months), bank statements (last 6 months), and employment proof. Requirements vary by lender and loan type. The lender will provide a complete list when you apply.",
  },
  {
    question: 'Can I get a loan with a low credit score?',
    answer:
      'Yes, some lenders offer loans to people with lower credit scores, though interest rates may be higher. Use our eligibility checker to see which lenders might approve you based on your profile. Improving your credit score can help you get better rates.',
  },
  {
    question: 'Is LoanPilot a lender?',
    answer:
      "No, LoanPilot is a loan aggregator platform. We help you compare loans from multiple lenders but we don't lend money ourselves. When you apply, you'll be redirected to the lender's website or application portal.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
          <div className="text-center mt-8">
            <Link
              href="/support"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
