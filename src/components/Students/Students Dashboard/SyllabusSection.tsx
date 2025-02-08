"use client";

const SyllabusSection = () => {
  const subjects = [
    {
      name: "Mathematics",
      progress: 75,
      color: "bg-blue-600",
    },
    {
      name: "English",
      progress: 60,
      color: "bg-green-600",
    },
    {
      name: "Physics",
      progress: 45,
      color: "bg-yellow-600",
    },
    {
      name: "Chemistry",
      progress: 85,
      color: "bg-purple-600",
    },
    {
      name: "Biology",
      progress: 90,
      color: "bg-red-600",
    },
    {
      name: "Bengali",
      progress: 95,
      color: "bg-indigo-600",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Syllabus</h2>
        <div className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
          Theme-based yet unlocked from the syllabus completion
        </div>
      </div>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{subject.name}</span>
              <span>{subject.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
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
