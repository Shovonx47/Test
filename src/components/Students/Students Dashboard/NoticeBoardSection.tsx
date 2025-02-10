"use client";

const NoticeBoardSection = () => {
  const notices = [
    {
      title: "Exam Schedule Release",
      date: "02 Feb 2025",
      type: "Important",
      typeColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Follow up - Exam Preparation!",
      date: "01 Feb 2025",
      type: "Important",
      typeColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Updated Syllabus Instructions",
      date: "31 Jan 2025",
      type: "In Progress",
      typeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Online Classes New Schedule",
      date: "30 Jan 2025",
      type: "Not Started",
      typeColor: "bg-gray-100 text-gray-600",
    },
    {
      title: "Sports Day Program...!!",
      date: "29 Jan 2025",
      type: "Completed",
      typeColor: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Notice Board</h2>
        <div className="flex items-center gap-4">
          <button className="text-headerText text-sm">View All</button>
        </div>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>
      <div className="space-y-3">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div>
              <h4 className="font-medium">{notice.title}</h4>
              <p className="text-sm text-gray-500">Added on: {notice.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardSection;
