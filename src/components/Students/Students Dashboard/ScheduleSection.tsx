"use client";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ScheduleSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Schedules</h2>
        <button className="text-blue-600 text-sm">Add New</button>
      </div>
      
      <div className="calendar">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-medium">January 2025</h3>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-gray-100">
              <IoChevronBack />
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <IoChevronForward />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-sm">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`p-2 text-center rounded-full ${
                day === 20 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-3">Exams</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded">
            <h4 className="font-medium">Monthly Exam</h4>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <p>Chemistry</p>
              <p>25 Jan 2025</p>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <h4 className="font-medium">Monthly Exam</h4>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <p>Mathematics</p>
              <p>27 Jan 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
