const testimonials = [
  {
    rating: 5,
    text: 'Found the best loan rate in minutes. The process was smooth and hassle-free. Saved me ₹50,000 in interest!',
    author: 'Rajesh K., Mumbai',
  },
  {
    rating: 5,
    text: 'Great platform to compare loans. Saved me a lot of time and money! The eligibility checker showed me 8 lenders I could apply to.',
    author: 'Priya S., Delhi',
  },
  {
    rating: 5,
    text: 'Transparent process and excellent customer support. Highly recommended! Got approved in just 2 hours.',
    author: 'Amit R., Bangalore',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
