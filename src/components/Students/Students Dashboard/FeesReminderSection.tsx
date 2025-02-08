"use client";

const FeesReminderSection = () => {
  const fees = [
    {
      type: "Mess Fees",
      amount: "₹ 1,500",
      dueDate: "15 Feb 2025",
      lastDate: "20 Feb 2025",
    },
    {
      type: "Hostel",
      amount: "₹ 5,000",
      dueDate: "15 Feb 2025",
      lastDate: "20 Feb 2025",
    },
    {
      type: "Exam Fees",
      amount: "₹ 1,500",
      dueDate: "15 Feb 2025",
      lastDate: "20 Feb 2025",
    },
    {
      type: "Transport Fees",
      amount: "₹ 1,000",
      dueDate: "15 Feb 2025",
      lastDate: "20 Feb 2025",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Fees Reminder</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>
      <div className="space-y-3">
        {fees.map((fee, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div>
              <h4 className="font-medium">{fee.type}</h4>
              <p className="text-sm text-gray-500">Due Date: {fee.dueDate}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{fee.amount}</p>
              <p className="text-sm text-gray-500">Last Date: {fee.lastDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesReminderSection;
