import React from 'react';

interface AddressProps {
  addresses: {
    current: string;
    permanent: string;
  }
}

export default function Address({ addresses }: AddressProps) {
  return (
    <div className="p-4 border rounded-lg h-full bg-white">
      <h3 className="text-lg mb-3 text-headerText">Address</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-headerText font-medium mb-2">Current Address</p>
            <p className="text-sm text-dataText break-words">{addresses.current}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-headerText font-medium mb-2">Permanent Address</p>
            <p className="text-sm text-dataText break-words">{addresses.permanent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}