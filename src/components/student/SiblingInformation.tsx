import Image from 'next/image';

interface SiblingProps {
  siblings: {
    id: string;
    avatar: string;
    name: string;
    class: string;
  }[]
}

export default function SiblingInformation({ siblings }: SiblingProps) {
  return (
    <div className="space-y-4 bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold">Sibling Information</h3>
      {siblings.map((sibling) => (
        <div key={sibling.id} className="flex items-center gap-4 bg-[#FAFAFA] p-4 flex-col sm:flex-row">
          <Image
            src={sibling.avatar}
            alt={sibling.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{sibling.name}</p>
            <p className="text-sm text-gray-500">{sibling.class}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 