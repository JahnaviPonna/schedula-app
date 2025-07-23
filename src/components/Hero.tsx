export default function Hero() {
  return (
    <section className="text-center py-16 bg-gray-800">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to Shedula</h1>
      <p className="text-lg text-gray-300 mb-6">Book your doctor appointments easily.</p>
      <a href="/booking">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded transition">
          Book an Appointment
        </button>
      </a>
    </section>
  )
}
