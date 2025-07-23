import doctors from '@/data/doctors.json';
import { Doctor } from '@/types';
import DoctorCard from '@/components/DoctorCard';

export default function BookAppointmentPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Select a Doctor</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {(doctors as Doctor[]).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
