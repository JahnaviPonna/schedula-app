const Reviews = () => (
  <section className="px-4 py-8">
    <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">What Our Patients Say</h2>
    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="bg-gray-800 p-4 rounded">
        <p className="text-white">"Amazing experience! Got an appointment within minutes."</p>
        <span className="text-gray-400 text-sm">- Ravi Kumar</span>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <p className="text-white">"Very professional doctors and smooth booking process."</p>
        <span className="text-gray-400 text-sm">- Anjali Sharma</span>
      </div>
    </div>
  </section>
);

export default Reviews;
