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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image 
          src={student.avatar} 
          alt={student.name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{student.name}</h2>
          <span className="text-sm text-gray-500">{student.id}</span>
          <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Active</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Roll No</p>
          <p>{student.rollNo}</p>
        </div>
        {/* Add other basic info fields similarly */}
      </div>
    </div>
  );
} 