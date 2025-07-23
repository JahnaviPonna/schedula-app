const AppointmentForm = () => (
  <section className="px-4 py-8 bg-gray-900 rounded-lg mx-4 my-4">
    <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">Book an Appointment</h2>
    <form className="grid gap-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="Preferred Doctor or Specialization"
        className="p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="date"
        className="p-2 rounded bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Book Appointment
      </button>
    </form>
  </section>
);

export default AppointmentForm;
