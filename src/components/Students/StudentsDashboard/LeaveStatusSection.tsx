"use client";

const LeaveStatusSection = () => {
  const leaveTypes = [
    {
      type: "Emergency Leave",
      date: "03 Jan 2025",
      status: "Approved",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      type: "Medical Leave",
      date: "20 Jan 2025",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      type: "Casual Leave",
      date: "25 Jan 2025",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      type: "Fever",
      date: "28 Jan 2025",
      status: "Approved",
      statusColor: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Leave Status</h2>
        <select className="text-sm px-2 py-1">
          <option>This Month</option>
        </select>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>
      <div className="space-y-3">
        {leaveTypes.map((leave, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#FDE9ED]"></div>
              <div>
                <h4 className="font-medium">{leave.type}</h4>
                <p className="text-sm text-gray-500">Date: {leave.date}</p>
              </div>
            </div>
            <span
              className={`px-2 py-1 text-sm ${leave.statusColor}`}
            >
              {leave.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveStatusSection;