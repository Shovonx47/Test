import React from 'react';

const SyllabusSection = () => {
  const subjects = [
    {
      name: "Mathematics",
      progress: 25,
      color: "bg-blue-500",
    },
    {
      name: "English",
      progress: 45,
      color: "bg-yellow-500",
    },
    {
      name: "Physics",
      progress: 20,
      color: "bg-cyan-500",
    },
    {
      name: "Chemistry",
      progress: 35,
      color: "bg-blue-600",
    },
    {
      name: "Business",
      progress: 40,
      color: "bg-green-500",
    },
    {
      name: "Bangla",
      progress: 75,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="bg-white p-6 pb-32 rounded-lg shadow w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-2">Syllabus</h2>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>
      
      <div className="flex justify-center mb-6">
        <div className="bg-green-50 text-green-600 text-sm px-4 py-2 whitespace-nowrap">
          These Result are obtained from the syllabus completion
        </div>
      </div>

      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-24 text-sm text-gray-700">{subject.name}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div
                className={`${subject.color} h-2 rounded-full`}
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusSection;