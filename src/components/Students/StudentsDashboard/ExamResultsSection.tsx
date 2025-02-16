"use client";
import React from "react";

const ExamResultsSection = () => {
  const subjects = [
    { name: "Mat", score: 100, color: "#A855F7" }, // Purple for Math
    { name: "Phy", score: 92, color: "#6366F1" }, // Blue for Physics
    { name: "Che", score: 90, color: "#22C55E" }, // Green for Chemistry
    { name: "Eng", score: 82, color: "#EF4444" }, // Red for English
  ];

  return (
    <div className="p-6 w-full max-w-xl bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-headerText font-semibold text-gray-900">Exam Result</h2>
        <select className="text-sm text-gray-600 px-3 py-1">
          <option>1st Quarter</option>
        </select>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>

      <div className="mb-6 flex gap-4">
        {subjects.slice(0, 4).map((subject) => (
          <div 
            key={subject.name} 
            className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1.5 w-24 mb-6"
          >
            <span style={{ color: subject.color }} className="font-medium">{subject.name}</span>
            <span className="text-sm text-gray-900">{subject.score}</span>
          </div>
        ))}
      </div>

      <div className="relative h-64">
        <div className="flex justify-between h-full">
          {subjects.map((subject) => (
            <div key={subject.name} className="flex flex-col items-center justify-end w-full">
              <div
                className="w-16 relative"
                style={{
                  height: `${subject.score}%`,
                  backgroundColor: subject.color,
                  borderRadius: "4px",
                }}
              >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm">
                  {subject.score}%
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600">{subject.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamResultsSection;