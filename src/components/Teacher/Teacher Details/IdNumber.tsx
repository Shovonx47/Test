import React from 'react';

interface IdNumberProps {
  idNumber: string;
}

const IdNumber: React.FC<IdNumberProps> = ({ idNumber }) => {
  return (
    <div className="w-[318px] rounded-lg bg-white shadow-sm p-4">
      <h2 className="text-md font-medium text-black">ID Number</h2>
      <div className="flex items-center gap-3 mt-1">
        <div className="w-9 h-9 bg-[#F8FAFC] rounded-sm flex-shrink-0" />
        <span className="text-base text-gray-900">{idNumber}</span>
      </div>
    </div>
  );
};

export default IdNumber;