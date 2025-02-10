import React from 'react';
import { ChevronDown } from 'lucide-react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

const HomeWorksSection = () => {
  const homeworks = [
    {
      subject: 'Business',
      title: 'Business - How to open an online store',
      assignedBy: 'Omar',
      dueDate: '08 Feb 2025',
      progress: 90,
      image: Avatar.src
    },
    {
      subject: 'Chemistry',
      title: 'Chemistry - Separating substances',
      assignedBy: 'Sakib',
      dueDate: '09 Feb 2025',
      progress: 65,
      image: Avatar.src
    },
    {
      subject: 'Mathematics',
      title: 'Math - Equation To Solve Page 28',
      assignedBy: 'Rasel',
      dueDate: '10 Feb 2025',
      progress: 30,
      image: Avatar.src
    },
    {
      subject: 'English',
      title: 'English - Phrase Introduction',
      assignedBy: 'Nisha',
      dueDate: '08 Feb 2025',
      progress: 10,
      image: Avatar.src
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'text-blue-500';
    if (progress >= 50) return 'text-green-500';
    if (progress >= 25) return 'text-red-500';
    return 'text-red-500';
  };

  const getProgressRingColor = (progress: number) => {
    if (progress >= 75) return 'border-blue-500';
    if (progress >= 50) return 'border-green-500';
    if (progress >= 25) return 'text-red-500';
    return 'border-red-500';
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'Business':
        return 'text-blue-500';
      case 'Chemistry':
        return 'text-green-500';
      case 'Mathematics':
        return 'text-red-500';
      case 'English':
        return 'text-blue-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Home Works</h2>
        <div className="relative">
          <select className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm text-gray-500 focus:outline-none cursor-pointer">
            <option>All Subject</option>
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div className="border-b border-gray-200 -mx-4 mb-4"></div>

      <div className="space-y-6">
        {homeworks.map((homework, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={homework.image} 
                  alt={homework.subject}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className={`text-xs font-medium ${getSubjectColor(homework.subject)}`}>
                  {homework.subject}
                </p>
                <p className="text-sm font-medium text-gray-900 mt-0.5">
                  {homework.title}
                </p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{homework.assignedBy}</span>
                  <span className="mx-2">·</span>
                  <span>Due by : {homework.dueDate}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className={`w-12 h-12 rounded-full border-4 ${getProgressRingColor(homework.progress)} flex items-center justify-center`}
              >
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