import React from 'react';

interface ClassSession {
  startTime: string;
  endTime: string;
  className: string;
  isAfternoon?: boolean;
}

interface ScheduleProps {
  date: string;
  sessions: ClassSession[];
}

const Schedule: React.FC<ScheduleProps> = ({ date, sessions }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-navy-800 text-lg font-medium">Today's Class</h2>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-3"
          >
            <div className={`inline-flex px-2 py-1 rounded-md text-sm mb-2 ${
              session.isAfternoon ? 'bg-purple-100 text-purple-700' : 'bg-green-400 text-white'
            }`}>
              {session.startTime} - {session.endTime}
            </div>
            <div className="text-gray-700 text-sm">{session.className}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
export default function TodaySchedule() {
  const scheduleData = {
    date: "16 May 2024",
    sessions: [
      {
        startTime: "09:00",
        endTime: "09:45",
        className: "Class V, B"
      },
      {
        startTime: "09:00",
        endTime: "09:45",
        className: "Class IV, C"
      },
      {
        startTime: "11:30",
        endTime: "12:15",
        className: "Class V, B",
        isAfternoon: true
      },
      {
        startTime: "01:30",
        endTime: "02:15",
        className: "Class V, B",
        isAfternoon: true
      }
    ]
  };

  return <Schedule {...scheduleData} />;
}