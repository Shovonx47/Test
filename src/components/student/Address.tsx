import React from 'react';

interface AddressProps {
  addresses: {
    current: string;
    permanent: string;
  }
}

export default function Address({ addresses }: AddressProps) {
  return (
    <div className="p-6 border rounded-lg h-full">
      <h3 className="text-lg font-semibold mb-6">Address</h3>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Current Address</p>
          <p className="text-sm break-words">{addresses.current}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Permanent Address</p>
          <p className="text-sm break-words">{addresses.permanent}</p>
        </div>
      </div>
    </div>
  );
}