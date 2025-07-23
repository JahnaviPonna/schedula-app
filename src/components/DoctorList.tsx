'use client'
import { Doctor } from '@/types'
import doctorsData from '@/data/doctors.json'
import DoctorCard from './DoctorCard'

export default function DoctorList({ onSelect }: { onSelect: (d: Doctor) => void }) {
  const doctors: Doctor[] = doctorsData

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-300 text-center">Select a Doctor</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
