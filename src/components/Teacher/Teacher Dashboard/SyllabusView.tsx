import React from 'react';

interface LessonPlan {
  class: string;
  section: string;
  topic: string;
  progress: number;
  bgColor: string;
  progressColor: string;
  textColor: string;
}

const SyllabusView = () => {
  const lessonPlans: LessonPlan[] = [
    {
      class: 'Class V',
      section: 'B',
      topic: 'Introduction to history of Bangladesh',
      progress: 85,
      bgColor: 'bg-green-50',
      progressColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      class: 'Class V',
      section: 'A',
      topic: 'MCQ on Bangladeshi Poet',
      progress: 65,
      bgColor: 'bg-orange-50',
      progressColor: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      class: 'Class IV',
      section: 'C',
      topic: 'Biography - Kazi Nazrul Islam',
      progress: 45,
      bgColor: 'bg-blue-50',
      progressColor: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      class: 'Class V',
      section: 'A',
      topic: 'Bangla vocabulary',
      progress: 25,
      bgColor: 'bg-red-50',
      progressColor: 'bg-red-500',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Syllabus / Lesson Plan</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lessonPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg border p-4">
            <div className={`${plan.bgColor} px-4 py-2 rounded-lg mb-3`}>
              <p className={`${plan.textColor} text-sm font-medium`}>
                {plan.class}, {plan.section}
              </p>
            </div>
            
            <h3 className="text-gray-800 font-medium mb-4 h-12 line-clamp-2">
              {plan.topic}
            </h3>
            
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-4">
              <div
                className={`h-full ${plan.progressColor} rounded-full transition-all duration-300`}
                style={{ width: `${plan.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                Reschedule
              </button>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusView;