import TimeSlotSelector from './TimeSlotSelector';

import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
  onSelect?: (doctor: Doctor) => void; // Optional if not always needed
}

export default function DoctorCard({ doctor, onSelect }: DoctorCardProps) {
  return (
    <div
      onClick={() => onSelect?.(doctor)}
      className="border p-4 rounded shadow hover:shadow-md transition cursor-pointer"
    >
      <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.specialization}</p>
    </div>
  );
}
