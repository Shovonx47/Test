import Image from 'next/image';

interface StudentProps {
  student: {
    avatar: string;
    name: string;
    id: string;
    rollNo: string;
  }
}

export default function BasicInformation({ student }: StudentProps) {
  const studentInfo = {
    "Roll No": "777",
    "Gender": "Female",
    "Date Of Birth": "15 Jan 2015",
    "Blood Group": "O +ve",
    "Religion": "Islam",
    "Class": "III",
    "Mother tongue": "Bangla",
    "Language": (
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-gray-100 rounded text-sm">Bangla</span>
        <span className="px-2 py-1 bg-gray-100 rounded text-sm">English</span>
      </div>
    )
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      {/* Header with Image and Name */}
      <div className="flex items-center gap-4 mb-6">
        <Image 
          src={student.avatar} 
          alt={student.name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
            <h2 className="text-lg font-semibold text-headerText">{student.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#3D5EE1]">{student.id}</span>
            <span className="px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded">Active</span>
          </div>
        </div>
      </div>

      {/* Basic Information Title */}
        <h3 className="font-bold text-headerText mb-4">Basic Information</h3>

      {/* Information Grid */}
      <div className="space-y-4 mb-6">
        {Object.entries(studentInfo).map(([key, value]) => (
          <div key={key} className="flex">
            <div className="w-1/2 text-headerText font-semibold">{key}</div>
            <div className="w-1/2 text-dataText">{value}</div>
          </div>
        ))}
      </div>

      {/* Add Fees Button */}
      <button className="w-full bg-[#48CB45] text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
        Add Fees
      </button>
    </div>
  );
}