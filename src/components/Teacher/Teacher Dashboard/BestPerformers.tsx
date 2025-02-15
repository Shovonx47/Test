import React from 'react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

const BestPerformers = () => {
  const performers = [
    {
      title: "Class II, C",
      percentage: 80,
      color: "bg-blue-500",
      images: [Avatar.src, Avatar.src, Avatar.src]
    },
    {
      title: "Class III, B",
      percentage: 54,
      color: "bg-yellow-400",
      images: [Avatar.src, Avatar.src, Avatar.src]
    },
    {
      title: "Class V, A",
      percentage: 70,
      color: "bg-cyan-400",
      images: [Avatar.src, Avatar.src, Avatar.src]
    }
  ];

  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-800">Best Performers</h2>
        <button className="text-blue-600 text-xs hover:underline">
          View All
        </button>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>

      <div className="space-y-3">
        {performers.map((performer, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-xs text-gray-600 w-16">{performer.title}</span>
            <div className="relative flex-1 h-6">
              <div 
                className={`h-full ${performer.color} rounded-full flex items-center`}
                style={{ width: `${performer.percentage}%` }}
              >
                <div className="flex items-center pl-1">
                  <div className="flex -space-x-2">
                    {performer.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Performance indicator ${idx + 1}`}
                        className="w-4 h-4 rounded-full border border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                <span className="bg-white px-1.5 py-0.5 rounded text-xs text-gray-500">
                  {performer.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPerformers;