interface SchoolProps {
  school: {
    name: string;
    address: string;
  }
}

export default function PreviousSchool({ school }: SchoolProps) {
  return (
    <div className="p-4 border rounded-lg bg-[#FFFFFF]">
      <h3 className="text-lg font-semibold mb-4">Previous School</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">Previous School Name</p>
          <p className="text-dataText">{school.name}</p>
        </div>
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">School Address</p>
          <p className="text-dataText">{school.address}</p>
        </div>
      </div>
    </div>
  );
} 