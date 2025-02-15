import React from 'react';
import { ChevronDown, Medal } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  grade: string;
  level: string;
  progress: number;
  avatar: string;
}

interface ProgressChartProps {
  students: Student[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ students }) => {
  const sortedStudents = [...students].sort((a, b) => b.progress - a.progress);
  const topScore = sortedStudents[0]?.progress;
  const secondScore = sortedStudents[1]?.progress;

  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-800">Student Progress</h2>
        <button className="text-blue-600 text-xs hover:underline">
          This Month
          <ChevronDown className="w-4 h-4 ml-1 inline" />
        </button>
      </div>

      <div className="space-y-3">
        {students.map((student) => (
          <div key={student.id} className="flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={student.avatar}
                  alt={`${student.name}'s avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">{student.name}</h3>
                <p className="text-xs text-gray-500">
                  {student.level}, {student.grade}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {student.progress >= 95 && (
                <div className="text-blue-600">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {student.progress === topScore && (
                <Medal className="w-4 h-4 text-yellow-500" />
              )}
              {student.progress === secondScore && (
                <Medal className="w-4 h-4 text-gray-400" />
              )}
              <div
                className={`px-1.5 py-0.5 rounded text-xs font-medium
                ${
                  student.progress >= 95
                    ? 'bg-[#1ABE17] text-white'
                    : student.progress >= 80
                    ? 'bg-[#1ABE17] text-white'
                    : 'bg-[#1ABE17] text-white'
                }`}
              >
                {student.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;