interface BankProps {
  bank: {
    name: string;
    branch: string;
    ifsc: string;
  }
}

export default function BankDetails({ bank }: BankProps) {
  return (
    <div className="p-4 border rounded-lg bg-[#FFFFFF]">
      <h3 className="text-lg font-semibold mb-4">Bank Details</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">Bank Name</p>
          <p className="text-dataText">{bank.name}</p>
        </div>
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">Branch</p>
          <p className="text-dataText">{bank.branch}</p>
        </div>
        <div>
          <p className="text-sm text-headerText font-semibold mb-2">IFSC</p>
          <p className="text-dataText">{bank.ifsc}</p>
        </div>
      </div>
    </div>
  );
} 