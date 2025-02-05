interface AddressProps {
  addresses: {
    current: string;
    permanent: string;
  }
}

export default function Address({ addresses }: AddressProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Address</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Current Address</p>
          <p>{addresses.current}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Permanent Address</p>
          <p>{addresses.permanent}</p>
        </div>
      </div>
    </div>
  );
} 