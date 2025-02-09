import React from 'react';

const HomeWorksSection = () => {
  const homeworks = [
    {
      subject: 'Business',
      title: 'Business - How to open an online store',
      assignedBy: 'Omar',
      dueDate: '08 Feb 2025',
      progress: 90,
      icon: '💼'
    },
    {
      subject: 'Chemistry',
      title: 'Chemistry - Separating substances',
      assignedBy: 'Sakib',
      dueDate: '09 Feb 2025',
      progress: 65,
      icon: '🧪'
    },
    {
      subject: 'Mathematics',
      title: 'Math - Equation To Solve Page 28',
      assignedBy: 'Rasel',
      dueDate: '10 Feb 2025',
      progress: 30,
      icon: '📐'
    },
    {
      subject: 'English',
      title: 'English - Phrase Introduction',
      assignedBy: 'Nisha',
      dueDate: '08 Feb 2025',
      progress: 10,
      icon: '📚'
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'text-blue-500';
    if (progress >= 50) return 'text-green-500';
    if (progress >= 25) return 'text-orange-500';
    return 'text-red-500';
  };

  const getProgressRingColor = (progress: number) => {
    if (progress >= 75) return 'border-blue-500';
    if (progress >= 50) return 'border-green-500';
    if (progress >= 25) return 'border-orange-500';
    return 'border-red-500';
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Home Works</h2>
        <select className="text-sm text-gray-500 border rounded px-2 py-1">
          <option>All Subject</option>
        </select>
      </div>

      <div className="space-y-4">
        {homeworks.map((homework, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">{homework.icon}</span>
              </div>
              <div>
                <p className="text-xs text-blue-500">{homework.subject}</p>
                <p className="text-sm font-medium">{homework.title}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{homework.assignedBy}</span>
                  <span className="mx-2">·</span>
                  <span>Due by : {homework.dueDate}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`w-12 h-12 rounded-full border-4 ${getProgressRingColor(homework.progress)} flex items-center justify-center`}>
                <span className={`text-sm font-medium ${getProgressColor(homework.progress)}`}>
                  {homework.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorksSection;