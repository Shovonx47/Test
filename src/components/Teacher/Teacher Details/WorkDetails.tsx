interface WorkProps {
  work: {
    contractType: string;
    shift: string;
    location: string;
  }
}

export default function WorkDetails({ work }: WorkProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="text-lg mb-4">Work Details</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-4">
        <div className="sm:col-span-5">
          <p className="text-sm text-headerText mb-2">Contract Type</p>
          <p className="text-dataText">{work.contractType}</p>
        </div>
        <div className="sm:col-span-3">
          <p className="text-sm text-headerText mb-2">Shift</p>
          <p className="text-dataText">{work.shift}</p>
        </div>
        <div className="sm:col-span-4">
          <p className="text-sm text-headerText mb-2">Work Location</p>
          <p className="text-dataText">{work.location}</p>
        </div>
      </div>
    </div>
  );
}