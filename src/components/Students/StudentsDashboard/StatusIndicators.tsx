import React from 'react';

const StatusIndicators = () => {
  const indicators = [
    {
      color: "bg-green-500",
      label: "Exam Result",
      shadow: "shadow-[0_4px_6px_-1px_rgba(34,197,94,0.3)]" // green shadow
    },
    {
      color: "bg-red-500",
      label: "Pay Fees",
      shadow: "shadow-[0_4px_6px_-1px_rgba(239,68,68,0.3)]" // red shadow
    },
    {
      color: "bg-yellow-500",
      label: "Attendance",
      shadow: "shadow-[0_4px_6px_-1px_rgba(234,179,8,0.3)]" // yellow shadow
    },
    {
      color: "bg-blue-500",
      label: "Calendar",
      shadow: "shadow-[0_4px_6px_-1px_rgba(59,130,246,0.3)]" // blue shadow
    }
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between space-x-5">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className={`bg-white rounded-md p-4 w-52 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${indicator.shadow}`}
          >
            <div className="flex items-center space-x-3">
              <div className={`${indicator.color} w-8 h-8 rounded-md flex-shrink-0`}></div>
              <span className="font-medium text-gray-800 truncate">
                {indicator.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusIndicators;