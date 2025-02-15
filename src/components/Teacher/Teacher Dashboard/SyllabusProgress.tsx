import React from 'react';

interface SyllabusProgressProps {
  completed: number;
  pending: number;
}

const SyllabusProgress: React.FC<SyllabusProgressProps> = ({ completed = 95, pending = 5 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 8;
  
  // Calculate the arc lengths for both segments
  const blueOffset = circumference - (completed / 100) * circumference;
  const redOffset = (completed / 100) * circumference;
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 max-w-md">
      <div className="flex items-center space-x-6">
        <div className="relative w-24 h-24 flex-shrink-0">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Blue progress segment */}
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="#4F46E5"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={blueOffset}
              strokeLinecap="round"
            />
            {/* Red segment */}
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="#ef4444"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${circumference * (pending/100)} ${circumference * (1-pending/100)}`}
              strokeDashoffset={0}
              strokeLinecap="round"
              className="transform rotate-90"
            />
          </svg>
        </div>
        
        <div className="flex-grow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Syllabus</h2>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Completed: {completed}%</div>
            <div>Pending: {pending}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusProgress;