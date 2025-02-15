import React from 'react';

const AttendanceCard = () => {
  // Data
  const totalDays = 28;
  const present = 26;
  const absent = 1;
  const halfDay = 0;
  const late = 1;
  
  // Calendar data
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dateRange = '14 Jan 2025 - 21 Jan 2025';

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Attendance</h2>
        <button className="flex items-center text-sm text-gray-600">
          This Week
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Last 7 Days Calendar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Last 7 Days</span>
          <span className="text-sm text-gray-500">{dateRange}</span>
        </div>
        <div className="flex gap-1.5">
          {days.map((day, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium text-white
                ${index === 4 || index === 5 ? 'bg-red-500' : 'bg-green-500'}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Working Days Counter */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          No of total working days <span className="text-gray-900 font-medium">{totalDays} Days</span>
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="text-center border border-gray-300 rounded-lg p-3">
          <div className="text-sm text-gray-500 mb-1">Present</div>
          <div className="text-2xl font-semibold text-gray-900">{present}</div>
        </div>
        <div className="text-center border border-gray-300 rounded-lg p-3">
          <div className="text-sm text-gray-500 mb-1">Absent</div>
          <div className="text-2xl font-semibold text-gray-900">{absent}</div>
        </div>
        <div className="text-center border border-gray-300 rounded-lg p-3">
          <div className="text-sm text-gray-500 mb-1">Half day</div>
          <div className="text-2xl font-semibold text-gray-900">{halfDay}</div>
        </div>
        <div className="text-center border border-gray-300 rounded-lg p-3">
          <div className="text-sm text-gray-500 mb-1">Late</div>
          <div className="text-2xl font-semibold text-gray-900">{late}</div>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#f0f0f0"
            strokeWidth="12"
            fill="none"
          />
          {/* Present (green) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#22c55e"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${(present/totalDays) * 251.2} 251.2`}
          />
          {/* Late (blue) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#3b82f6"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${(late/totalDays) * 251.2} 251.2`}
            strokeDashoffset={-((present/totalDays) * 251.2)}
          />
          {/* Absent (red) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#ef4444"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${(absent/totalDays) * 251.2} 251.2`}
            strokeDashoffset={-(((present + late)/totalDays) * 251.2)}
          />
        </svg>
      </div>
    </div>
  );
};

export default AttendanceCard;