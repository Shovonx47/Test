interface BankProps {
  bank: {
    name: string;
    branch: string;
    ifsc: string;
  }
}

export default function BankDetails({ bank }: BankProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Bank Details</h3>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Bank Name</p>
          <p>{bank.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Branch</p>
          <p>{bank.branch}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">IFSC</p>
          <p>{bank.ifsc}</p>
        </div>
      </div>
    </div>
  );
} 