export default function TimeSlotSelector({ slots }: { slots: string[] }) {
  return (
    <div className="mt-2">
      <h4 className="font-semibold mb-1">Available Slots:</h4>
      <div className="flex flex-wrap gap-2">
        {slots.map((slot, idx) => (
          <button key={idx} className="border border-blue-600 px-3 py-1 rounded hover:bg-blue-100">
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}
