export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      <div className="prose max-w-none">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-lg font-semibold text-yellow-800">
            We are not a lender. We connect users with lending partners.
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          LoanAggregator is a loan comparison platform that connects borrowers
          with lending partners. We do not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Make credit decisions</li>
          <li>Provide loans directly</li>
          <li>Guarantee loan approval</li>
          <li>Set interest rates or loan terms</li>
        </ul>
        <p className="text-gray-700 mb-4">
          All loan offers, interest rates, and terms are determined by the
          lending partners. We are not responsible for the accuracy of
          information provided by lenders or for any loan agreements entered
          into between borrowers and lenders.
        </p>
        <p className="text-gray-700 mb-4">
          Please review all loan terms carefully before accepting any offer. We
          recommend consulting with a financial advisor before making any
          financial decisions.
        </p>
      </div>
    </div>
  );
}
