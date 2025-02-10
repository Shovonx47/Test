"use client";
import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ScheduleSection = () => {
  const [currentMonth] = useState("January 2025");
  
  const calendarDays = [
    { date: 29, isCurrentMonth: false }, { date: 30, isCurrentMonth: false }, 
    { date: 31, isCurrentMonth: false }, { date: 1, isCurrentMonth: true },
    { date: 2, isCurrentMonth: true }, { date: 3, isCurrentMonth: true },
    { date: 4, isCurrentMonth: true }, { date: 5, isCurrentMonth: true },
    { date: 6, isCurrentMonth: true }, { date: 7, isCurrentMonth: true },
    { date: 8, isCurrentMonth: true }, { date: 9, isCurrentMonth: true },
    { date: 10, isCurrentMonth: true }, { date: 11, isCurrentMonth: true },
    { date: 12, isCurrentMonth: true }, { date: 13, isCurrentMonth: true },
    { date: 14, isCurrentMonth: true }, { date: 15, isCurrentMonth: true },
    { date: 16, isCurrentMonth: true }, { date: 17, isCurrentMonth: true },
    { date: 18, isCurrentMonth: true }, { date: 19, isCurrentMonth: true },
    { date: 20, isCurrentMonth: true }, { date: 21, isCurrentMonth: true },
    { date: 22, isCurrentMonth: true }, { date: 23, isCurrentMonth: true },
    { date: 24, isCurrentMonth: true }, { date: 25, isCurrentMonth: true },
    { date: 26, isCurrentMonth: true }, { date: 27, isCurrentMonth: true },
    { date: 28, isCurrentMonth: true }, { date: 29, isCurrentMonth: true },
    { date: 30, isCurrentMonth: true }, { date: 31, isCurrentMonth: true },
    { date: 1, isCurrentMonth: false }, { date: 2, isCurrentMonth: false },
    { date: 3, isCurrentMonth: false }, { date: 4, isCurrentMonth: false },
    { date: 5, isCurrentMonth: false }, { date: 6, isCurrentMonth: false },
    { date: 7, isCurrentMonth: false }, { date: 8, isCurrentMonth: false }
  ];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Schedules</h2>
        <button className="text-blue-600 text-sm font-medium">Add New</button>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-800">{currentMonth}</span>
          <div className="flex gap-4">
            <button className="text-gray-600">
              <IoChevronBack size={20} />
            </button>
            <button className="text-gray-600">
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-sm">
          {weekDays.map(day => (
            <div key={day} className="text-center text-gray-600">
              {day}
            </div>
          ))}
          
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`text-center py-1 ${
                !day.isCurrentMonth ? 'text-gray-400' :
                day.date === 30 ? 'bg-blue-600 text-white rounded-lg' :
                'text-gray-800'
              }`}
            >
              {day.date}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Exams</h3>
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-800">Monthly Exam</h4>
              <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">25 Days More</span>
            </div>
            <div className="mt-2">
              <p className="text-gray-700 mt-3">Chemistry</p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-gray-500">01:30 - 02:15 PM</span>
                <div className="text-right">
                  <p className="text-gray-500">05 March 2025</p>
                  <p className="text-blue-600">Room No : 12</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-800">Monthly Exam</h4>
              <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">27 Days More</span>
            </div>
            <div className="mt-2">
              <p className="text-gray-700 mt-4">Mathematics</p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-gray-500">01:30 - 02:15 PM</span>
                <div className="text-right">
                  <p className="text-gray-500">7 March 2025</p>
                  <p className="text-blue-600">Room No : 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;