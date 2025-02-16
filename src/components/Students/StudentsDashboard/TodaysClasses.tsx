import React from 'react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

const TodaysClasses = () => {
  const classes = [
    {
      subject: "English",
      time: "09:00 - 09:45 AM",
      status: "Completed",
      image: Avatar.src
    },
    {
      subject: "Math",
      time: "10:45 - 11:30 AM",
      status: "Completed",
      image: Avatar.src
    },
    {
      subject: "Chemistry",
      time: "11:30 - 12:15 AM",
      status: "In Progress",
      image: Avatar.src
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Today's Class</h2>
          <span className="text-sm text-gray-300">6 Feb 2025</span>
        </div>
        <div className="border-b border-gray-200 -mx-6"></div>
      </div>
      
      <div className="space-y-4">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white rounded-lg p-2 hover:bg-gray-50 border border-gray-200 p-3 shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <img
                src={classItem.image}
                alt={`${classItem.subject} teacher`}
                className="w-10 h-10 object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-800">{classItem.subject}</h3>
                <p className="text-sm text-gray-500">{classItem.time}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-sm text-xs font-medium ${getStatusStyle(classItem.status)}`}>
              {classItem.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysClasses;