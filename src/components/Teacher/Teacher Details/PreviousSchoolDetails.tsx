import React from 'react';

interface PreviousSchoolDetailsProps {
  schoolName?: string;
  schoolAddress?: string;
  phoneNumber?: string;
}

const PreviousSchoolDetails: React.FC<PreviousSchoolDetailsProps> = ({
  schoolName = "BAF Shaheen College, Jashore",
  schoolAddress = "BAF Base BMR, Jashore",
  phoneNumber = "+8801790909090"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-300">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-medium text-gray-900">Previous School Details</h2>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex flex-row gap-6">
          <div className="flex-1 space-y-2">
            <label className="block text-md font-medium text-black">
              Previous School Name
            </label>
            <input
              type="text"
              className="w-full text-sm text-gray-600"
              value={schoolName}
              readOnly
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-md font-medium text-black">
              School Address
            </label>
            <input
              type="text"
              className="w-full text-sm text-gray-600"
              value={schoolAddress}
              readOnly
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-md font-medium text-black">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full text-sm text-gray-600"
              value={phoneNumber}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousSchoolDetails;