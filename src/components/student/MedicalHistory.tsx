interface MedicalProps {
  medical: {
    allergies?: string;
    medications?: string;
  }
}

export default function MedicalHistory({ medical }: MedicalProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">Medical History</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-700 font-semibold mb-2">Known Allergies</p>
          <span className="inline-block bg-gray-200 px-2 py-1 text-black text-sm rounded">
            {medical.allergies || 'None'}
          </span>
        </div>
        <div>
          <p className="text-sm text-black mb-2">Medications</p>
          <p>{medical.medications || '-'}</p>
        </div>
      </div>
    </div>
  );
}