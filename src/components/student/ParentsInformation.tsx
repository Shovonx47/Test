import Image from 'next/image';

interface ParentsProps {
  parents: {
    id: string;
    avatar: string;
    name: string;
    relation: string;
    phone: string;
    email: string;
  }[]
}

export default function ParentsInformation({ parents }: ParentsProps) {
  return (
    <div className="space-y-4 bg-white rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-headerText">Parents Information</h3>
        <div className="space-y-4">
        {parents.map((parent) => (
          <div key={parent.id} className="flex items-center gap-8 p-4 border rounded-lg">
          <div className="flex items-center gap-4 flex-1">
            <Image 
            src={parent.avatar}
            alt={parent.name}
            width={48}
            height={48}
            className="rounded-full"
            />
            <div>
            <p className="font-semibold text-headerText">{parent.name}</p>
            <p className="text-sm text-blue-600">{parent.relation}</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-md text-headerText mb-1 font-semibold">Phone</p>
            <p className="text-dataText">{parent.phone}</p>
          </div>
          <div className="flex-1">
            <p className="text-md text-headerText mb-1 font-semibold">Email</p>
            <p className="text-dataText">{parent.email}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
} 