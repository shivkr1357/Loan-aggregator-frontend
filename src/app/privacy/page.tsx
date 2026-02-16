export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect information that you provide directly to us, including your
          name, email address, phone number, city, income details, and loan
          requirements.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use your information to connect you with lending partners and
          provide loan comparison services. We do not sell your personal
          information to third parties.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the internet is
          100% secure.
        </p>
      </div>
    </div>
  );
}
