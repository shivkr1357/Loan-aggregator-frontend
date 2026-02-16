export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700">support@loanaggregator.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+91-1800-XXX-XXXX</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
