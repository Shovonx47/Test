interface MedicalProps {
  medical: {
    allergies?: string;
    medications?: string;
  }
}

export default function MedicalHistory({ medical }: MedicalProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Medical History</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">Known Allergies</p>
          <p className="text-dataText">{medical.allergies || 'None'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Medications</p>
          <p>{medical.medications || '-'}</p>
        </div>
      </div>
    </div>
  );
} 