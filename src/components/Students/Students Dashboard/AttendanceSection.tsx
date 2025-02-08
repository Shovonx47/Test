"use client";
import { PieChart } from "react-minimal-pie-chart";

const AttendanceSection = () => {
  const attendanceData = [
    { title: "Present", value: 85, color: "#4CAF50" },
    { title: "Absent", value: 15, color: "#FF5252" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Attendance</h2>
      <div className="flex items-center justify-between">
        <div className="w-32">
          <PieChart
            data={attendanceData}
            lineWidth={20}
            paddingAngle={2}
            rounded
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
            labelStyle={{
              fontSize: "8px",
              fontFamily: "sans-serif",
              fill: "#fff",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">No. of total working days: <span className="font-semibold">30 days</span></p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
              <span className="text-sm">Present</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5252]"></div>
              <span className="text-sm">Absent</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Last 7 Days</h3>
        <div className="flex gap-1">
          {["P", "P", "P", "A", "P", "P", "P"].map((status, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded flex items-center justify-center text-xs text-white ${
                status === "P" ? "bg-[#4CAF50]" : "bg-[#FF5252]"
              }`}
            >
              {status}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
