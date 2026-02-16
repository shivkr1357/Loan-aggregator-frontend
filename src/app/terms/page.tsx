export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By using our platform, you agree to be bound by these Terms &
          Conditions. If you do not agree, please do not use our services.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Service</h2>
        <p className="text-gray-700 mb-4">
          You agree to use our service only for lawful purposes and in
          accordance with these Terms. You are responsible for the accuracy of
          information you provide.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We are not a lender and do not make credit decisions. We connect you
          with lending partners. We are not responsible for the terms, rates, or
          conditions of loans offered by third-party lenders.
        </p>
      </div>
    </div>
  );
}
